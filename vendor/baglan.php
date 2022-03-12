<?php 
$host='keka.hastagyazilim.com';
$vtadi='hastagya_deneme';// veritabanı adı
$kullanici='hastagya_keka';//varsayılan olarak kullanıcı ismi
$sifre='Y8&m(1ObpCUr';
try {
  $db = new PDO("mysql:host=$host;dbname=$vtadi;charset=utf8", "$kullanici", "$sifre");
} catch ( PDOException $e ){
     print $e->getMessage();
}
function GetIP(){
  if(getenv("HTTP_CLIENT_IP")) {
    $ip = getenv("HTTP_CLIENT_IP");
  } elseif(getenv("HTTP_X_FORWARDED_FOR")) {
    $ip = getenv("HTTP_X_FORWARDED_FOR");
    if (strstr($ip, ',')) {
      $tmp = explode (',', $ip);
      $ip = trim($tmp[0]);
    }
  } else {
    $ip = getenv("REMOTE_ADDR");
  }
  return $ip;
}

 ?>