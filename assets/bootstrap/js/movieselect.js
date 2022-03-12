$(function () {

    $(document.body).on('change', '#dizi', function () {
        var diziadi = $(this).val();
        if (diziadi) {
            $.post('libraries/islem.php', { 'diziadi': diziadi }, function (response) {
                $('#bolum').html(response).removeAttr('disabled');
            });
        } else {
            $('#bolum').html('<option> Bölüm Seçin </option>').attr('disabled', 'disabled');
        }
    });

});
function pointerchance(guid) {
    $("#divpointer").load("vendor/pointerlist.php?guid=" + guid);
    var bolum = $('#bolum').val();
    $('#bolumid').val(bolum);
}
function videoChange(id) {
    var videoSrc;
    $.ajax({
        type: "POST",
        url: "pointerListDetail.php",
        data: "bolum_link=" + id,
        success: function (x) {
            const obj1 = JSON.parse(x);
            videoSrc = obj1.bolum_link;
            mediaPlayer.src({
                type: "video/mp4",
                src: videoSrc
            });
            mediaPlayer.load();
            getVideoDuration();
            mediaPlayer.play();
        }
    });
}
$("#bolum").change(function () {
    videoChange(this.value);
});