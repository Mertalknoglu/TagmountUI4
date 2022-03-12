<?php 
         
        include_once("vendor/baglan.php");
            if(isset($_POST["info"]) && isset($_POST["imageHiddenData"]) 
            && isset($_POST["Link"]) && isset($_POST["AddImageLogo"])
            && isset($_POST["imageIconData"])
            && isset($_POST["fillR"]) && isset($_POST["fillG"]) && isset($_POST["fillB"]) 
            && isset($_POST["borderR"]) && isset($_POST["borderG"]) && isset($_POST["borderB"])
            && isset($_POST["backR"])&& isset($_POST["backG"])&& isset($_POST["backB"])
            && isset($_POST["sliderinput"])
            && isset($_POST["phppointerList"])
            && isset($_POST["textR"])&& isset($_POST["textG"])&& isset($_POST["textB"])
            && isset($_POST["imageinnerhtml"])&& isset($_POST["infocardinnerhtml"])&& isset($_POST["guid"])
            ) // bunun anlamı info ve Links name leri post edildi ise işlem yapyada post edildimi anlamı var
            {
                
                $info   =    $_POST["info"];
                //$ipadresi   =    GetIP();
                $imageHiddenData  =    $_POST["imageHiddenData"];
                $Link  =    $_POST["Link"];
                $AddImageLogo  =    $_POST["AddImageLogo"];
                $imageIconData  =    $_POST["imageIconData"];
                $pointerSize  =$_POST["pointerSize"];
                $fillR  =    $_POST["fillR"];
                $fillG  =    $_POST["fillG"];
                $fillB  =    $_POST["fillB"];
                $borderR  =    $_POST["borderR"];
                $borderG  =    $_POST["borderG"];
                $borderB  =    $_POST["borderB"];
                $backR  =    $_POST["backR"];
                $backG  =    $_POST["backG"];
                $backB  =    $_POST["backB"];
                $sliderinput  =    $_POST["sliderinput"];
                $textR  =    $_POST["textR"];
                $textG  =    $_POST["textG"];
                $textB  =    $_POST["textB"];
                $jsonobj =  $_POST["phppointerList"];
                $imageinnerhtml = $_POST["imageinnerhtml"];
                $infocardinnerhtml = $_POST["infocardinnerhtml"];
                $guid = $_POST["guid"];
            
                $query = $db->prepare("INSERT INTO hastagya_deneme SET
                GUID = :guid,
                INFO = :info,
                INFORESIM = :imageHiddenData,
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
                INFOCARDINNERHTML = :infocardinnerhtml");
                $insert = $query->execute(array(
                    "guid" => $guid,
                    "info" => $info,                    
                    "imageHiddenData" => $imageHiddenData,
                    "Link" => $Link,
                    "AddImageLogo" => $AddImageLogo,
                    "imageIconData" => $imageIconData,
                    "pointerSize" => $pointerSize,
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
                ));
                if ( $insert ){
                    $last_id = $db->lastInsertId();
                    print " insert işlemi başarılı!";
                    header("Refresh: 1; url=home.php"); 
                }
            }
        
    ?>
   