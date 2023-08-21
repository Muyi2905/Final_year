<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Execution.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if(isset($_POST["send"])){
    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host= 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username='obaremimuyiwa@gmail.com';
    $mail->Password = '';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = '465';

    $mail->setfrom('obaremimuyiwa@gmail.com')

     $mail ->addAddress($_POST["email"]);

     $mail ->isHtml(true);

     $mail->Subject=$_POST["subject"];
     $mail-> send();

     echo
     "
     <script>
     alert('Sent Succesfully');
     document.location.href='email.php';
     </script>
     ";
      
}
?>