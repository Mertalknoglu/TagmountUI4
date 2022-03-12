var myPlayerValue = document.getElementById('my_video');

var myPlayer = videojs('my_video');

var timeSliderValue = document.getElementById('timeSliderCustom').value = 0;

var addPointerChcboxControl = document.getElementById('addPointerChcbox');

var showBallControl = document.getElementById('showBall');

var videoUrl = document.getElementById('videoURLtextBox').value;



var ballSize = 20;

var videoDuration;

var mseconds;

var allPointerOnVideo = new Object();

var allPointerOnVideo = { "allTime ": "", "startTime ": "", "endTime ": "", "x": "", "y": " " };
var showBall = true;
var lasttime = 0;


//----------------------------------- Video Controller -----------------------------------//
window.onresize = function() {
    var zoom = window.devicePixelRatio;
        document.body.style.zoom = (100 / zoom) + "%";
}
$( document ).ready(function() {
    currentTimeAddPoint();
    canvasSize();
    document.documentElement.scrollTop=0;
    //onload ta cagır display none
    document.getElementById('timeSliderDiv').style.display = 'table';
    canvasDiv.setAttribute("style", "z-index:2; position: absolute;");
    myPlayer.setAttribute("style", "z-index:1;");
    lineColor = "black"
    ctx.strokeStyle = "red";
    guid();
 
});
window.addEventListener('resize', function(event){
    canvasSize();
});
function canvasSize(){
    var myvideo=$("#my_video").width();
    console.log(myvideo);
    var canvas=document.getElementById("myCanvas");    
    var timeSlider=document.getElementById("timeSliderCustom");    
    var canvas2=document.getElementById("myCanvas2");
    timeSlider.setAttribute("style", "width:"+(myvideo-120)+"px;");
    canvas.width=  $("#my_video").width();
    canvas.height=$("#my_video").height();
    canvas2.width=  $("#my_video").width();
    canvas2.height=$("#my_video").height();

}
function guid() {
    var guid=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
      
    );
    $("#guid").val(guid);
    return guid;
    
  }
var pointerBackgroundColor="red";
var pointerBorderColor="blue";
function currentTimeAddPoint() {


    ball.clearRect(0, 0, canvas.width, canvas.height);
    //console.log(arr);
    //console.log(i);
    linexEnd = linex;//arr[i - 2].x + videoRect.left;
    lineyEnd = liney;//arr[i - 2].y + videoRect.top;

    var blackButton = document.createElement("div");
    blackButton.setAttribute("id", "blackButton");
    blackButton.setAttribute("style", "display: none; position:absolute;  border-radius:300vw; background:"+pointerBackgroundColor+"; height:"+ballSize+"; width:+"+ballSize+"; border:1px solid; border-color:"+pointerBorderColor+"; left:" + linexEnd + "px; top:" + lineyEnd + "px; z-index:10");
    blackButton.setAttribute("onmouseover", "ButtonMouseHover()");
    blackButton.setAttribute("onmouseout", "ButtonMouseOut()")
    blackButton.innerHTML = "";

    blackButton.addEventListener("click", ballOnClick); 

    var body = document.getElementsByTagName("body")[0];
    body.appendChild(buttonAndInfoCardParentDiv);
    body.appendChild(div_);

    buttonAndInfoCardParentDiv.setAttribute("id", "button_infoCardParent_div");
    buttonAndInfoCardParentDiv.setAttribute("style", "display:table;  left:" + linexEnd + "px; top:" + lineyEnd + "px;")

    div_.setAttribute("id", "infoCardDiv");

    var parentDivSearch = document.getElementById('button_infoCardParent_div');



    var rr = parentDivSearch.getBoundingClientRect();
    //console.log(rr.top,rr.left,rr.bottom,rr.right);
    parentDivSearch.appendChild(blackButton);
    parentDivSearch.appendChild(infoCardDiv);
    infoCardLeft = Number(linexEnd) + Number(ballSize-140);
    infoCardTop = Number(lineyEnd-140)- Number(ballSize);
        


}
function _play() {

    myPlayer.play();

}

function _forward() {

    myPlayer.currentTime(mseconds + 1);

}

function _rewind() {
    2
    myPlayer.currentTime(mseconds - 1);

}


function _pause() {

    myPlayer.pause();


}

function _pR010() {

    myPlayer.playbackRate(0.1);

}

function _pR025() {

    myPlayer.playbackRate(0.25);

}

function _pR5() {

    myPlayer.playbackRate(0.5);

}

function _pR1() {

    myPlayer.playbackRate(1);

    //console.log(myPlayer.currentTime());


}

//----------------------------------- Video Controller End -----------------------------------//




function infoCardSettingDivcheckboxStateChange() {
    var infosettingschkBox = document.getElementById('infoCardSettingsChcbox');
    if (infosettingschkBox.checked) {

        document.getElementById('infoCardSettingsValuesDiv').style.display = 'grid';
    } else {

        document.getElementById('infoCardSettingsValuesDiv').style.display = 'none';

    }
}


function PointerCardSettingDivcheckboxStateChange() {
    var pointersettingschkBox = document.getElementById('PointerSettingsChcbox');
    if (pointersettingschkBox.checked) {

        document.getElementById('PointerSettingsValuesDiv').style.display = 'flex';
    } else {

        document.getElementById('PointerSettingsValuesDiv').style.display = 'none';

    }
}

var canvasDiv = document.getElementById('canvasContainer');




function addPointerChcboxTimeSliderDivControl() {
    //onload ta cagır display none

    if (addPointerChcboxControl.checked) {
        showBall = true;
       
    } else {
        //black button onload ta cagır display block
        lasttime = myPlayer.currentTime();
        
        document.getElementById('timeSliderDiv').style.display = 'none';
        canvasDiv.setAttribute("style", "z-index:1; position: absolute; display:none;");
        myPlayer.setAttribute("style", "z-index:2;");
        canvas2.setAttribute("style", "z-index:3;");
        canvas.setAttribute("style", "border:5px solid red; position: absolute;");
        lineColor = 'transparent';
    }
    gizleGoster2("mode");
}

/*
function addPointerChcboxTimeSliderDivControl() {

    if (addPointerChcboxControl.checked) {

        document.getElementById('timeSliderDiv').style.display = 'table';
        canvasDiv.setAttribute("style", "z-index:2; position: absolute;");
        myPlayer.setAttribute("style", "z-index:1;");
        videoControllerOnVideo.setAttribute("style", "z-index: 100 !important; position:fixed;")
        lineColor="black"
        ctx.strokeStyle = "red";
        
        


    } else {

        document.getElementById('timeSliderDiv').style.display = 'none';
        ballCanvas.setAttribute("style","z-index:3;");
        lineCanvas.setAttribute("style", "z-index:2; position: absolute; display:none;");
        myPlayer.setAttribute("style", "z-index:1;");
        videoControllerOnVideo.setAttribute("style", "z-index: 100 !important; position:fixed;")
        lineColor = 'transparent';
       
    }
}*/



function timeSliderCustomf() {

    timeSliderValue = document.getElementById('timeSliderCustom').value;
    myPlayer.currentTime(timeSliderValue);


}


function videoChangeGetTextbox() {

    videoUrl = document.getElementById('videoURLtextBox').value;

    myPlayer.src({
        type: "video/youtube",
        src: videoUrl
    });

    myPlayer.load();
    getVideoDuration();
    myPlayer.play();
}


//----------------------------------- Get Video Duration -----------------------------------//



function getVideoDuration() {
    videoDuration = myPlayer.duration();

    document.getElementById('timeSliderCustom').max = videoDuration;

}

//----------------------------------- End Get Video Duration -----------------------------------//


var stopPlayerTime=0;
function sliderChangeValue() {
    document.getElementById('backgroundOpacityValue').innerHTML = document.getElementById('backgroundOpacitySliderValue').value;
}


myPlayer.on('timeupdate', () => {

    getVideoDuration();
    mseconds = myPlayer.currentTime();
    if (showBall)
        drawBallTime(mseconds.toFixed(5));
    document.getElementById('timeSliderCustom').value = mseconds;

    if (stopPlayerTime>0 && mseconds>=stopPlayerTime)
        _pause();

    /*  //console.log(arr);
      //console.log('arrLength' + arr.length);
      //console.log(arr[2].x);*/

});

var videoLastStatus;

myPlayer.on('play', () => {

    //console.log('Play');
    videoLastStatus = 'played';
    // getPosition();

});

myPlayer.on('pause', () => {
    //console.log('paused');
    videoLastStatus = 'paused';


});


var videoPlacesWidth = document.getElementById("my_video").offsetWidth;
var videoPlacesHeight = document.getElementById("my_video").offsetHeight;



function infoCardPreviewf() {

    infoCardPreview.style.background = infoCardBackgroundColor;
    infoCardPreview.style.borderWidth = infoCardBorderWidth;
    infoCardPreview.style.borderColor = infoCardBorderColor;
    infoCardPreview.style.borderRadius = infoCardBorderRadius;
    infoCardPreview.style.padding = infoCardPadding;
    infoCardPreview.textContent = infoCardText;
    infoCardPreview.style.fontSize = infoCardTextFontSize;
    infoCardPreview.style.color = infoCardTextColor;

}



var buttonAndInfoCardParentDiv = document.createElement("div");


var infoCardLeft = "20px";
var infoCardTop = "25px";






var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var canvas2 = document.getElementById("myCanvas2");
var ball = canvas2.getContext("2d");

var i = 1;

var arr = new Array();

var linex, liney, linexEnd, lineyEnd;

flag = 0;

var buttonAndInfoCardParentDiv = document.createElement("div");
var div_ = document.createElement("div");

var infoCardLeft;
var infoCardTop;

var element = document.getElementById('my_video');
var videoRect = element.getBoundingClientRect();

function ButtonMouseOut() {
    div_.setAttribute("style", "display : none");

}
var isDrawing = false;

var pos = {
    x: 0,
    y: 0
};

if (arr.length != i) {
    canvas.addEventListener('mousemove', draw);
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
});
// new position from mouse event
function setPosition(e) {
    pos.x = e.clientX - videoRect.left;
    pos.y = e.clientY - videoRect.top+document.documentElement.scrollTop ;
    console.log(document.documentElement.scrollTop,videoRect.top,e.clientY );
    
    arr.push({
        y: pos.y,
        x: pos.x
    })

}

// new position from mouse event


var arrayLastPoint;


var infoCardBorderWidth = '2px'; //document.getElementById('infoC_borderWidth').value;

var infoCardBorderColor = 'grey'; //document.getElementById('infoC_borderColor').value;

var infoCardBorderRadius = '5px'; //document.getElementById('infoC_borderRadius').value;

var infoCardPadding = '3px'; //document.getElementById('infoC_padding').value;

var infoCardText =  'Tagmount'; //document.getElementById('info').value;
var buttonInnerhtml='';
var infoCardTextFontSize = '18px'; //document.getElementById('infoC_TextFontSize').value;

var infoCardBackgroundColor = 'white';
var infoCardTextColor = 'black';
var infoCardBackgroundOpacity = '0.9';


//document.getElementById("infoCardDiv").innerHTML = infoCardText;



function ButtonMouseHover() {
    div_.setAttribute("style", " display:none; width:auto; height:auto; background:" + infoCardBackgroundColor + "; opacity:" + infoCardBackgroundOpacity + "; border-radius:5px;  font-size: 18px; color:" + infoCardTextColor + "; display:inline-block; left:" + infoCardLeft + "px; top:" + infoCardTop + "px; position:absolute; z-index:10");
    
    div_.innerHTML = infoCardText;

}


function drawBallTime(selectedTime) {
    /*console.log(jsonTimer);
    console.log("timeupdate", lasttime);
    console.log("timeupdate", selectedTime);
    */selectednumber = parseFloat(selectedTime);
    var drawPositions = drawList.filter(t => parseFloat(t.time) >= parseFloat(lasttime) && parseFloat(t.time) <= parseFloat(selectedTime));
    lasttime = selectedTime;
    if (drawPositions != undefined) {

        if (drawPositions.length == 0) {
            blackButton.setAttribute("style", "display: none ;");
        }
        drawPositions.forEach(element => {
            linex = element.positionx;
            liney = element.positiony;
            ball.clearRect(0, 0, canvas.width, canvas.height);
            drawBall();
        });

    } else {
        blackButton.setAttribute("style", "display: none ;");

    }
}



function drawBall() {
    linexEnd = linex + videoRect.left;//arr[i - 2].x + videoRect.left;
    lineyEnd = liney + videoRect.top;//arr[i - 2].y + videoRect.top;
    if (div_.innerHTML!=''){
        
        infoCardLeft = Number(linexEnd) + Number(ballSize-123);
        infoCardTop = Number(lineyEnd-105)- Number(ballSize);
        console.log(infoCardLeft,infoCardTop,lineyEnd,linexEnd)
        
       
    }else{
        
        div_.setAttribute("style", "display : none");
    }
    
    if (blackButton.innerHTML!=''){
        linexEnd =linexEnd-($("#blackButton").width()/2);
        lineyEnd=lineyEnd-($("#blackButton").height()/2);
        blackButton.setAttribute("style", "display: inline !important; position:absolute; left:" + linexEnd + "px; top:" + lineyEnd + "px; z-index:10");
    
    }else{
    blackButton.setAttribute("style", "display: inline !important; position:absolute;  border-radius:300vw; background:"+pointerBackgroundColor+"; height:"+ballSize+"px; width:"+ballSize+"px; border:1px solid; border-color:"+pointerBorderColor+"; left:" + linexEnd + "px; top:" + lineyEnd + "px; z-index:10");
    }
    blackButton.innerHTML=buttonInnerhtml;
    /*
        ball.beginPath();
    
        if ((linex || liney == undefined) && (flag == 0)) {
    
            ball.arc(arr[0].x, arr[0].y, ballSize / 2, 0, Math.PI * 2);
    
            flag = 1;
    
        } else {
    
    
            ball.arc(linex, liney, ballSize / 2, 0, Math.PI * 2);
    
        }
    
        ball.strokeStyle = 'purple';
        ball.lineWidth = '50px';
    
        ball.fillStyle = 'purple';
    
        ball.fill();
        ball.closePath();
        ball.stroke();
        */

}

var Timearr = new Array();


var jsonTimer = [];
var pointerList = [];



function draw(e) {

    // mouse left button must be pressed
    if (e.buttons !== 1) return;
    isDrawing = true;
    ctx.beginPath(); // begin
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = lineColor;
    ctx.moveTo(pos.x, pos.y); // from
    setPosition(e);

    ctx.lineTo(pos.x, pos.y); // to
    ctx.stroke(); // draw it!
    
    
    time = myPlayer.currentTime();
    posX = pos.x;
    posY = pos.y;
    jsonTimer.push({
        time: time,
        positionx: posX,
        positiony: posY

    })
   

    /*  //console.log('Timearr'+JSON.stringify(Timearr))
      allPointerOnVideo.startTime = Timearr[1].time;
  
      var endPointTime=Timearr.length
      allPointerOnVideo.endTime = Timearr[endPointTime].time;
  
      //console.log('allPointerOnVideoS'+Timearr[1].time)
      //console.log('allPointerOnVideoE'+endPointTime)*/


}
var drawList = [];
function drawShowBall() {
    if (showBallControl.checked) {
        pointerList.forEach(element => {

            //alert(element);
            

            console.log(element);
            element.forEach(e => {
                drawList.push({
                    time: e.time,
                    positionx: e.positionx,
                    positiony: e.positiony
                });
            });

        });
        console.log(drawList);
    } else {
        drawList = [];
    }
}

function saveTimer() {

    console.log(jsonTimer);
    pointerList.push(jsonTimer);
    jsonTimer = [];
    console.log(pointerList);
    
    drawList=[];
    pointerList.forEach(element => {
        element.forEach(e => {
            drawList.push({
                time: e.time,
                positionx: e.positionx,
                positiony: e.positiony
            });
        });

    });
    const myJSON = JSON.stringify(drawList);
    console.log(myJSON);
    
    document.getElementById('phppointerList').value = myJSON;
   
    
    //window.location.href = "ekle.php?json=" + myJSON; 
}


var inputlink = '';
$(".buttonLink").change(function() {
    inputlink=$(".buttonLink").val();
  });
function ballOnClick() {
    var sonuc = inputlink.indexOf('http');

    if (sonuc == -1) {

        inputlink = 'http://' + inputlink;
    } else {
        inputlink = document.getElementById("addLink").value;
    }

    window.location.replace(inputlink, '_blank');
}


function radioOnChange() {
    var radio = document.getElementsByName("radio");

    for (var elem in radio) {
        if (radio[elem].checked) {
            var secilenCinsiyet = document.getElementById("flexRadioDefault1");
            secilenCinsiyet.innerHTML = radio[elem].value;
        }
    }
}

$( ".infoCardPosition" ).click(function() {
    infoCardText=this.innerHTML;
    document.getElementById('infocardinnerhtml').value=infoCardText;
  });
  $( ".div-position-2" ).click(function() {
      buttonInnerhtml=this.innerHTML;
      document.getElementById('imageinnerhtml').value=buttonInnerhtml;
  });

function myChangeFunction() {
    var input1 = document.getElementById('info').value;
    document.getElementById("text1").innerHTML = input1;
    document.getElementById("text2").innerHTML = input1;
    document.getElementById("text3").innerHTML = input1;
    document.getElementById("text4").innerHTML = input1;
    
    var info = $("input[name='info']").val();
}
function onShowPointerList(id) {
    //alert(id);
    $.ajax({
        type: "POST",
        url: "pointerListDetail.php",
        data: "guid="+id,
        success: function(x){
            const obj = JSON.parse(x);
            drawList =JSON.parse(obj["MYJSON"]);
            console.log("pointerList");
            console.log(pointerList);

            infoCardText=obj["INFOCARDINNERHTML"];
            buttonInnerhtml=obj["IMAGEINNERHTML"];
            inputlink=obj["LINK"];

            myPlayer.currentTime(drawList[0]["time"]);
            stopPlayerTime = drawList[drawList.length-1]["time"];
            _play();
            document.getElementById('imageHiddenData').value=obj["INFORESIM"];
            document.getElementById('info').value=obj["INFO"];
            document.getElementById('Links').value=obj["LINK"];
            document.getElementById('borderR').value=obj["BORDERCOLORR"];
            document.getElementById('borderG').value=obj["BORDERCOLORG"];
            document.getElementById('borderB').value=obj["BORDERCOLORB"];
            document.getElementById('fillR').value=obj["FILLCOLORR"];
            document.getElementById('fillG').value=obj["FILLCOLORG"];
            document.getElementById('fillB').value=obj["FILLCOLORB"];
            document.getElementById('backR').value=obj["BACKGROUNDCOLORR"];
            document.getElementById('backG').value=obj["BACKGROUNDCOLORG"];
            document.getElementById('backB').value=obj["BACKGROUNDCOLORB"];
            document.getElementById('textR').value=obj["TEXTCOLORR"];
            document.getElementById('textG').value=obj["TEXTCOLORG"];
            document.getElementById('textB').value=obj["TEXTCOLORB"];
            document.getElementById('slidebarinput').value=(obj["BACKGROUNDOPACİTY"]*100);
            document.getElementById("slidebar").innerHTML = (obj["BACKGROUNDOPACİTY"]*100) +"%";
            $(".span-R").css("background-color", "rgb(" + obj["FILLCOLORR"] + "," + obj["FILLCOLORG"] + "," + obj["FILLCOLORB"] + ")");
            $(".span-G").css("background-color", "rgb(" + obj["FILLCOLORR"] + "," + obj["FILLCOLORG"] + "," + obj["FILLCOLORB"] + ")");
            $(".span-B").css("background-color", "rgb(" + obj["FILLCOLORR"] + "," + obj["FILLCOLORG"] + "," + obj["FILLCOLORB"] + ")");
            $(".span-br-R").css("background-color", "rgb(" + obj["BORDERCOLORR"] + "," + obj["BORDERCOLORG"] + "," + obj["BORDERCOLORB"] + ")");
            $(".span-br-G").css("background-color", "rgb(" + obj["BORDERCOLORR"] + "," + obj["BORDERCOLORG"] + "," + obj["BORDERCOLORB"] + ")");
            $(".span-br-B").css("background-color", "rgb(" + obj["BORDERCOLORR"] + "," + obj["BORDERCOLORG"] + "," + obj["BORDERCOLORB"] + ")");
            $(".span-bg-R").css("background-color", "rgb(" + obj["BACKGROUNDCOLORR"] + "," + obj["BACKGROUNDCOLORG"] + "," + obj["BACKGROUNDCOLORB"] + ")");
            $(".span-bg-G").css("background-color", "rgb(" + obj["BACKGROUNDCOLORR"] + "," + obj["BACKGROUNDCOLORG"] + "," + obj["BACKGROUNDCOLORB"] + ")");
            $(".span-bg-B").css("background-color", "rgb(" + obj["BACKGROUNDCOLORR"] + "," + obj["BACKGROUNDCOLORG"] + "," + obj["BACKGROUNDCOLORB"] + ")");
            $(".span-tx-R").css("background-color", "rgb(" + obj["TEXTCOLORR"] + "," + obj["TEXTCOLORG"] + "," + obj["TEXTCOLORB"] + ")");
            $(".span-tx-G").css("background-color", "rgb(" + obj["TEXTCOLORR"] + "," + obj["TEXTCOLORG"] + "," + obj["TEXTCOLORB"] + ")");
            $(".span-tx-B").css("background-color", "rgb(" + obj["TEXTCOLORR"] + "," + obj["TEXTCOLORG"] + "," + obj["TEXTCOLORB"] + ")");
            $(".bubble2").css("background-color", "rgb(" + obj["BACKGROUNDCOLORR"] + "," + obj["BACKGROUNDCOLORG"] + "," + obj["BACKGROUNDCOLORB"] + ")");
            $(".bubble3").css("background-color", "rgb(" + obj["BACKGROUNDCOLORR"] + "," + obj["BACKGROUNDCOLORG"] + "," + obj["BACKGROUNDCOLORB"] + ")");
            $(".bubble").css("background-color", "rgb(" + obj["BACKGROUNDCOLORR"] + "," + obj["BACKGROUNDCOLORG"] + "," + obj["BACKGROUNDCOLORB"] + ")");
            pointerBackgroundColor="rgb(" + obj["FILLCOLORR"] + "," + obj["FILLCOLORG"] + "," + obj["FILLCOLORB"] + ")";
            pointerBorderColor="rgb(" + obj["BORDERCOLORR"] + "," + obj["BORDERCOLORG"] + "," + obj["BORDERCOLORB"] + ")";
            myChangeFunction();
            setPreviewImage1(obj["INFORESIM"]);
            if(obj["POINTERICON"]==""){
                var img="assets/img/pineapple.jpg";
                document.getElementById("image1").src = img;
                document.getElementById("image2").src = img;
                document.getElementById("image3").src = img;
            }else{
                setPreviewImage(obj["POINTERICON"]);
            }
            $(".bubble").css("background", "rgba(" + obj["BACKGROUNDCOLORR"] + "," + obj["BACKGROUNDCOLORG"] + "," + obj["BACKGROUNDCOLORB"] + ","+obj["BACKGROUNDOPACİTY"]+")");
            $(".bubble2").css("background",  "rgba(" + obj["BACKGROUNDCOLORR"] + "," + obj["BACKGROUNDCOLORG"] + "," + obj["BACKGROUNDCOLORB"] +", "+obj["BACKGROUNDOPACİTY"]+")");
            $(".bubble3").css("background",  "rgba(" + obj["BACKGROUNDCOLORR"] + "," + obj["BACKGROUNDCOLORG"] + "," + obj["BACKGROUNDCOLORB"] + ","+obj["BACKGROUNDOPACİTY"]+")");
        }
    });
}
function _Pointer10() {
    $("#blackButton").css("width", "10px");
    $("#blackButton").css("height", "10px");
    $(".img-box-1").css("width", "10px");
    $(".img-box-1").css("height", "10px");
    ballSize=10;

}
function _Pointer20() {
    $("#blackButton").css("width", "20px");
    $("#blackButton").css("height", "20px");
    $(".img-box-1").css("width", "20px");
    $(".img-box-1").css("height", "20px");
    ballSize=20;
}
function _Pointer30() {
    $("#blackButton").css("width", "30px");
    $("#blackButton").css("height", "30px");
    $(".img-box-1").css("width", "30px");
    $(".img-box-1").css("height", "30px");
    ballSize=30;
}
function _Pointer40() {
    $("#blackButton").css("width", "40px");
    $("#blackButton").css("height", "40px");
    $(".img-box-1").css("width", "40px");
    $(".img-box-1").css("height", "40px");    
    ballSize=40;
}
function _Pointer50() {
    $("#blackButton").css("width", "50px");
    $("#blackButton").css("height", "50px");
    $(".img-box-1").css("width", "50px");
    $(".img-box-1").css("height", "50px");
    ballSize=50;
}
function _Pointer60() {
    $("#blackButton").css("width", "60px");
    $("#blackButton").css("height", "60px");
    $(".img-box-1").css("width", "60px");
    $(".img-box-1").css("height", "60px");
    ballSize=60;
}
function sliderchange() {
    var slider = document.getElementById("slidebarinput");
    var sliderInput = (slider.value / 100);
    var slideropacity = sliderInput.toFixed(1);
    document.getElementById("slidebar").innerHTML = slider.value + "%";
    $("#sliderinput").val(slideropacity);
    var backR = $('#backR').val();
    var backB = $('#backB').val();
    var backG = $('#backG').val();
    $(".bubble").css("background", "rgba("+backR+","+backG+","+backB+","+slideropacity+")");
    $(".bubble2").css("background",  "rgba("+backR+","+backG+","+backB+","+slideropacity+")");
    $(".bubble3").css("background",  "rgba("+backR+","+backG+","+backB+","+slideropacity+")");
}

function PreviewImage() {
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("AddImage3").files[0]);
    oFReader.onload = function (oFREvent) {
        document.getElementById("uploadPreview").src = oFREvent.target.result;
        document.getElementById("imageIconData").value = oFREvent.target.result;
        
    };
}
function setPreviewImage(data) {
    document.getElementById("uploadPreview").src = data;
 
}

function PreviewImage1() {
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("AddImage").files[0]);
    oFReader.onload = function (oFREvent) {
        document.getElementById("image1").src = oFREvent.target.result;
        document.getElementById("image2").src = oFREvent.target.result;
        document.getElementById("image3").src = oFREvent.target.result;
        document.getElementById("imageHiddenData").value = oFREvent.target.result;
    };
}
function setPreviewImage1(data) {
        document.getElementById("image1").src = data;
        document.getElementById("image2").src = data;
        document.getElementById("image3").src = data;
     
}
function PreviewImage2() {
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("AddImage1").files[0]);
    oFReader.onload = function (oFREvent) {
        document.getElementById("image1").src = oFREvent.target.result;
        document.getElementById("image2").src = oFREvent.target.result;
        document.getElementById("image3").src = oFREvent.target.result;       
       
    };
}
function gizleGoster(ID, ID1) {
    var secilenID = document.getElementById(ID);
    var secilenID1 = document.getElementById(ID1);
    if (secilenID.style.display == "none") {
        secilenID.style.display = "";
    } else {
        secilenID.style.display = "none";
    }
    if (secilenID1.style.display == "none") {
        secilenID1.style.display = "";
    } else {
        secilenID1.style.display = "none";
    }
}
function gizleGoster1(pointersetting) {
    var secilenID = document.getElementById(pointersetting);
    if (secilenID.style.display == "none") {
        secilenID.style.display = "";
    } else {
        secilenID.style.display = "none";
    }

}
function gizleGoster2(mode) {
    var secilenID = document.getElementById(mode);
    if (secilenID.style.display == "none") {
        secilenID.style.display = "";
    } else {
        secilenID.style.display = "none";
    }
}

function Add() {
    if (($('#AddImage').val() == "")) {
        $('#AddImage').trigger('click');
        $("#AddImage").on('change', function () {
            var addimage = $('#AddImage').val();
            //Do calculation and change value of other span2,span3 here
            $('#spanAddImage').text(addimage);

        });
    } else {
        $('#AddImage').trigger('click');
        $('#AddImage').val() == "";
        if (($('#AddImage').val() == "")) {
            $('#spanAddImage').text("Add İmage");
        } else { $('#spanAddImage').text("Add İmage"); }
    }
}
function Add2() {
    if (($('#AddImage1').val() == "")) {
        $('#AddImage1').trigger('click');
        $("#AddImage1").on('change', function () {
            var addimage = $('#AddImage1').val();
            //Do calculation and change value of other span2,span3 here
            $('#spanAddImage1').text(addimage);
        });
    } else {
        $('#AddImage1').trigger('click');
        $('#AddImage1').val() == "";
        if (($('#AddImage1').val() == "")) {
            $('#spanAddImage1').text("Add İmage");
        } else { $('#spanAddImage1').text("Add İmage"); }
    }
}
function delpng() {
    if (!($('#AddImage').val() == "")) {
        var del = $('#AddImage').val('');
        $('#spanAddImage').text("Add İmage");
        
    }
}
function delpng2() {
    if (!($('#AddImage1').val() == "")) {
        var del = $('#AddImage1').val('');
        $('#spanAddImage1').text("Add İmage");
    }
}
function Add3() {
    if (($('#AddImage3').val() == "")) {
        $('#AddImage3').trigger('click');
    } else {
        $('#spanAddImage3').text("Add Icon İmage");
    }
    $("#AddImage3").on('change', function () {
        var addimage = $('#AddImage3').val();
        //Do calculation and change value of other span2,span3 here
        $('#spanAddImage3').text(addimage);
        
    });
}
function delpng3() {
    if (!($('#AddImage3').val() == "")) {
        var del = $('#AddImage3').val('');
        $('#spanAddImage3').text("Add  Icon İmage");
    }
}

function SpanR() {
    if (($('#AddImage3').val() == "")) {
        $('#AddImage3').trigger('click');
    } else {
        $('#spanAddImage3').text("Add Icon İmage");
    }
    $("#AddImage3").on('change', function () {
        var addimage = $('#AddImage3').val();
        //Do calculation and change value of other span2,span3 here
        $('#spanAddImage3').text(addimage);
    });
}

function fillR() {
    var fillR = $('#fillR').val();
    var fillG = $('#fillG').val();
    var fillB = $('#fillB').val();
    var fillRGB = ('rgb(' + fillR + ',' + fillG + ',' + fillB + ')')
    $(".span-R").css("background-color", "rgb(" + fillR + "," + fillG + "," + fillB + ")");
    $(".span-G").css("background-color", "rgb(" + fillR + "," + fillG + "," + fillB + ")");
    $(".span-B").css("background-color", "rgb(" + fillR + "," + fillG + "," + fillB + ")");
    pointerBackgroundColor="rgb(" + fillR + "," + fillG + "," + fillB + ")";
    $("#fillInput").val(fillRGB);
}
function fillG() {

    var fillR = $('#fillR').val();
    var fillG = $('#fillG').val();
    var fillB = $('#fillB').val();
    var fillRGB = ('rgb(' + fillR + ',' + fillG + ',' + fillB + ')')
    $(".span-R").css("background-color", "rgb(" + fillR + "," + fillG + "," + fillB + ")");
    $(".span-G").css("background-color", "rgb(" + fillR + "," + fillG + "," + fillB + ")");
    $(".span-B").css("background-color", "rgb(" + fillR + "," + fillG + "," + fillB + ")");
    pointerBackgroundColor="rgb(" + fillR + "," + fillG + "," + fillB + ")";
    $("#fillInput").val(fillRGB);
}
function fillB() {
    var fillR = $('#fillR').val();
    var fillG = $('#fillG').val();
    var fillB = $('#fillB').val();
    var fillRGB = ('rgb(' + fillR + ',' + fillG + ',' + fillB + ')')
    $(".span-R").css("background-color", "rgb(" + fillR + "," + fillG + "," + fillB + ")");
    $(".span-G").css("background-color", "rgb(" + fillR + "," + fillG + "," + fillB + ")");
    $(".span-B").css("background-color", "rgb(" + fillR + "," + fillG + "," + fillB + ")");
    pointerBackgroundColor="rgb(" + fillR + "," + fillG + "," + fillB + ")";
    $("#fillInput").val(fillRGB);
}
function borderR() {
    var borderR = $('#borderR').val();
    var borderG = $('#borderG').val();
    var borderB = $('#borderB').val();
    var borderRGB = ('rgb(' + borderR + ',' + borderG + ',' + borderB + ')')
    $(".span-br-R").css("background-color", "rgb(" + borderR + "," + borderG + "," + borderB + ")");
    $(".span-br-G").css("background-color", "rgb(" + borderR + "," + borderG + "," + borderB + ")");
    $(".span-br-B").css("background-color", "rgb(" + borderR + "," + borderG + "," + borderB + ")");    
    pointerBorderColor= "rgb(" + borderR + "," + borderG + "," + borderB + ")";
    $(".img-box-1").css("border-color", "rgb(" + borderR + "," + borderG + "," + borderB + ")");
    $("#borderInput").val(borderRGB);
}
function borderG() {
    var borderR = $('#borderR').val();
    var borderG = $('#borderG').val();
    var borderB = $('#borderB').val();
    var borderRGB = ('rgb(' + borderR + ',' + borderG + ',' + borderB + ')')
    $(".span-br-R").css("background-color", "rgb(" + borderR + "," + borderG + "," + borderB + ")");
    $(".span-br-G").css("background-color", "rgb(" + borderR + "," + borderG + "," + borderB + ")");
    $(".span-br-B").css("background-color", "rgb(" + borderR + "," + borderG + "," + borderB + ")");
    pointerBorderColor= "rgb(" + borderR + "," + borderG + "," + borderB + ")";
    $(".img-box-1").css("border-color", "rgb(" + borderR + "," + borderG + "," + borderB + ")");
    $("#borderInput").val(borderRGB);
}
function borderB() {
    var borderR = $('#borderR').val();
    var borderG = $('#borderG').val();
    var borderB = $('#borderB').val();
    var borderRGB = ('rgb(' + borderR + ',' + borderG + ',' + borderB + ')')
    $(".span-br-R").css("background-color", "rgb(" + borderR + "," + borderG + "," + borderB + ")");
    $(".span-br-G").css("background-color", "rgb(" + borderR + "," + borderG + "," + borderB + ")");
    $(".span-br-B").css("background-color", "rgb(" + borderR + "," + borderG + "," + borderB + ")");
    pointerBorderColor= "rgb(" + borderR + "," + borderG + "," + borderB + ")";
    $(".img-box-1").css("border-color", "rgb(" + borderR + "," + borderG + "," + borderB + ")");
    $("#borderInput").val(borderRGB);
}




function backgroundR() {
    var backR = $('#backR').val();
    var backB = $('#backB').val();
    var backG = $('#backG').val();
    var backRGB = ('rgb(' + backR + ',' + backG + ',' + backB+ ')');
    $(".span-bg-R").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $(".span-bg-G").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $(".span-bg-B").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $(".bubble2").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $(".bubble3").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $(".bubble").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $("#backgroundInput").val(backRGB);
}
function backgroundG() {
    var backR = $('#backR').val();
    var backG = $('#backG').val();
    var backB = $('#backB').val();
    var backRGB = ('rgb(' + backR + ',' + backG + ',' + backB + ')');
    $(".span-bg-R").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $(".span-bg-G").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $(".span-bg-B").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $(".bubble2").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $(".bubble3").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $(".bubble").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $("#backgroundInput").val(backRGB);
}
function backgroundB() {
    var backR = $('#backR').val();
    var backG = $('#backG').val();
    var backB = $('#backB').val();
    var backRGB = ('rgb(' + backR + ',' + backG + ',' + backB+ ')');
    $(".span-bg-R").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $(".span-bg-G").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $(".span-bg-B").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $(".bubble2").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $(".bubble3").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $(".bubble").css("background-color", "rgb(" + backR + "," + backG + "," + backB + ")");
    $("#backgroundInput").val(backRGB);
}
function textR() {
    var textR = $('#textR').val();
    var textG = $('#textG').val();
    var textB = $('#textB').val();
    var textRGB = ('rgb(' + textR + ',' + textG + ',' + textB + ')');
    $(".span-tx-R").css("background-color", "rgb(" + textR + "," + textG + "," + textB + ")");
    $(".span-tx-G").css("background-color", "rgb(" + textR + "," + textG + "," + textB + ")");
    $(".span-tx-B").css("background-color", "rgb(" + textR + "," + textG + "," + textB + ")");
    $(".bubble3").css("color", "rgb(" + textR + "," + textG + "," + textB + ")");
    $(".bubble2").css("color", "rgb(" + textR + "," + textG + "," + textB + ")");
    $(".bubble").css("color", "rgb(" + textR + "," + textG + "," + textB + ")");
    $("#textInput").val(textRGB);
}
function textG() {
    var textR = $('#textR').val();
    var textG = $('#textG').val();
    var textB = $('#textB').val();
    var textRGB = ('rgb(' + textR + ',' + textG + ',' + textB + ')');
    $(".span-tx-R").css("background-color", "rgb(" + textR + "," + textG + "," + textB + ")");
    $(".span-tx-G").css("background-color", "rgb(" + textR + "," + textG + "," + textB + ")");
    $(".span-tx-B").css("background-color", "rgb(" + textR + "," + textG + "," + textB + ")");
    $(".bubble3").css("color", "rgb(" + textR + "," + textG + "," + textB + ")");
    $(".bubble2").css("color", "rgb(" + textR + "," + textG + "," + textB + ")");
    $(".bubble").css("color", "rgb(" + textR + "," + textG + "," + textB + ")");
    $("#textInput").val(textRGB);
}
function textB() {
    var textR = $('#textR').val();
    var textG = $('#textG').val();
    var textB = $('#textB').val();
    var textRGB = ('rgb(' + textR + ',' + textG + ',' + textB + ')');
    $(".span-tx-R").css("background-color", "rgb(" + textR + "," + textG + "," + textB + ")");
    $(".span-tx-G").css("background-color", "rgb(" + textR + "," + textG + "," + textB + ")");
    $(".span-tx-B").css("background-color", "rgb(" + textR + "," + textG + "," + textB + ")");
    $(".bubble3").css("color", "rgb(" + textR + "," + textG + "," + textB + ")");
    $(".bubble2").css("color", "rgb(" + textR + "," + textG + "," + textB + ")");
    $(".bubble").css("color", "rgb(" + textR + "," + textG + "," + textB + ")");
    $("#textInput").val(textRGB);
}
