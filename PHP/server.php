<?php
    header('Access-Control-Allow-Origin: https://localhost:3000');
    $uname = $_POST['uname'];
    $passw = $_POST['passw'];
    echo ("$uname, $passw");
?> 