<?php
include("baglan.php");

if (isset($_POST['diziadi'])){

    $diziadi = $_POST['diziadi'];

   
    $sorgu = $db->prepare('SELECT * FROM bolum WHERE bolum_dizi = ?');
    $sorgu->execute([$diziadi]);
    $bolumler = $sorgu->fetchAll(PDO::FETCH_ASSOC);
    echo ($diziadi);
    $html = '<option>- Bölüm Seçin -</option>';
    foreach ($bolumler as $bolum){
        $html .= '<option value="' . $bolum['bolum_id'] . '">' . $bolum['bolum_adi'] . '</option>';
    }

    echo $html;
    echo ($diziadi);
}

$query = $db->query("SELECT* FROM deneme"); //Tüm verileri getir
$query->execute();
$liste = $query->fetchAll(PDO::FETCH_OBJ);
if(isset($_GET["guid"])){
    $GUID=$_GET["guid"];
    $sorgu = $db->prepare("SELECT * FROM deneme where GUID=:guid");
    $sorgu ->execute(array(":guid"=>$GUID));
    $idliste=$sorgu->fetch(PDO::FETCH_ASSOC);
}

header('Access-Control-Allow-Origin: *');
header('Access-Control-Headers: X-Requested-Witch');
header('Access-Control-Headers: Content-Type');



    @$info   =    $_POST["info"];
    @$AddImage  =    $_POST["AddImage"];
    @$links  =    $_POST["Links"];
    @$AddImage1  =    $_POST["AddImage1"];
    @$AddImage3  =    $_POST["AddImage3"];
    @$flexRadioDefault2  =    $_POST["flexRadioDefault2"];
    @$fillR  =    $_POST["fillR"];
    @$fillG  =    $_POST["fillG"];
    @$fillB  =    $_POST["fillB"];
    @$borderR  =    $_POST["borderR"];
    @$borderG  =    $_POST["borderG"];
    @$borderB  =    $_POST["borderB"];
    @$backR  =    $_POST["backR"];
    @$backG  =    $_POST["backG"];
    @$backB  =    $_POST["backB"];
    @$slidebarinput  =    $_POST["slidebarinput"];
    @$textR  =    $_POST["textR"];
    @$textG  =    $_POST["textG"];
    @$textB  =    $_POST["textB"];
    @$jsonobj =  $_POST["phppointerList"];
    @$imageinnerhtml = $_POST["imageinnerhtml"];
    @$infocardinnerhtml = $_POST["infocardinnerhtml"];
    @$guid = $_POST["guid"];
    $diziler = $db->query('SELECT * FROM video ORDER BY ID ASC')->fetchAll(PDO::FETCH_ASSOC);
     ?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi" />

    <title>Tagmount</title>
    <link rel="shortcut icon" href="#" type="image/x-icon" />

    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.css">
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/canvas.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/style(rgb).css">
    <link href="assets/bootstrap/css/component.css" rel="stylesheet" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/video.js/7.17.0/video-js.min.css" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment-duration-format/1.3.0/moment-duration-format.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="//player2.h-cdn.com/hola_player.js?customer=demo"></script>
    <style>

    </style>
</head>