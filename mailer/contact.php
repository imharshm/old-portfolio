<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = "Enquiry";
    $message = $_POST['message'];
    $to = 'hmahajan38@gmail.com'; 
    
    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    
    // More headers
    $headers .= 'From: ' . $email . "\r\n";
    // $headers .= 'BCC: hmahajan38@gmail.com '. "\r\n";
   
    $body = "<html>
            <body>
            <table style='border: 1px solid #ddd; width: 620px; padding: 20px; text-align: left'>
            <tr>
            <th>Name</th>
            <td>$name</td>
            </tr>
            <tr>
            <th>Email</th>
            <td>$email</td>
            </tr>
            <tr>
            <th>Message</th>
            <td>$message</td>
            </tr>
            </table>
            </body>
            </html>";
            
    
    if (mail ($to, $subject, $body, $headers )) {
        echo "success";
    }
    else {
        echo "failed, try again";
    }
?>