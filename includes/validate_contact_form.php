<?php

     require_once 'db.php';

     $num1 = rand(0,100);
     $num2 = rand(0,100);
     
     $question = $num1 . " + " . $num2 . " = ?";
     
     if (isset($_POST['email'])) {
          
          $email = filter_var($con_subscribed->real_escape_string($_POST['email']), FILTER_SANITIZE_STRING);
          
          if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
               
               echo "invalid_email";
               
          }
          
     } else if (isset($_POST['name'])) {
               
          $name = filter_var($con_subscribed->real_escape_string($_POST['name']), FILTER_SANITIZE_STRING);
          
          if (preg_match("/[~`!@#$%^&*()_+-={};:''<,>.?\\/0-9]/", $name)) {
               
               echo "invalid_name";
               
          }
          
     } else if (isset($_POST['website'])) {
     
          $website = filter_var($con_subscribed->real_escape_string($_POST['website']), FILTER_SANITIZE_STRING);
     
          if (!filter_var($website, FILTER_VALIDATE_URL)) {
          
               echo "invalid_website";
          
          }
     
     } else if (isset($_POST['phone_no'])) {
     
          $phone_no = filter_var($con_subscribed->real_escape_string($_POST['phone_no']), FILTER_SANITIZE_STRING);
     
          if (!preg_match("/^[\\d]{11,13}$/", $phone_no)) {
          
               echo "invalid_phone_no";
          
          }
     
     } else if (isset($_POST['subject'])) {
     
          $subject = filter_var($con_subscribed->real_escape_string($_POST['subject']), FILTER_SANITIZE_STRING);
     
          if ($subject) {
          
               echo "ok";
          
          }
     
     } else if (isset($_POST['captcha'])) {
     
          $captcha = filter_var($con_subscribed->real_escape_string($_POST['captcha']), FILTER_SANITIZE_STRING);
          
          $answer = $num1 + $num2;
          
          if ($captcha == $answer) {
               
               echo "correct";
               
          } else {
               
               echo "wrong";
               
          }
     
     }
          
          