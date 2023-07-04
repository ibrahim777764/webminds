<?php
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

// Retrieve order details from the request
$orderDetails = $_POST['order'];

// Set up PHPMailer
$mail = new PHPMailer();
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'webminds2023@gmail.com';
$mail->Password = 'ibnas123';
$mail->SMTPSecure = 'tls';
$mail->Port = 587;

// Set email content
$mail->setFrom('webminds2023@gmail.com', 'Your Name');
$mail->addAddress('recipient@example.com');
$mail->Subject = 'New Order';
$mail->Body = 'Order Details: ' . $orderDetails;

// Send the email
if ($mail->send()) {
  echo 'Email sent successfully!';
} else {
  echo 'Error sending email: ' . $mail->ErrorInfo;
}
