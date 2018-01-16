<?php

     require_once 'db.php';

     $name = filter_var($con_subscribed->real_escape_string($_POST['name']), FILTER_SANITIZE_STRING);
     $email = filter_var($con_subscribed->real_escape_string($_POST['email']), FILTER_SANITIZE_STRING);
     $website = filter_var($con_subscribed->real_escape_string($_POST['website']), FILTER_SANITIZE_STRING);
     $phone_no = filter_var($con_subscribed->real_escape_string($_POST['phone_no']), FILTER_SANITIZE_STRING);
     $subject = filter_var($con_subscribed->real_escape_string($_POST['subject']), FILTER_SANITIZE_STRING);
     $captcha = filter_var($con_subscribed->real_escape_string($_POST['captcha']), FILTER_SANITIZE_STRING);
     $message = filter_var($con_subscribed->real_escape_string($_POST['message']), FILTER_SANITIZE_STRING);
     
     if (($name && $email && $subject && $captcha && $message) || $website || $phone_no) {
          
          echo true;
          
     } else {
          
          echo "not allowed";
          
     }