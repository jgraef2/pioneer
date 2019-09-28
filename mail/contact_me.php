<?php
// Check for empty fields
if(empty($_POST['email'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }

$email_address = $_POST['email'];

// Create the email and send the message
$to = 'josh@pioneermade.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Warm Welcome Request";
$email_body = "You have a new request for a warm welcome.\nEmail: $email_address\n";
$headers = "From: noreply@pioneermade.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
return true;
?>
