var mediaPlayer = videojs("my_video");
var videoLastStatus;

var videoPlayer = function () {
    var handlevideoPlayer = function () {
        $("#mediaPlay").attr("style", "z-index:1;");
    }

    return {
        init: function () {
            handlevideoPlayer();
            addVideoPlayerEvents();
            getVideoDuration();
            timeSliderSize();
        }
    };
}();

var addVideoPlayerEvents = function () {

    $("#mediaPlay").click(function () {
        mediaPlay();
    });
    $("#mediaPause").click(function () {
        mediaPause();

    });
    $("#forward").click(function () {
        mediaPlayer.currentTime(mseconds+15);
    });
    $("#backward").click(function () {
        mediaPlayer.currentTime(mseconds-15);
    });
    $("#timeSlider").change(function () {
        mediaPlayer.currentTime($(this).val());
    });
}
function mediaPlay() {
    mediaPlayer.play();
}
function mediaPause() {
    mediaPlayer.pause();
}
function getVideoDuration() {
    mediaPlayer.on('timeupdate', () => {
        var currentTime = mediaPlayer.currentTime();
        var hours   = Math.floor(currentTime / 3600);
        var minutes = Math.floor((currentTime - (hours * 3600)) / 60);
        var seconds = (currentTime - (hours * 3600) - (minutes * 60)).toFixed(0);
    
        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}      
        $("#timePicker").html(hours + ":" + minutes + ":" + seconds); 
        $("#timeSlider").attr('max',mediaPlayer.duration());
        $("#timePicker").css('font-weight',"bold");        
    });
}
function timeSliderSize() {
    
    $("#timeSliderDiv").width($(canvasVideo).outerWidth() - $("#playOrPause").outerWidth()- $("#timePickerDiv").outerWidth());
    $("#timeSlider").width($(canvasVideo).outerWidth() - $("#playOrPause").outerWidth()- $("#timePickerDiv").outerWidth());
    
    // console.log($(canvasVideo).outerWidth(),$("#playOrPause").outerWidth());
}
mediaPlayer.on('play', () => {
    videoLastStatus = 'played';
});

mediaPlayer.on('pause', () => {
    videoLastStatus = 'paused';
});

mediaPlayer.on('timeupdate', () => {
    $("#timeSlider").attr('max', mediaPlayer.duration());
    mseconds = mediaPlayer.currentTime();
   //if(drawControl){
   // addTimeList(mseconds);
//}
    drawBallTime(mseconds);

    $('#timeSlider').val(mseconds);

    /*  if (stopPlayerTime>0 && mseconds>=stopPlayerTime)
            _pause();
    */

});





