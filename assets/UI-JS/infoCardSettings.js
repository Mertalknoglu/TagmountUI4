//Slider hide Show
var infoCardSettingsButtonControl = false;
$('#infoCardSettingsCheckbox').click(function() {
    if(infoCardSettingsButtonControl==true){
        $('#infoCardSettingsDiv').slideUp("fast");
        infoCardSettingsButtonControl=false;
    }
    else{
        $('#infoCardSettingsDiv').slideDown("fast");
        infoCardSettingsButtonControl=true;
    }
});
// info card BackGround
$( "#backR" ).change(function() {
    var backR = $('#backR').val();
    var backB = $('#backB').val();
    var backG = $('#backG').val();
    var backRGB = ('rgb(' + backR + ',' + backG + ',' + backB+ ')');
    $(".span-bg-R").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $(".span-bg-G").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $(".span-bg-B").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $(".bubbleDiv1").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $(".bubbleDiv2").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $(".bubbleDiv3").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $(".bubbleDiv4").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $("#backgroundInput").val(backRGB);
});
$( "#backR" ).change(function() {
    var backR = $('#backR').val();
    var backB = $('#backB').val();
    var backG = $('#backG').val();
    var backRGB = ('rgb(' + backR + ',' + backG + ',' + backB+ ')');
    $(".span-bg-R").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $(".span-bg-G").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $(".span-bg-B").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $(".bubbleDiv1").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $(".bubbleDiv2").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $(".bubbleDiv3").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    
    $(".bubbleDiv4").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $("#backgroundInput").val(backRGB);
});
$( "#backG" ).change(function() {
    var backR = $('#backR').val();
    var backB = $('#backB').val();
    var backG = $('#backG').val();
    var backRGB = ('rgb(' + backR + ',' + backG + ',' + backB+ ')');
    $(".span-bg-R").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $(".span-bg-G").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $(".span-bg-B").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $(".bubbleDiv2").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $(".bubbleDiv3").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $(".bubbleDiv1").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    
    $(".bubbleDiv4").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $("#backgroundInput").val(backRGB);
});
$( "#backB" ).change(function() {
    var backR = $('#backR').val();
    var backB = $('#backB').val();
    var backG = $('#backG').val();
    var backRGB = ('rgb(' + backR + ',' + backG + ',' + backB+ ')');
    $(".span-bg-R").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $(".span-bg-G").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $(".span-bg-B").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $(".bubbleDiv2").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $(".bubbleDiv3").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $(".bubbleDiv1").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $(".bubbleDiv4").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $("#backgroundInput").val(backRGB);
});

//info card text Color
$( "#textR" ).change(function() {
    var textR = $('#textR').val();
    var textG = $('#textG').val();
    var textB = $('#textB').val();
    var textRGB = ('rgb(' + textR + ',' + textG + ',' + textB + ')');
    $(".span-tx-R").css("background-color", "rgb(" + textR + "," + textG + "," + textB + ")");
    $(".span-tx-G").css("background-color", "rgb(" + textR + "," + textG + "," + textB + ")");
    $(".span-tx-B").css("background-color", "rgb(" + textR + "," + textG + "," + textB + ")");
    $(".infoCartP").css("color", "rgb(" + textR + "," + textG + "," + textB + ")");
    $("#textInput").val(textRGB);
});
$( "#textG" ).change(function() {
    var textR = $('#textR').val();
    var textG = $('#textG').val();
    var textB = $('#textB').val();
    var textRGB = ('rgb(' + textR + ',' + textG + ',' + textB + ')');
    $(".span-tx-R").css("background-color", "rgb(" + textR + "," + textG + "," + textB + ")");
    $(".span-tx-G").css("background-color", "rgb(" + textR + "," + textG + "," + textB + ")");
    $(".span-tx-B").css("background-color", "rgb(" + textR + "," + textG + "," + textB + ")");
    $(".infoCartP").css("color", "rgb(" + textR + "," + textG + "," + textB + ")");
    $("#textInput").val(textRGB);
});
$( "#textB" ).change(function() {
    var textR = $('#textR').val();
    var textG = $('#textG').val();
    var textB = $('#textB').val();
    var textRGB = ('rgb(' + textR + ',' + textG + ',' + textB + ')');
    $(".span-tx-R").css("background-color", "rgb(" + textR + "," + textG + "," + textB + ")");
    $(".span-tx-G").css("background-color", "rgb(" + textR + "," + textG + "," + textB + ")");
    $(".span-tx-B").css("background-color", "rgb(" + textR + "," + textG + "," + textB + ")");
    $(".infoCartP").css("color", "rgb(" + textR + "," + textG + "," + textB + ")");
    $("#textInput").val(textRGB);
});
// info card Opacity Slider change
$( "#slidebarinput" ).change(function() {
var slider =$("#slidebarinput").val();
var sliderInput = (slider / 100);
var slideropacity = sliderInput.toFixed(1);
$("#slidebar").html(slider + "%");
$("#sliderinput").val(slideropacity);
var backR = $('#backR').val();
var backB = $('#backB').val();
var backG = $('#backG').val();
$(".bubbleDiv1").css("background", "rgba("+backR+","+backG+","+backB+","+slideropacity+")");
$(".bubbleDiv2").css("background",  "rgba("+backR+","+backG+","+backB+","+slideropacity+")");
$(".bubbleDiv3").css("background",  "rgba("+backR+","+backG+","+backB+","+slideropacity+")");
$(".bubbleDiv4").css("background",  "rgba("+backR+","+backG+","+backB+","+slideropacity+")");
});
