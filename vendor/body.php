<body class="html_class">
    <section class="container-fluid overflow-hidden fluid-position-1">
        <script type="text/javascript">
            function kayitekle() {

                var deger = $("#kayit").serialize();

                $.ajax({
                    type: "POST",
                    data: deger,
                    url: "veriekle.php",
                    success: function(sonuc) {
                        if ($.trim(sonuc) == "infoRequired") {
                            dangerMode:true,
                            sweetAlert('Tagmount', 'Lütfen Info Text giriniz!', 'warning');
                        } else if ($.trim(sonuc) == "linkRequired") {
                            sweetAlert('Tagmount', 'Lütfen Link giriniz!', 'error');
                        } else if ($.trim(sonuc) == "drawRequired") {
                            sweetAlert('Tagmount', 'Lütfen Çizim yapınız! ', 'error');
                        } else if ($.trim(sonuc) == "tagmountError") {
                            sweetAlert('Tagmount', 'Bilgileri eksizsiz doldurunuz', 'error');
                        } else if ($.trim(sonuc) == "ok") {
                            sweetAlert('Tagmount', 'Pointer Kaydedildi', 'success')
                                .then((value) => {
                                    window.location.href = "home.php";
                                })
                        } else if ($.trim(sonuc) == "bolumRequired") {
                            sweetAlert('Tagmount', 'Lütfen Bölümü Seçiniz.', 'info');
                        }
                    }
                });
            }
           
        </script>
        <form action="" id="kayit" method="POST" onsubmit="return false;" autocomplete="off">
            <input type="hidden" id="phppointerList" name="phppointerList" value="">

            <?php include 'videoplayer.php' ?>
            <!---video Settings -->
            <hr class="hr">
            <div class="d-flex">
                <?php include 'videosetting.php' ?>
            </div>
            <!---info -->
            <hr class="hr">
            <div style="margin-left:5px; margin-right:0px;">
                <?php include 'info.php' ?>
            </div>
            <!---pointer Settings -->
            <hr class="hr-3" style="margin-bottom:15px;">
            <?php include 'pointer.php' ?>
            <!---info Card Settings -->
            <hr class="hr-3" style="margin-bottom:15px;">
            <?php include 'infocardsetting.php' ?>
            </div>

            <div class="col-xs-6 col-md-6 col-lg-6 col-xl-6" style="padding-right:50px;">
                <?php include 'movieselection.php' ?>
                <div id="divpointer"> </div>
                <?php //include 'pointerlist.php' 
                ?>
                <div id="infoDivCard" style="padding:20px;">
                    <?php include 'infocard.php' ?>
                </div>

                <div class="col-xs-12 col-md-12 col-lg-12 col-xl-6">
                    <div class="row">
                        <hr class="hr">
                        <div class="btn ">
                            <input class="text-light" type="submit" onclick="kayitekle();" value="Save Pointer " style=" width:100%; background-color: #222f3e; border:none;">
                            <!-- onclick="addlinkf()"> -->
                        </div>
                    </div>
                </div>

                <input type="hidden" id="guid" name="guid" value="">

        </form>
    </section>
    <!-- <div id="pointerInfoCardParentDiv" style="display:table;">
        <div id="pointer" style="display: none; position:absolute;  border-radius:300vw; background:red; height:20; width:+20; border:1px solid; border-color:blue; z-index:10" ></div>
        <div id="infoCardDiv"></div>
    </div> -->
    <script src="assets/bootstrap/js/bootstrap.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/videojs-youtube/2.6.1/Youtube.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/videojs-markers/0.7.0/videojs-markers.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"> </script>
    <script src="assets/VIDEO-JS/canvas.js"></script>
    <script src="assets/VIDEO-JS/pointer.js"></script>
    <script src="assets/VIDEO-JS/videoPlayer.js"></script>
    <script src="assets/VIDEO-JS/draw.js"></script>
    <script src="assets/VIDEO-JS/pointerPlay.js"></script>
    <script src="assets/VIDEO-JS/onShowPointerList.js"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <!-- <script src="assets/VIDEO-JS/videoTimer.js"></script> -->
    <script src="assets/VIDEO-JS/initData.js"></script>
    <script src="assets/UI-JS/videoSpeed.js"></script>
    <script src="assets/UI-JS/guid.js"></script>
    <script src="assets/UI-JS/info.js"></script>
    <script src="assets/UI-JS/pointerSettings.js"></script>
    <script src="assets/UI-JS/infoCardSettings.js"></script>
    <script src="assets/bootstrap/js/movieselect.js"></script>

    <script>
        $(document).ready(function() {

            videoDrawWidth = $("#my_video").width() + 10;
            videoDrawHeight = $("#my_video").height() + 10;
            console.log(videoDrawWidth);
            console.log(videoDrawHeight);
            canvas.init('#videoDiv', '#my_video');
            pointer.init('#my_video');
            // videoTimer.init("my_video");
            videoPlayer.init('my_video');
            draw.init();
            //getdata.init("8b87a7f4-6e87-4d74-b6ac-669c09660a6c");
            pointerPlay.init('#my_video');
            guid();


        });
        $(window).resize(function(event) {
            canvas.canvasResize('#my_video');           
            timeSliderSize();
        });
        (function() {
            window.hola_player();
        })();
    </script>







</body>

</html>