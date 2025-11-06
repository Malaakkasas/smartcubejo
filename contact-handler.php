<?php
// Smart Cube - Contact Form Handler
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

// Validate required fields
$required_fields = ['name', 'email', 'message'];
$errors = [];

foreach ($required_fields as $field) {
    if (empty($input[$field])) {
        $errors[] = ucfirst($field) . ' is required';
    }
}

// Validate email format
if (!empty($input['email']) && !filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Invalid email format';
}

// Return validation errors
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['errors' => $errors]);
    exit;
}

// Sanitize input data
$name = htmlspecialchars(trim($input['name']));
$email = filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL);
$company = htmlspecialchars(trim($input['company'] ?? ''));
$message = htmlspecialchars(trim($input['message']));

// Email configuration
$to = 'info@smartcube.com'; // Replace with your actual email
$subject = 'New Contact Form Submission - Smart Cube';

// Email content
$email_content = "
<html>
<head>
    <title>New Contact Form Submission</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #2563eb, #06b6d4); color: white; padding: 20px; text-align: center; }
        .content { background: #f8fafc; padding: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #2563eb; }
        .value { margin-top: 5px; padding: 10px; background: white; border-left: 4px solid #2563eb; }
        .footer { text-align: center; padding: 20px; color: #64748b; font-size: 14px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>New Contact Form Submission</h2>
            <p>Smart Cube Website</p>
        </div>
        
        <div class='content'>
            <div class='field'>
                <div class='label'>Name:</div>
                <div class='value'>{$name}</div>
            </div>
            
            <div class='field'>
                <div class='label'>Email:</div>
                <div class='value'>{$email}</div>
            </div>
            
            " . (!empty($company) ? "
            <div class='field'>
                <div class='label'>Company:</div>
                <div class='value'>{$company}</div>
            </div>
            " : "") . "
            
            <div class='field'>
                <div class='label'>Message:</div>
                <div class='value'>" . nl2br($message) . "</div>
            </div>
            
            <div class='field'>
                <div class='label'>Submitted:</div>
                <div class='value'>" . date('Y-m-d H:i:s') . "</div>
            </div>
            
            <div class='field'>
                <div class='label'>IP Address:</div>
                <div class='value'>" . $_SERVER['REMOTE_ADDR'] . "</div>
            </div>
        </div>
        
        <div class='footer'>
            <p>This email was sent from the Smart Cube website contact form.</p>
        </div>
    </div>
</body>
</html>
";

// Email headers
$headers = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    'From: Smart Cube Website <noreply@smartcube.com>',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion()
];

// Attempt to send email
$mail_sent = mail($to, $subject, $email_content, implode("\r\n", $headers));

if ($mail_sent) {
    // Log successful submission (optional)
    $log_entry = date('Y-m-d H:i:s') . " - Contact form submission from: {$name} ({$email})\n";
    file_put_contents('contact_log.txt', $log_entry, FILE_APPEND | LOCK_EX);
    
    // Send auto-reply to user
    $auto_reply_subject = 'Thank you for contacting Smart Cube';
    $auto_reply_content = "
    <html>
    <head>
        <title>Thank you for contacting Smart Cube</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2563eb, #06b6d4); color: white; padding: 20px; text-align: center; }
            .content { background: #f8fafc; padding: 20px; }
            .footer { text-align: center; padding: 20px; color: #64748b; font-size: 14px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>Thank You for Contacting Smart Cube</h2>
            </div>
            
            <div class='content'>
                <p>Dear {$name},</p>
                
                <p>Thank you for reaching out to Smart Cube. We have received your message and appreciate your interest in our AI-driven solutions.</p>
                
                <p>Our team will review your inquiry and get back to you within 24-48 hours. In the meantime, feel free to explore our services and learn more about how we're transforming businesses through intelligent automation.</p>
                
                <p>If you have any urgent questions, please don't hesitate to contact us directly.</p>
                
                <p>Best regards,<br>
                The Smart Cube Team</p>
            </div>
            
            <div class='footer'>
                <p>Smart Cube - AI-Driven Innovation Leaders</p>
                <p>Amman, Jordan | UAE | Qatar | Boston</p>
            </div>
        </div>
    </body>
    </html>
    ";
    
    $auto_reply_headers = [
        'MIME-Version: 1.0',
        'Content-type: text/html; charset=UTF-8',
        'From: Smart Cube <info@smartcube.com>',
        'X-Mailer: PHP/' . phpversion()
    ];
    
    mail($email, $auto_reply_subject, $auto_reply_content, implode("\r\n", $auto_reply_headers));
    
    // Return success response
    echo json_encode([
        'success' => true,
        'message' => 'Thank you for your message. We will get back to you soon!'
    ]);
} else {
    // Return error response
    http_response_code(500);
    echo json_encode([
        'error' => 'Failed to send message. Please try again later.'
    ]);
}
?>