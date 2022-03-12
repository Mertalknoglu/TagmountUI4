var pointerId="pointer";
var pointerObj="#"+pointerId;
var infoCardId="infoCard";
var infoCardObj="#"+infoCardId;
var pointer = function () {
    var handlePointer = function (videoDiv) {
        createPointer(videoDiv);
    }
    return {
        init: function (videoDiv) {

            handlePointer(videoDiv);
        }
    };
}();
var createPointer= function (videoDiv) {
    $(videoDiv).append(
        $('<div>').prop({
            id: 'pointerInfoCardParentDiv',
        })
    );
    $("#pointerInfoCardParentDiv").append(
        $('<div>').prop({
            id: pointerId,
            className: 'pointerClass'
        })
    );
    $("#pointerInfoCardParentDiv").append(
        $('<div>').prop({
            id: infoCardId,
            className: 'infocardClass'
        })
    );
    $(".infocardClass").css({"display": "none", "height":"20" , "width":"20" });
    $(".pointerClass").css({"display": "none", "position":"absolute", "border-radius":"300vw", "background":"red",  "height":"20" , "width":"20" ,"border":"1px solid", "border-color":"blue", "z-index":"2147483647"});
}


