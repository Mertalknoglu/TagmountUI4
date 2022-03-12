<?php
require_once '../vendor/baglan.php';



if(isset($_POST['verikaydet'])) {
    $kaydet=$db->prepare("INSERT INTO hastagya_deneme SET 

                INFO = :info,
                IPADRESI = :ipadresi,
                INFORESIM = :AddImageInfo,
                LINK = :Link,
                LINKRESIM = :AddImageLogo,
                POINTERICON = :imageIconData,
                POINTERSIZE = :pointerSize,
                FILLCOLORR = :fillR,
                FILLCOLORG = :fillG,
                FILLCOLORB = :fillB,
                BORDERCOLORR = :borderR,
                BORDERCOLORG = :borderG,
                BORDERCOLORB = :borderB,
                BACKGROUNDCOLORR = :backR,
                BACKGROUNDCOLORG = :backG,
                BACKGROUNDCOLORB = :backB,
                BACKGROUNDOPACİTY = :sliderinput,
                TEXTCOLORR = :textR,
                TEXTCOLORG = :textG,
                TEXTCOLORB = :textB,
                MYJSON=:phppointerList,
                IMAGEINNERHTML= :imageinnerhtml,
                INFOCARDINNERHTML = :infocardinnerhtml
                /*bolumid = :bolum_id*/
                ");


            $insert=$kaydet->execute(array(
                "info" => $info,
                "ipadresi" => $ipadresi,
                "AddImageInfo" => $imageHiddenData,
                "Link" => $links,
                "AddImageLogo" => $AddImage1,
                "imageIconData" => $imageIconData,
                "pointerSize" => $flexRadioDefault2,
                "fillR" => $fillR,
                "fillG" => $fillG,
                "fillB" => $fillB,
                "borderR" => $borderR,
                "borderG" => $borderG,
                "borderB" => $borderB,
                "backR" => $backR,
                "backG" => $backG,
                "backB" => $backB,
                "sliderinput" => $sliderinput,
                "textR" => $textR,
                "textG" => $textG,
                "textB" => $textB,
                "phppointerList"=>$jsonobj,
                "imageinnerhtml"=>$imageinnerhtml,
                "infocardinnerhtml"=>$infocardinnerhtml,
                "bolumid" =>$bolumid,

            ));

            if($insert) {
                $data['status']="success";
                $data['message']="Kayıt başarılı";
                echo json_encode($data);
                exit;
            } else{
                $data['status']="error";
                $data['message']="Kayıt başarısız";
                echo json_encode($data);
                exit;

            }
    
   
}


?>