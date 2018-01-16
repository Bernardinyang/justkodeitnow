<?php

     require_once 'db.php';

     $name = filter_var($con_subscribed->real_escape_string($_POST['name']), FILTER_SANITIZE_STRING);
     $email = filter_var($con_subscribed->real_escape_string($_POST['email']), FILTER_SANITIZE_STRING);
     
     if ($name && $email) {
     
          $sql = "INSERT INTO subscribed_users(name, email) VALUES ('$name', '$email')";
          $query = $con_subscribed->query($sql);
          
          if ($query) {
               echo true;
          }
          
     } else {
          
          echo "not allowed";
          
     }