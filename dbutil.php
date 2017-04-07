<?php
$host = "";
$user = "";
$password = "";
$db = "";

//Connect to database assuming there will be no problem in the connection
$con = mysqli_connect($host,$user,$password);
mysqli_select_db($con, $db);
?>