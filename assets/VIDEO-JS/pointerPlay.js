

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
     // console.log(lasttime, selectedTime);
    var drawPositions = videoDrawList.filter(t => parseFloat(t.time) >= parseFloat(lasttime) && parseFloat(t.time) <= parseFloat(selectedTime));
    lasttime = selectedTime;
    if (drawPositions != undefined) {

        if (drawPositions.length == 0) {
            //console.log("bulunamadı.")
          //  $(pointerObj).attr("style", "display: none ;");
        } else {
            drawPositions.forEach(element => {
                drawBall(element.positionx, element.positiony, element.id);
            });
        }

    } else {
        // console.log("bulunamadı222.")
//$(pointerObj).attr("style", "display: none ;");

    }
}
var oldLeft = 0;
var oldTop = 0;
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
    //$(pointerObj).html(pointerHtml);
    if ($(pointerObj).html() != '') {
       // console.log(1);
        $(pointerObj).attr("style", "display: inline !important; position:absolute; left:" + oldLeft + "px; top:" + oldTop + "px; z-index:2147483647");
    } else {
        //console.log(2);
        // // koordinatta objenin merkezi yer alması için.
        //   pointerLeft = pointerLeft - ($(pointerObj).width() / 2);
        //   pointerTop = pointerTop - ($(pointerObj).height() / 2);
       // $(pointerObj).attr("style", "display: inline !important; position:absolute;  border-radius:300vw; background:" + pointerBackgroundColor + "; height:" + ballSize + "px; width:" + ballSize + "px; border:1px solid; border-color:" + pointerBorderColor + "; left:" + oldLeft + "px; top:" + oldTop + "px; z-index:2147483647");
       $(pointerObj).attr("style", "display: inline !important; position:absolute;  border-radius:300vw; background:" + pointerBackgroundColor + "; height:" + ballSize + "px; width:" + ballSize + "px; border:1px solid; border-color:" + pointerBorderColor + "; left:" + oldLeft + "px; top:" + oldTop + "px; z-index:2147483647");
   
    }    
    $(pointerObj).animate({"left": pointerLeft + "px", "top": pointerTop + "px" }, {

        duration: (1)
    }
    );
    oldLeft = pointerLeft;
    oldTop = pointerTop;

}
function variableInitialize(tagmountId) {
    var varLst = videoHtmlLst.find(v => v.id == tagmountId);
    if (varLst != undefined && varLst.length != 0) {
        infoCardHtml = varLst["infoCardInnerHtml"];
        pointerOpenURL = varLst["pointerOpenURL"];
        pointerBackgroundColor =varLst["pointerBackgroundColor"];
        pointerBorderColor =varLst["pointerBorderColor"];
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
    $(pointerObj).mouseover(function () {
        infoCardShow();
    });
    $(pointerObj).mouseout(function () {
        $(infoCardObj).attr("style", "display:none;");
    });
    $(pointerObj).click(function () {
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

