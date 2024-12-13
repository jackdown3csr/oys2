<?php
if (isset($_POST['message'])) {
    $message = $_POST['message'];
    $to = 'dolejsjan83@gmail.com';  // Skutečná e-mailová adresa
    $subject = 'Zpráva z falešné adresy';
    $headers = 'From: no-reply@yourdomain.com' . "\r\n" .
               'Reply-To: no-reply@yourdomain.com' . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    // Odeslání e-mailu
    if (mail($to, $subject, $message, $headers)) {
        echo 'Email was sent successfully!';
    } else {
        echo 'Error sending email.';
    }
}
?>
