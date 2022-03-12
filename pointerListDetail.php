
<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Headers: X-Requested-Witch');
header('Access-Control-Headers: Content-Type');

include_once("vendor/baglan.php");
// $shows = 0;
// $clicks = 0;
if (isset($_POST['id'])) {
  $id = $_POST['id'];
  $query = $db->prepare("SELECT * FROM deneme WHERE ID=:id"); //Tüm verileri getir
  $query->execute(array(":id" => $id));
  $liste = $query->fetchAll(PDO::FETCH_OBJ);
  // $shows = $liste["SHOWS"] + 1;
  // $clicks = $liste["CLICKS"] + 1;
}
if (isset($_POST['bolum_id'])) {
  $bolum_id = $_POST['bolum_id'];
  $query = $db->prepare("SELECT * FROM deneme WHERE  BOLUM_ID=:bolum_id"); //Tüm verileri getir
  $query->execute(array(":bolum_id" => $bolum_id));
  $liste = $query->fetchAll(PDO::FETCH_OBJ);
}
if (isset($_POST['bolum_link'])) {
  $bolum_link = $_POST['bolum_link'];
  $query = $db->prepare("SELECT bolum_link FROM bolum WHERE  BOLUM_ID=:bolum_link"); //Tüm verileri getir
  $query->execute(array(":bolum_link" => $bolum_link));
  $liste = $query->fetch(PDO::FETCH_ASSOC);
}
// if(isset($_POST['clicks']))
// {
//   $ayarkaydet=$db->prepare("UPDATE deneme SET
//   CLICKS=:clicks
//   WHERE ID=:id");
//   $update=$ayarkaydet ->execute(array(
//   'id' => $_POST['id'],
//   'clicks' => $clicks
//   ));
// }
// else
// {
//  $ayarkaydet=$db->prepare("UPDATE deneme SET
//   SHOWS=:shows
//   WHERE ID=:id");
//   $update=$ayarkaydet ->execute(array(
//   'id' => $_POST['id'],
//   'shows' => $shows
//   ));
// }
echo json_encode($liste);
?>