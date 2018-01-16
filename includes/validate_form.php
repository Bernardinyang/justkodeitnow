<?php

     require_once 'db.php';
     
     if (isset($_POST['email'])) {
     
          $email = filter_var($con_subscribed->real_escape_string($_POST['email']), FILTER_SANITIZE_STRING);
     
          $sql = "SELECT email FROM subscribed_users WHERE email = '$email'";
          $query = $con_subscribed->query($sql);
          $count_email = mysqli_num_rows($query);
     
          if ($count_email == 0) {
          
               echo false;
          
          } else {
          
               echo true;
          
          }
     
          if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
          
               echo "invalid_email";
          
          }
          
     } else
          if (isset($_POST['name'])) {
     
              $name = filter_var($con_subscribed->real_escape_string($_POST['name']), FILTER_SANITIZE_STRING);
          
               if (preg_match("/[~`!@#$%^&*()_+-={};:''<,>.?\\/0-9]/", $name)) {
          
                    echo "invalid_name";
          
               }
          
          }
          
          