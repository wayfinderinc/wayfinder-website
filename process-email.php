<?php

if (! isset($_POST['email'])) {
  die(json_encode(false));
}

if (! isset($_POST['name'])) {
  die(json_encode(false));
}

if (! isset($_POST['message'])) {
  die(json_encode(false));
}

$data = $_POST;

$message  = "Name: " .    strip_tags(trim($data["name"])) . "  \n";
$message .= "Email: " .   strip_tags(trim($data["email"])) . " \n";
$message .= "Message: " . strip_tags($data["message"]) . " \n";

$headers = "From: letstalk@wayfinder-ux.com\r\n";
$subject = "Wayfinder Sales Contact - General Inquiry";

// recaptcha test that mail works
$result = mail("ptah.dunbar@wayfinder-ux.com", $subject, $message, $headers);

if ( $result == true ) {
  // mail("sales@wayfinder-ux.com", $subject, $message, $headers);
  mail("sales@wayfinder-ux.com", $subject, $message, $headers);
  die(json_encode(true));
} else {
  die(json_encode(false));
}