

var getdata = function () {

    return {
        init: function (videoGuid) {

            onShowPointerList(videoGuid);
        }
    };
}();

var videoHtmlLst = [];
var videoDrawList = [];
function onShowPointerList(guid) {

    $.ajax({
        type: "POST",
        url: "pointerListDetail.php",
        data: "id=" + guid,
        success: function (x) {
            setPointerInfo(x);
        }
    });

}

function onShowPointer(tagmountId) {
    
    $.ajax({
        type: "POST",
        url: "pointerListDetail.php",
        data: "bolum_id=" + tagmountId,
        success: function (x) {

            setPointerInfo(x);
        }
    });

}

// function setPointerInfo(x) {
   
//     const obj = JSON.parse(x);
//         Object.keys(obj).forEach(element => {
            
//             var jsonParse=JSON.parse(obj["MYJSON"]);
//             console.log(jsonParse);
//             jsonParse.forEach(e => {
//                 videoDrawList.push({
//                     id: 1,
//                     time: e.time,
//                     positionx: e.positionx,
//                     positiony: e.positiony
//                 });
//             });
//             videoHtmlLst.push({
//                 id: element["ID"],
//                 infoCardInnerHtml: element["INFOCARDINNERHTML"],
//                 pointerInnerHtml: element["IMAGEINNERHTML"],
//                 pointerOpenURL: element["LINK"],
//                 pointerBackgroundColor: "rgb(" + element["FILLCOLORR"] + "," + element["FILLCOLORG"] + "," + element["FILLCOLORB"] + ")",
//                 pointerBorderColor: "rgb(" + element["BORDERCOLORR"] + "," + element["BORDERCOLORG"] + "," + element["BORDERCOLORB"] + ")",
//                 ballSize: element["POINTERSIZE"]

//             });


//         });

//         console.log("DRAWLST",drawList);
//         console.log("htmlLst",htmlLst);

//         console.log(id);   

// }
function setPointerInfo(x){
    videoDrawList=[];
    videoHtmlLst=[];
    const obj = JSON.parse(x);
    obj.forEach(element => {
        pointerList = JSON.parse(element["MYJSON"]);
        pointerList.forEach(lst=> {
            lst.forEach(e => {
                videoDrawList.push({
                    id: element["ID"],
                    time: e.time,
                    positionx: e.positionx,
                    positiony: e.positiony
                });
            });
        });
        videoHtmlLst.push({
            id: element["ID"],
            infoCardInnerHtml: element["INFOCARDINNERHTML"],
            pointerInnerHtml: element["IMAGEINNERHTML"],
            pointerOpenURL:element["LINK"],
            pointerBackgroundColor:"rgb(" + element["FILLCOLORR"] + "," + element["FILLCOLORG"] + "," + element["FILLCOLORB"] + ")",
            pointerBorderColor:"rgb(" + element["BORDERCOLORR"] + "," + element["BORDERCOLORG"] + "," + element["BORDERCOLORB"] + ")",
            ballSize:element["POINTERSIZE"]

        });


    });
    // videoDrawWidth = obj[0]["VIDEOWIDTH"];//885;
    // videoDrawHeight = obj[0]["VIDEOHEIGHT"];//614;

    // console.log("DRAWLST",drawList);
    // console.log("htmlLst",htmlLst);
    
    //console.log(id);
}