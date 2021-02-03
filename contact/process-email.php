<?php

$data = $_POST;
// var_dump($data);
// var_dump($_POST);
// exit;

$message  = "Name: " .    $data["name"] . "  \n";
$message .= "Email: " .   $data["email"] . " \n";
$message .= "Option: " .  $data["inquiryType"] . " \n";
$message .= "Message: " . $data["message"] . " \n";

$headers = "From: chinmoy.raval@wayfinder-ux.com\r\n";

//letstalk@wayfinder-ux.com
//chinmoy.raval@wayfinder-ux.com


if(mail("chinmoy.raval@wayfinder-ux.com", "Wayfinder UX Contact", $message, $headers)) {
  echo "true";
} else{
  echo "false";
}

?>
