

var pointerPlay = function () {

    return {
        init: function (videoDivPar, videoDrawWidthPar, videoDrawHeightPar) {
            videoDiv = videoDivPar;
            if (videoDrawWidthPar != undefined && videoDrawWidthPar > 0)
                videoDrawWidth = videoDrawWidthPar;
            if (videoDrawHeightPar != undefined && videoDrawHeightPar > 0)
                videoDrawHeight = videoDrawHeightPar;

            addPointerEvents();
        }

    };
}();



var selectedTime = 0;
var lasttime = 0;//TODO sonrasında silinecek.
var drawBallTime = function (selectedTime) {
    var display = false;
    for (let index = 0; index < pointerList.length; index++) {
        const element = pointerList[index];
        var bas = element[0].time;
        var bit = element[element.length - 1].time;
      if(bas<= selectedTime && selectedTime<=bit){
            display = true;
            break; // Behaves like `break`
        }      
    } 
    if (display) {
        var drawPositions = videoDrawList.filter(t => parseFloat(t.time) >= parseFloat(lasttime) && parseFloat(t.time) <= parseFloat(selectedTime));
        lasttime = selectedTime;
        if (drawPositions != undefined) {
            drawPositions.forEach(element => {
                drawBall(element.positionx, element.positiony, element.id);
            });
        }
    }
    else {
        $(pointerObj).attr("style", "display: none ;");
        $(infoCardObj).attr("style", "display: none ;");
    }    
}
var oldLeft=0;
var oldTop=0;
var infoCardOldLeft;
var infoCardOoldTop;
var infoCardLeft;
var infoCardTop;
var oldTagmountId = 0;
function drawBall(coorX, coorY, tagmountId) {

    var scaleWidth = 1;
    var scaleHeigth = 1;
    if (videoDrawWidth > 0) {
        scaleWidth = $(videoDiv).width() / videoDrawWidth;
    }
    if (videoDrawHeight > 0) {
        scaleHeigth = $(videoDiv).outerHeight() / videoDrawHeight;
    }
    coorX = coorX * scaleWidth;
    coorY = coorY * scaleHeigth;

    pointerLeft = coorX - 5;//canvasborder
    pointerTop = coorY - 5;//canvasborder
    if (tagmountId != oldTagmountId) {
        variableInitialize(tagmountId);
        oldTagmountId = tagmountId;
    }
    if ($(pointerObj).html() != '') {
        $(pointerObj).attr("style", "display: inline !important; position:absolute; left:" + oldLeft + "px; top:" + oldTop + "px; z-index:2147483647");
        $(infoCardObj).attr("style", "width:auto; height:auto; border-radius:5px;  display:inline-block; position:absolute; z-index:2147483647");
        infoCardLeft = $(pointerObj).position().left + ($(pointerObj).width() / 2) - ($(infoCardObj).width() / 2);
        infoCardTop = $(pointerObj).position().top - ($(infoCardObj).height());
        $(infoCardObj).attr("style", "left:" + infoCardOldLeft + "px; top:" + infoCardOoldTop + "px; position:absolute; z-index:2147483647");
    } else {
        // // koordinatta objenin merkezi yer alması için.
        //   pointerLeft = pointerLeft - ($(pointerObj).width() / 2);
        //   pointerTop = pointerTop - ($(pointerObj).height() / 2);
       // $(pointerObj).attr("style", "display: inline !important; position:absolute;  border-radius:300vw; background:" + pointerBackgroundColor + "; height:" + ballSize + "px; width:" + ballSize + "px; border:1px solid; border-color:" + pointerBorderColor + "; left:" + oldLeft + "px; top:" + oldTop + "px; z-index:2147483647");
       $(pointerObj).attr("style", "display: inline !important; position:absolute;  border-radius:300vw; background:" + pointerBackgroundColor + "; height:" + ballSize + "px; width:" + ballSize + "px; border:1px solid; border-color:" + pointerBorderColor + "; left:" + oldLeft + "px; top:" + oldTop + "px; z-index:2147483647");
        //$(infoCardObj).html(infoCardHtml);
        $(infoCardObj).attr("style", "width:auto; height:auto; border-radius:5px;  display:inline-block; position:absolute; z-index:2147483647");
        infoCardLeft = $(pointerObj).position().left + ($(pointerObj).width() / 2) - ($(infoCardObj).width() / 2);
        infoCardTop = $(pointerObj).position().top - ($(infoCardObj).height());
        $(infoCardObj).attr("style", "left:" + infoCardOldLeft + "px; top:" + infoCardOoldTop + "px; position:absolute; z-index:2147483647");
    }    
    $(pointerObj).animate({"left": pointerLeft + "px", "top": pointerTop + "px" },

       {duration:1}   );
    oldLeft = pointerLeft;
    oldTop = pointerTop;
        $(infoCardObj).animate({"left": infoCardOldLeft + "px", "top": infoCardOoldTop + "px" },

       {duration:1}   );
    infoCardOldLeft = infoCardLeft;
    infoCardOoldTop = infoCardTop;

}
function variableInitialize(tagmountId) {
  
    var varLst = videoHtmlLst.find(v => v.id == tagmountId);
    console.log(varLst);
    if (varLst != undefined && varLst.length != 0) {
        infoCardHtml = varLst["infoCardInnerHtml"];
        pointerOpenURL = varLst["pointerOpenURL"];
        pointerBackgroundColor = varLst["pointerBackgroundColor"];
        pointerBorderColor = varLst["pointerBorderColor"];
        ballSize = varLst["ballSize"];
        pointerHtml = varLst["pointerInnerHtml"];
    } else {
        infoCardHtml = "";
        pointerOpenURL = "";
        pointerBackgroundColor = "red";
        pointerBorderColor = "blue";
        ballSize = 20;
        pointerHtml = "";
    }
    $(pointerObj).html(pointerHtml);
    $(infoCardObj).html(infoCardHtml);
}

function addPointerEvents() {
    // $(pointerObj).mouseover(function () {
    //     infoCardShow();
    // });
    // $(pointerObj).mouseout(function () {
    //     $(infoCardObj).attr("style", "display:none;");
    // });
    $(pointerObj).click(function () {
        openLink();

    });
    $(infoCardObj).click(function () {
        openLink();

    });
}

function infoCardShow() {
    //$(infoCardObj).html(infoCardHtml);
    $(infoCardObj).attr("style", "width:auto; height:auto; border-radius:5px;  display:inline-block; position:absolute; z-index:2147483647");
    infoCardLeft = $(pointerObj).position().left + ($(pointerObj).width() / 2) - ($(infoCardObj).width() / 2);
    infoCardTop = $(pointerObj).position().top - ($(infoCardObj).height());
    $(infoCardObj).attr("style", "left:" + infoCardLeft + "px; top:" + infoCardTop + "px; position:absolute; z-index:2147483647");

}
function openLink() {
    if (pointerOpenURL.indexOf('http') == -1)
        pointerOpenURL = "http://" + pointerOpenURL;
    window.open(pointerOpenURL, '_blank');
}

