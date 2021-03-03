<!-- <meta charset="UTF-8">
Save emp
<pre> -->
<?php

session_start();
// print_r($_POST); เช็คว่าส่งอะไรมา
// connect database 
require_once('connection.php');

$mysqli = new mysqli($db_host, $db_user, $db_password, $db_name);
$mysqli->set_charset("utf8");

    // echo "<pre>";
    // print_r($_POST);
    // echo"</pre>";


$title = $_POST['title'];
$body = $_POST['body'];
$authors_id=$_POST['authors_id'];
$updatetime=$_POST['updatetime'];
$publish_sts=$_POST['publish_sts'];

$stitle = htmlspecialchars($title, ENT_QUOTES);
$sbody = htmlspecialchars($body, ENT_QUOTES);


$sql = "INSERT 
        INTO articles (title, body, authors_id, updatetime, publish_sts)
        VALUES (?, ?, ?, ?, ?)";

$stmt = $mysqli->prepare($sql);
$stmt->bind_param("ssiss",$stitle,$sbody, $authors_id,$updatetime,$publish_sts);
$stmt->execute();
     //echo $stmt->affected_rows . " row inserted. ";

header("location: index2.php");
