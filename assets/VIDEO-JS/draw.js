
let position = { x: 0, y: 0 };
let ctx;
let jsonTimer = [];
let pointerList = [];
let drawList = [];
let drawControl = false;
let drawingFromMove = false;

var draw = function () {

    return {
        init: function () {
            ctx = $(canvasVideo)[0].getContext("2d");
            addCanvasEvents();
            
        }
    };
}();

var addCanvasEvents = function () {
    $(canvasVideo).mousemove(function (e) {
       // if (drawControl) 
            drawLine(e);
    });
    $(canvasVideo).mousedown(function (e) {
        //drawControl = true;
        getPosition(e);
        
    });
    $(canvasVideo).mouseup(function () {
       // drawControl = false;
       
    addTimeList(mediaPlayer.currentTime());
    saveTimer();
    });
}
function getPosition(e) {

    position.x = e.pageX - $(videoDiv).offset().left;
    position.y = e.pageY - $(videoDiv).offset().top;
}

var drawLine = function (e) {
    if (e.buttons !== 1) return;
    ctx.beginPath(); // begin
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = "red";
    ctx.moveTo(position.x, position.y); // from
    getPosition(e);
    ctx.lineTo(position.x, position.y); // to
    ctx.stroke(); // draw it!
    addTimeList(mediaPlayer.currentTime());
}


function addTimeList(mseconds) {

    posX = position.x;
    posY = position.y;

    jsonTimer.push({
        time: mseconds,
        positionx: posX,
        positiony: posY

    });
}
function saveTimer() {
    pointerList.push(jsonTimer);

    jsonTimer = [];
    videoDrawList = [];
    pointerList.forEach(element => {
        element.forEach(e => {
            videoDrawList.push({
                id: -1,///gecicikayıt için -1  seçildi
                time: e.time,
                positionx: e.positionx,
                positiony: e.positiony
            });
        });

    });
    document.getElementById('phppointerList').value = JSON.stringify(pointerList);
}

// $("#clearDraw").click(function() {
//     clearDraw();
//   });
// function clearDraw(){
//     ctx.clearRect(0, 0, canvasWidth, canvasHeight);
//     jsonTimer = [];
//     videoDrawList=[];
// }
