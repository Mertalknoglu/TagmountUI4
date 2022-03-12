
//Slider hide Show
var infoSettingsButtonControl = false;
$('#infoSettingsCheckbox').click(function() {
    if(infoSettingsButtonControl==true){
        $('#infoSettingsDiv').slideUp("fast");
        infoSettingsButtonControl=false;
    }
    else{
        $('#infoSettingsDiv').slideDown("fast");
        infoSettingsButtonControl=true;
    }
});
/* info card sol image ekle ve değiştir*/
$("#infoImage").click(function() {
    if (($('#AddImageInfo').val() == "")) {
        $('#AddImageInfo').trigger('click');
        $("#AddImageInfo").on('change', function () {
            if((!($('#AddImageInfo').val()==""))){
            var addimage = $('#AddImageInfo').val();
            //Do calculation and change value of other span2,span3 here
            $('#infoImage').text(addimage);
        }
        });
    } else {
        $('#AddImageInfo').trigger('click');
        $('#AddImageInfo').val() == "";
        if (($('#AddImageInfo').val() == "")) {
            $('#infoImage').text("Add Image");
        } else { 
            $('#infoImage').text("Add Image"); 
        }
    }
  });
  /* info card üst logo image ekle ve değiştir*/
  $("#logoImage").click(function() {
    if (($('#AddImageLogo').val() == "")) {
        $('#AddImageLogo').trigger('click');
        $("#AddImageLogo").on('change', function () {
            if((!($('#AddImageLogo').val()==""))){
            var addimage = $('#AddImageLogo').val();
            //Do calculation and change value of other span2,span3 here
            $('#logoImage').text(addimage);
        }
        });
    } else {
        $('#AddImageLogo').trigger('click');
        $('#AddImageLogo').val() == "";
        if (($('#AddImageLogo').val() == "")) {
            $('#spanAddImage').text("Add Image");
        } else { 
            $('#spanAddImage').text("Add Image"); 
        }
    }
  });
/* info card sol image sil*/
  $("#infoImageDel").click(function() {
    if (!($('#AddImageInfo').val() == "")) {
        $('#AddImageInfo').val() == "";
        $('#infoImage').text("Add Image");
        $("#image1").attr("src","assets/img/logo.png");
        $("#image3").attr("src","assets/img/logo.png");
        $("#image2").attr("src","assets/img/logo.png");
        
    }
  });
  
/* info card üst logo image sil*/
  $("#logoImageDel").click(function() {
    if (!($('#AddImageLogo').val() == "")) {
        $('#AddImageLogo').val()== "";
        $('#logoImage').text("Add Image");
        
    }
  });

// infoCard Div
$( ".infoCardPosition" ).click(function() {   
    
    infoCardHtml=$( ".infoCardPosition" ).html();    
    $("#infocardinnerhtml").val(infoCardHtml);
    initDrawingHtml();
});
$( ".infoCardPosition1" ).click(function() {    
    
    infoCardHtml=$( ".infoCardPosition1" ).html();    
    $("#infocardinnerhtml").val(infoCardHtml);
    initDrawingHtml();
    
});
$( ".infoCardPosition2" ).click(function() {    
    
    infoCardHtml=$( ".infoCardPosition2" ).html();    
    $("#infocardinnerhtml").val(infoCardHtml);
    initDrawingHtml();
    
});
$( ".infoCardPosition3" ).click(function() {    
    
    infoCardHtml=$( ".infoCardPosition3" ).html();    
    $("#infocardinnerhtml").val(infoCardHtml);
    initDrawingHtml();
    
});
//info card text change  
$( "#info" ).change(function() {
        var text = $( "#info" ).val();
        $( ".infoCartP" ).text(text); 
        $( ".infoCartP" ).text(text); 
        $( ".infoCartP" ).text(text); 
        $( ".infoCartP" ).text(text);     
});
//info card image chane
$( "#AddImageInfo" ).change(function() {
    var oFReader = new FileReader();
    oFReader.readAsDataURL($('#AddImageInfo').get(0).files[0]);
    oFReader.onload = function (oFREvent) {
        $("#image1").attr("src",oFREvent.target.result);
        $("#image3").attr("src",oFREvent.target.result);
        $("#image2").attr("src",oFREvent.target.result);
    };
  });

  $("#Links").change(function() {
    pointerOpenURL=$("#Links").val();
    
  });
  