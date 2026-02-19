# Contact Form Deployment Notes

## Overview
The contact form sends emails directly using PHP's `mail()` function. No database is required.

## Files Deployed
- `/dist/api/contact-submit.php` - The PHP email handler
- Contact form on the website calls this endpoint

## Server Requirements

### 1. PHP Support
Your web server MUST have PHP enabled (PHP 7.4 or higher recommended).

### 2. PHP Mail Function
The server must have the `mail()` function enabled and properly configured.

**To check if mail() is working on your server:**
Create a test file `test-mail.php` in your web root:

```php
<?php
$to = "your-email@example.com";
$subject = "Test Email";
$message = "If you receive this, mail() is working!";
$headers = "From: noreply@yourdomain.com";

if (mail($to, $subject, $message, $headers)) {
    echo "Email sent successfully!";
} else {
    echo "Email failed to send.";
}
?>
```

### 3. Email Configuration
The PHP handler sends emails from: `noreply@middlepennymortgagesolutions.co.uk`

**Important:** Many servers require the "From" address to match your domain. If emails aren't sending, you may need to:

1. Verify your domain has proper SPF records
2. Ensure the server allows PHP mail() function
3. Check if your hosting provider requires SMTP configuration instead

## Quick Test

After uploading your site, visit: `https://yourdomain.com/api/test-mail.php`

This will:
- Check if PHP is working
- Check if mail() function is available
- Attempt to send a test email to emma@middlepennymortgagesolutions.co.uk
- Show detailed diagnostic information

## Troubleshooting

### Error: "Sorry, there was an error sending your message"

**Check these in order:**

1. **Run the test script**
   - Visit: `https://yourdomain.com/api/test-mail.php`
   - This will tell you exactly what's wrong

2. **PHP is enabled?**
   - Create a file `test.php` with `<?php phpinfo(); ?>`
   - Visit it in your browser
   - If you see PHP info, PHP is enabled

2. **Check PHP error logs**
   - Look in `/api/contact-errors.log` (created by the script)
   - Check your hosting control panel for PHP error logs
   - Common issues:
     - `mail() function disabled` - Contact your hosting provider
     - `permission denied` - Check file permissions (755 for directories, 644 for files)

3. **File permissions**
   ```bash
   chmod 755 dist/api
   chmod 644 dist/api/contact-submit.php
   ```

4. **CORS issues**
   - Open browser Developer Tools (F12)
   - Check the Console tab for errors
   - Check the Network tab to see the actual error response

5. **Server restrictions**
   - Some shared hosting providers disable PHP mail() for security
   - You may need to use SMTP instead (requires code modification)

## Alternative: Using SMTP Instead of mail()

If your hosting provider doesn't support PHP mail(), you'll need to modify the PHP script to use SMTP. This requires:

1. Installing PHPMailer or similar library
2. SMTP credentials from your email provider
3. Modifying `contact-submit.php` to use SMTP

Let me know if you need help with this!

## Testing the Form

1. Open browser Developer Tools (F12)
2. Go to the Network tab
3. Fill out the contact form
4. Submit the form
5. Look for the request to `/api/contact-submit.php`
6. Check the response:
   - **200 status**: Email sent successfully
   - **500 status**: Server error (check PHP logs)
   - **404 status**: PHP file not found (check upload)
   - **403 status**: Permission denied (check file permissions)

## Email Deliverability

Even if the script works, emails might go to spam. To improve deliverability:

1. Set up SPF records for your domain
2. Set up DKIM signing
3. Set up DMARC policy
4. Use your domain email (not Gmail/Outlook) as the From address

## Support

If you're still having issues:
1. Share the error from browser Developer Tools Console
2. Share any errors from PHP error logs
3. Let me know your hosting provider
4. I can help modify the script for SMTP if needed
