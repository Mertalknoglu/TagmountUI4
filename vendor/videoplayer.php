<div class="row">
    <div class="col-xs-6 col-md-6 col-lg-6 col-xl-6">
        <!---video -->
        <div id="component">
            <div id="allTopComponent">
                <div id="videoDiv" style="display:flex ;">
                    <!-- <video id="my_video" width="718" height="416" class="video-js my_video" data-setup='{ "controls": true, "autoplay": false, "preload": "auto" }'>
                                    <source src="https://www.youtube.com/watch?v=6WmbTTeIQNg" type="video/youtube" />
                                </video> -->
                    <video id="my_video" class="video-js vjs-default-skin" width="640" height="360" controls>
                        <source src="https://keka.hastagyazilim.com/video/144.mp4" type="video/mp4">
                    </video>
                    <!-- <div id="canvasContainer" class="my_video-dimensions">
                                    <canvas id="canvasVideo" class="my_video-dimensions"></canvas>
                                    <canvas id="canvasDraw" class="my_video-dimensions"></canvas>
                                </div> -->
                </div>
            </div>
            <div id="allBottomComponent" style="margin-left:0px;">
                <div class="row">
                    <div id="playOrPause" class="col-xs-3 col-md-3 col-lg-3 col-xl-3" style="width:165px;">
                        <button type="button" id="mediaPlay" class="video-play-button _play"> </button>
                        <button type="button" id="mediaPause" class="video-play-button _pause"></button>
                        <button type="button" id="backward" class="video-play-button _backward" style="padding-top:2px;"> </button>
                        <button type="button" id="forward" class="video-play-button _forward" style="padding-top:2px;"></button>
                        <!-- <button type="button" id="clearDraw" class="video-play-button _forward" style="padding-top:2px;"></button> -->


                    </div>

                    <div id="timeSliderDiv" class="col-xs-6 col-md-6 col-lg-6 col-xl-6" style=" margin-top:20px;">
                        <div class="row">
                            <div id="timePickerDiv" class="col-xs-2 col-md-2 col-lg-2 col-xl-2" style="margin-top:-2px;">
                                <time id="timePicker"><b>00:00:00</b></time>
                            </div>
                            <div class="col-xs-10 col-md-10 col-lg-10 col-xl-10" style="margin-top:0px;">
                                <input id="timeSlider" type="range" min="0" max="100" value="0"></input>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>