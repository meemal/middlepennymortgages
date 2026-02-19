<?php
// Strict error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/error.log');

// Start session for rate limiting
session_start();

// Set headers for JSON response and CORS
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

/**
 * Rate Limiting Function
 * Limits submissions to 5 per hour per session
 */
function checkRateLimit() {
    $maxSubmissions = 5;
    $timeWindow = 3600; // 1 hour in seconds

    if (!isset($_SESSION['submissions'])) {
        $_SESSION['submissions'] = [];
    }

    // Remove submissions older than the time window
    $currentTime = time();
    $_SESSION['submissions'] = array_filter($_SESSION['submissions'], function($timestamp) use ($currentTime, $timeWindow) {
        return ($currentTime - $timestamp) < $timeWindow;
    });

    // Check if limit exceeded
    if (count($_SESSION['submissions']) >= $maxSubmissions) {
        return false;
    }

    // Add current submission timestamp
    $_SESSION['submissions'][] = $currentTime;
    return true;
}

/**
 * Sanitize input to prevent header injection
 */
function sanitizeInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    // Remove any newlines or carriage returns to prevent header injection
    $data = str_replace(["\r", "\n", "%0a", "%0d"], '', $data);
    return $data;
}

/**
 * Validate email format
 */
function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

/**
 * Log failed attempts
 */
function logError($message) {
    $logFile = __DIR__ . '/contact-errors.log';
    $timestamp = date('Y-m-d H:i:s');
    $ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    $logMessage = "[$timestamp] IP: $ip - $message\n";
    error_log($logMessage, 3, $logFile);
}

// Check rate limit
if (!checkRateLimit()) {
    http_response_code(429);
    logError('Rate limit exceeded');
    echo json_encode([
        'success' => false,
        'message' => 'Too many submissions. Please try again later.'
    ]);
    exit;
}

// Get JSON input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid request data']);
    exit;
}

// Extract and sanitize form data
$name = sanitizeInput($data['name'] ?? '');
$email = sanitizeInput($data['email'] ?? '');
$phone = sanitizeInput($data['phone'] ?? '');
$subject = sanitizeInput($data['subject'] ?? '');
$message = sanitizeInput($data['message'] ?? '');
$privacyAccepted = isset($data['privacyAccepted']) && $data['privacyAccepted'] === true;
$marketingConsent = isset($data['marketingConsent']) && $data['marketingConsent'] === true;
$honeypot = sanitizeInput($data['website'] ?? ''); // Honeypot field

// Check honeypot - if filled, it's a bot
if (!empty($honeypot)) {
    logError("Honeypot triggered: $honeypot");
    // Return success to fool bots
    echo json_encode(['success' => true, 'message' => 'Message sent successfully']);
    exit;
}

// Validate required fields
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Please fill in all required fields'
    ]);
    exit;
}

// Validate email format
if (!validateEmail($email)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Please provide a valid email address'
    ]);
    exit;
}

// Check privacy acceptance
if (!$privacyAccepted) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'You must accept the privacy policy'
    ]);
    exit;
}

// Prepare email to Emma
$to = 'naomispirit@gmail.com';
$emailSubject = 'New Contact Form Submission - ' . $subject;

// Build email body
$emailBody = "New contact form submission from your website:\n\n";
$emailBody .= "Name: $name\n";
$emailBody .= "Email: $email\n";
$emailBody .= "Phone: " . ($phone ?: 'Not provided') . "\n";
$emailBody .= "Subject: $subject\n";
$emailBody .= "Marketing Consent: " . ($marketingConsent ? 'Yes' : 'No') . "\n\n";
$emailBody .= "Message:\n$message\n\n";
$emailBody .= "---\n";
$emailBody .= "Submitted: " . date('d/m/Y H:i:s') . "\n";
$emailBody .= "IP Address: " . ($_SERVER['REMOTE_ADDR'] ?? 'unknown') . "\n";

// Prepare headers for email to Emma
$headers = "From: noreply@middlepennymortgagesolutions.co.uk\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Save submission to local JSON file for backup
$submissionsFile = __DIR__ . '/submissions.json';
$submission = [
    'timestamp' => date('Y-m-d H:i:s'),
    'name' => $name,
    'email' => $email,
    'phone' => $phone,
    'subject' => $subject,
    'message' => $message,
    'marketingConsent' => $marketingConsent,
    'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown'
];

// Read existing submissions
$submissions = [];
if (file_exists($submissionsFile)) {
    $content = file_get_contents($submissionsFile);
    $submissions = json_decode($content, true) ?: [];
}

// Add new submission
$submissions[] = $submission;

// Save back to file
file_put_contents($submissionsFile, json_encode($submissions, JSON_PRETTY_PRINT));

// Send email to Emma
$emailSent = mail($to, $emailSubject, $emailBody, $headers);

if (!$emailSent) {
    http_response_code(500);
    $errorMsg = error_get_last();
    logError("Failed to send email to Emma for: $name ($email). Error: " . json_encode($errorMsg));
    echo json_encode([
        'success' => false,
        'message' => 'Sorry, there was an error sending your message. Please try again or contact us directly.',
        'debug' => 'Check server logs for details. mail() function may be disabled.'
    ]);
    exit;
}

// Send auto-response to customer
$customerSubject = 'Thank you for contacting Middlepenny Mortgage Solutions';
$customerBody = "Dear $name,\n\n";
$customerBody .= "Thank you for getting in touch with Middlepenny Mortgage Solutions.\n\n";
$customerBody .= "Emma has received your enquiry regarding '$subject' and will be in contact with you shortly to discuss your needs.\n\n";
$customerBody .= "In the meantime, if you have any urgent questions, please don't hesitate to call on 07752 347860.\n\n";
$customerBody .= "Best regards,\n";
$customerBody .= "Emma Murphy\n";
$customerBody .= "Middlepenny Mortgage Solutions\n";
$customerBody .= "07752 347860\n";
$customerBody .= "emma@middlepennymortgagesolutions.co.uk\n\n";
$customerBody .= "---\n";
$customerBody .= "YOUR PROPERTY MAY BE REPOSSESSED IF YOU DO NOT KEEP UP REPAYMENTS ON YOUR MORTGAGE.\n";

$customerHeaders = "From: Emma Murphy <emma@middlepennymortgagesolutions.co.uk>\r\n";
$customerHeaders .= "Reply-To: emma@middlepennymortgagesolutions.co.uk\r\n";
$customerHeaders .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$customerHeaders .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send auto-response (don't fail if this doesn't work)
mail($email, $customerSubject, $customerBody, $customerHeaders);

// Return success response
http_response_code(200);
echo json_encode([
    'success' => true,
    'message' => 'Message sent successfully'
]);
