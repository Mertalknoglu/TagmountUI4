//Slider hide Show
var pointerSettingsButtonControl = false;
$('#pointerSettingsCheckbox').click(function() {
    if(pointerSettingsButtonControl==true){
        $('#pointerSettingsDiv').slideUp("fast");
        pointerSettingsButtonControl=false;
    }
    else{
        $('#pointerSettingsDiv').slideDown("fast");
        pointerSettingsButtonControl=true;
    }
});


/* Pointer Logo  image ekle ve değiştir*/
$("#pointerIconImage").click(function() {
    if (($('#addPointerIconImage').val() == "")) {
        $('#addPointerIconImage').trigger('click');
        $("#addPointerIconImage").on('change', function () {
            if((!($('#addPointerIconImage').val()==""))){
            var addimage = $('#addPointerIconImage').val();
            //Do calculation and change value of other span2,span3 here
            $('#pointerIconImage').text(addimage);
        }
        });
    } else {
        $('#addPointerIconImage').trigger('click');
        $('#addPointerIconImage').val() == "";
        if (($('#addPointerIconImage').val() == "")) {
            $('#pointerIconImage').text("Add Icon Image");
        } else { 
            $('#pointerIconImage').text("Add Icon Image"); 
        }
    }
  });
/* Pointer Logo  image sil*/
  $("#pointerIconImageDel").click(function() {
    if (!($('#addPointerIconImage').val() == "")) {
        $('#addPointerIconImage').val()== "";
        $('#pointerIconImage').text("Add Icon Image");
        $("#pointerIcon").attr("src","assets/img/logo.png");
    }
  });

/* dosya yolu ile pointer logo image ekleme*/
  $( "#addPointerIconImage" ).change(function() {
    var oFReader = new FileReader();
    oFReader.readAsDataURL($('#addPointerIconImage').get(0).files[0]);
    oFReader.onload = function (oFREvent) {
        $("#pointerIcon").attr("src",oFREvent.target.result);
    };
  });

  /* pointerSize */
  $("input[type='radio'][name='pointerSize']").click(function() {
    ballSize=this.value;
    var divPosition=Number(ballSize)+Number(40);
    $(".div-position-2").css("height",divPosition);
    $("#pointerIcon").width(ballSize);
    $("#pointerIcon").height(ballSize);
    $(".img-box-1").width(ballSize);
    $(".img-box-1").height(ballSize);
    initDrawingHtml();
});
/*pointerinnerhtml */

$( ".div-position-2" ).click(function() {
    pointerHtml=$( ".div-position-2" ).html();
    $("#imageinnerhtml").val(pointerHtml);
    initDrawingHtml();
});

/*fill change */
var pointerBgColor="red";
var pointerBrColor="blue";
var pointerSize=20;
$( "#fillR" ).change(function() {
    var fillR = $('#fillR').val();
    var fillG = $('#fillG').val();
    var fillB = $('#fillB').val();
    var fillRGB = ('rgb(' + fillR + ',' + fillG + ',' + fillB + ')')
    $(".span-R").css("background-color", "rgb(" + fillR + "," + fillG + "," + fillB + ")");
    $(".span-G").css("background-color", "rgb(" + fillR + "," + fillG + "," + fillB + ")");
    $(".span-B").css("background-color", "rgb(" + fillR + "," + fillG + "," + fillB + ")");
    pointerBgColor="rgb(" + fillR + "," + fillG + "," + fillB + ")";
    $("#fillInput").val(fillRGB);
    initDrawingHtml();
  });
  
  $( "#fillG" ).change(function() {
    var fillR = $('#fillR').val();
    var fillG = $('#fillG').val();
    var fillB = $('#fillB').val();
    var fillRGB = ('rgb(' + fillR + ',' + fillG + ',' + fillB + ')')
    $(".span-R").css("background-color", "rgb(" + fillR + "," + fillG + "," + fillB + ")");
    $(".span-G").css("background-color", "rgb(" + fillR + "," + fillG + "," + fillB + ")");
    $(".span-B").css("background-color", "rgb(" + fillR + "," + fillG + "," + fillB + ")");
    pointerBgColor="rgb(" + fillR + "," + fillG + "," + fillB + ")";
    $("#fillInput").val(fillRGB);
    initDrawingHtml();
  });
  $( "#fillB" ).change(function() {
    var fillR = $('#fillR').val();
    var fillG = $('#fillG').val();
    var fillB = $('#fillB').val();
    var fillRGB = ('rgb(' + fillR + ',' + fillG + ',' + fillB + ')')
    $(".span-R").css("background-color", "rgb(" + fillR + "," + fillG + "," + fillB + ")");
    $(".span-G").css("background-color", "rgb(" + fillR + "," + fillG + "," + fillB + ")");
    $(".span-B").css("background-color", "rgb(" + fillR + "," + fillG + "," + fillB + ")");
    pointerBgColor="rgb(" + fillR + "," + fillG + "," + fillB + ")";
    $("#fillInput").val(fillRGB);
    initDrawingHtml();
  });

  /*Border change */
  $( "#borderR" ).change(function() {
    var borderR = $('#borderR').val();
    var borderG = $('#borderG').val();
    var borderB = $('#borderB').val();
    var borderRGB = ('rgb(' + borderR + ',' + borderG + ',' + borderB + ')')
    $(".span-br-R").css("background-color", "rgb(" + borderR + "," + borderG + "," + borderB + ")");
    $(".span-br-G").css("background-color", "rgb(" + borderR + "," + borderG + "," + borderB + ")");
    $(".span-br-B").css("background-color", "rgb(" + borderR + "," + borderG + "," + borderB + ")");    
    pointerBrColor= "rgb(" + borderR + "," + borderG + "," + borderB + ")";
    $(".img-box-1").css("border-color", "rgb(" + borderR + "," + borderG + "," + borderB + ")");
    $("#borderInput").val(borderRGB);
    initDrawingHtml();
  });
  $( "#borderG" ).change(function() {
    var borderR = $('#borderR').val();
    var borderG = $('#borderG').val();
    var borderB = $('#borderB').val();
    var borderRGB = ('rgb(' + borderR + ',' + borderG + ',' + borderB + ')')
    $(".span-br-R").css("background-color", "rgb(" + borderR + "," + borderG + "," + borderB + ")");
    $(".span-br-G").css("background-color", "rgb(" + borderR + "," + borderG + "," + borderB + ")");
    $(".span-br-B").css("background-color", "rgb(" + borderR + "," + borderG + "," + borderB + ")");    
    pointerBrColor= "rgb(" + borderR + "," + borderG + "," + borderB + ")";
    $(".img-box-1").css("border-color", "rgb(" + borderR + "," + borderG + "," + borderB + ")");
    $("#borderInput").val(borderRGB);
    initDrawingHtml();
  });
  $( "#borderB" ).change(function() {
    var borderR = $('#borderR').val();
    var borderG = $('#borderG').val();
    var borderB = $('#borderB').val();
    var borderRGB = ('rgb(' + borderR + ',' + borderG + ',' + borderB + ')')
    $(".span-br-R").css("background-color", "rgb(" + borderR + "," + borderG + "," + borderB + ")");
    $(".span-br-G").css("background-color", "rgb(" + borderR + "," + borderG + "," + borderB + ")");
    $(".span-br-B").css("background-color", "rgb(" + borderR + "," + borderG + "," + borderB + ")");    
    pointerBrColor= "rgb(" + borderR + "," + borderG + "," + borderB + ")";
    $(".img-box-1").css("border-color", "rgb(" + borderR + "," + borderG + "," + borderB + ")");
    $("#borderInput").val(borderRGB);
    initDrawingHtml();
  });

  function initDrawingHtml() {
    console.log("initDrawingHtml");
    videoHtmlLst=[];
      videoHtmlLst.push({
        id: -1,
        infoCardInnerHtml:infoCardHtml,
        pointerInnerHtml:pointerHtml,
        pointerOpenURL:pointerOpenURL,
        pointerBackgroundColor:pointerBgColor,
        pointerBorderColor:pointerBrColor,
        ballSize:pointerSize
    });
    
    variableInitialize(-1);
  }

