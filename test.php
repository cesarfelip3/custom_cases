<?php

$pass = "admin11";
$salt = "at";
echo md5($salt . $pass) . ":" . $salt;
