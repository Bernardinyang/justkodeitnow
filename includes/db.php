<?php
     
     $db_name = 'localhost';
     $db_root = 'root';
     $db_pwd = '';
     $db_table_subscribed = 'JustKodeItNow';
     $db_table_2 = '';

     $con_subscribed = new mysqli($db_name, $db_root, $db_pwd, $db_table_subscribed) or die('Error connecting to database');