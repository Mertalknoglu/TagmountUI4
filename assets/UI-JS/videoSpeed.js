var videoSettingsButtonControl = false;
$('#videoSettingsCheckbox').click(function() {
    if(videoSettingsButtonControl==true){
        $('#videoSettingsDiv').slideUp("fast");
        videoSettingsButtonControl=false;
    }
    else{
        $('#videoSettingsDiv').slideDown("fast");
        videoSettingsButtonControl=true;
    }
});

$("input[type='radio'][name='videoSpeed']").click(function() {
    mediaPlayer.playbackRate(this.value);
});