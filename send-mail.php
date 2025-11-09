<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $to = "shantel_shaw@hotmail.co.uk";
  $subject = "New message from " . $_POST['name'];
  $body = "Name: " . $_POST['name'] . "\nEmail address: " . $_POST['email'] . "\n\nMessage:\n" . $_POST['message'];
  $headers = "From: " . $_POST['email'];

  if (mail($to, $subject, $body, $headers)) {
    echo "Message sent successfully.";
  } else {
    echo "Failed to send message.";
  }
}
?>