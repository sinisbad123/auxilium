<?php
$host = "localhost";
$user = "root";
$password = "";
$db = "auxilium";

//Connect to database assuming there will be no problem in the connection
$con = mysqli_connect($host,$user,$password);
mysqli_select_db($con, $db);
?>