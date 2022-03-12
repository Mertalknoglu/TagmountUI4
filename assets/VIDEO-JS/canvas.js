var canvasVideoId="canvasVideo";
var canvasVideo="#"+canvasVideoId;
var canvasDrawId="canvasDraw";
var canvasDraw="#"+canvasDrawId;
var canvas = function () {
    return {
        init: function (videodiv, videoController) {
            handleCanvas(videodiv, videoController);
        },
        canvasResize:function (videoController){
            canvasResizeHandle(videoController);
        }
    };
}();

var handleCanvas = function (videodiv, videoController) {
    createCanvas(videodiv);
    canvasResizeHandle(videoController);
}
var canvasResizeHandle = function (videoController) {
    canvasWidth = $(videoController).outerWidth();
    canvasHeight = $(videoController).outerHeight();
    $(".canvas-dimensions").attr({ "width":canvasWidth, "height": canvasHeight });
}


var createCanvas = function (videodiv) {
    $(videodiv).append(
        $('<div>').prop({
            id: 'canvasContainer',
            className: 'canvas-dimensions'
        })
    );
    $("#canvasContainer").append(
        $('<canvas>').prop({
            id: canvasVideoId,
            className: 'canvas-dimensions'
        })
    );

    // $("#canvasContainer").append(
    //     $('<canvas>').prop({
    //         id: canvasDrawId,
    //         className: 'canvas-dimensions'
    //     })
    // );
}
/**   timeSlider.width(videoController.width() - $("#playOrPause").outerWidth());
 * 
 */

/*if (arr.length != i) {
   $/addEventListener('mousemove', draw);
    canvas.addEventListener('mousedown', setPosition);


    // canvas.addEventListener('click', e => {

    //     //console.log('click');
    //     getPosition();

    // });


}
window.addEventListener('mouseup', e => {
    if (isDrawing === true) {
        saveTimer();
        isDrawing = false;
    }
});*/
