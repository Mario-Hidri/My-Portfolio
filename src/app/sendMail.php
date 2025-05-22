<?php

// Allow CORS for all requests
$allowedOrigin = 'https://mario-hidri.de';

header("Access-Control-Allow-Origin: $allowedOrigin");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

switch ($_SERVER['REQUEST_METHOD']) {
    case "OPTIONS":
        // Preflight request
        http_response_code(200);
        exit;

    case "POST":
        // Handle actual request
        $json = file_get_contents('php://input');
        $params = json_decode($json);

        $email = $params->email ?? '';
        $name = $params->name ?? '';
        $message = $params->message ?? '';

        $recipient = 'mariohidri2014@yahoo.com';  
        $subject = "Contact From <$email>";
        $messageBody = "From: " . htmlspecialchars($name) . "<br><br>" . nl2br(htmlspecialchars($message));

        $headers = [
            'MIME-Version: 1.0',
            'Content-type: text/html; charset=utf-8',
            'From: noreply@mywebsite.com'
        ];

        mail($recipient, $subject, $messageBody, implode("\r\n", $headers));
        echo json_encode(['success' => true]);
        break;

    default:
        // Reject non-POST/OPTIONS requests
        header("Allow: POST, OPTIONS", true, 405);
        exit;
}
