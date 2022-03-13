var showModeButtonControl = false;
$('#showModeSettingsCheckbox').click(function() {
    showAndDrawMode();
});

function showAndDrawMode(){
    if(showModeButtonControl==false){
        $("#canvasContainer").attr("style","display:none;");
        $("#allBottomComponent").attr("style","display:none;");
        clearDraw();
        showModeButtonControl=true;
    }
    else{
        $("#canvasContainer").attr("style","display:inline;");
        $("#allBottomComponent").attr("style","display:inline;");
        clearDraw();
        showModeButtonControl=false;
    }
}