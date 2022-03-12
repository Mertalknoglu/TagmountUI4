var mediaPlayer = videojs("my_video");
var videoLastStatus;

var videoTimer = function () {
   

    return {
        init: function () {
           
        }
    };
}();


mediaPlayer.on('timeupdate', () => {

    mseconds = mediaPlayer.currentTime();
    drawBallTime(mseconds);
   
});


