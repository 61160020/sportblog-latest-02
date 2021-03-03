<?php
    session_start();
    if (!isset($_SESSION['loggedin'])) {
    header("location: login.php");
    } 
?>
<html>
<meta charset="UTF-8">
    <?php
    // connect database 
    require_once('connection.php');

    $mysqli = new mysqli($db_host, $db_user, $db_password, $db_name);
    $mysqli->set_charset("utf8");

    // echo "<pre>";
    // print_r($_POST);
    // echo"</pre>";
    $username = $_POST['username'];
    $passwd = md5($_POST['passwd']);
    $name = $_POST['name'];
    $penname = $_POST['penname'];
    $email = $_POST['email'];
    $id = trim($_REQUEST['id']);
    $susername = htmlspecialchars($username, ENT_QUOTES);
    $spasswd = htmlspecialchars($passwd, ENT_QUOTES);
    $sname = htmlspecialchars($name, ENT_QUOTES);
    $spenname = htmlspecialchars($penname, ENT_QUOTES);
    $semail = htmlspecialchars($email, ENT_QUOTES);

   

    $sql = "UPDATE authors
            SET 
            username = ?,
            passwd = ?,     
            name =?,
            penname =?,
            email =?
         WHERE id  = ?";
    
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param("ssssss", $susername, $spasswd , $sname, $spenname , $semail, $id );
    $stmt->execute();

    // echo $stmt->error;  //ไว้ดู error
        
        // echo $stmt->affected_rows . " row inserted.";
        // echo $id;
    $_SESSION['username'] = $_POST['username'];
    header("location: Admin-edituser.php");
?>
