<?php
// Simple test script to check if PHP mail() function works
header('Content-Type: application/json');

// Test if mail() function exists
if (!function_exists('mail')) {
    echo json_encode([
        'status' => 'error',
        'message' => 'mail() function is NOT available on this server',
        'solution' => 'Contact your hosting provider to enable mail() function or use SMTP instead'
    ]);
    exit;
}

// Try to send a test email
$to = 'emma@middlepennymortgagesolutions.co.uk';
$subject = 'Test Email from Contact Form Script';
$message = 'This is a test email to verify the mail() function is working correctly.';
$headers = "From: noreply@middlepennymortgagesolutions.co.uk\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$result = mail($to, $subject, $message, $headers);

if ($result) {
    echo json_encode([
        'status' => 'success',
        'message' => 'Test email sent successfully! Check your inbox at ' . $to,
        'php_version' => phpversion(),
        'server_info' => $_SERVER['SERVER_SOFTWARE'] ?? 'Unknown'
    ]);
} else {
    $lastError = error_get_last();
    echo json_encode([
        'status' => 'error',
        'message' => 'mail() function failed to send email',
        'php_version' => phpversion(),
        'server_info' => $_SERVER['SERVER_SOFTWARE'] ?? 'Unknown',
        'last_error' => $lastError,
        'possible_causes' => [
            'mail() function is disabled by hosting provider',
            'Server has no mail transfer agent (MTA) configured',
            'Firewall blocking outbound mail',
            'From address not matching server domain'
        ]
    ]);
}
?>
