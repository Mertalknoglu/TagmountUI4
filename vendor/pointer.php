<span class="span-1">
    <div>
        <div style="margin-top:10px; margin-bottom:10px"><span><b>Pointer Settings</b></span> </div>
        <label class="switch">
            <input id="pointerSettingsCheckbox" type="checkbox"> </input>
            <span class="slider round"></span>
    </div>
    </label>
</span>
<div id="pointerSettingsDiv" style="display:none;">
    <hr class="hr-3" style="margin-bottom:15px;">
    <span class="span-1">
        <div class="row">
            <span class="span-5"><b>Image</b></span>
            <input type="hidden" id="imageinnerhtml" name="imageinnerhtml" value="">
        </div>
    </span>
    <div class="d-flex flex-4">
        <div class="div-position-2">
            <img id="pointerIcon" src="assets/img/logo.png" class="img-box-1" alt="">
        </div>
        <div id="addimg" class="col-5 div-col-3 ">
            <b>
                <span id="pointerIconImage">Add Icon Image</span>
                <input type="file" id="addPointerIconImage" name="addPointerIconImage" accept="image/*" style="display:none" value="">
                <input type="hidden" id="imageIconData" name="imageIconData" value="">
            </b>
        </div>
        <div class="img-div-2">
            <img src="assets/img/trash.png" id="pointerIconImageDel" class="img-style-2" alt="">
        </div>
    </div>
    <div class="col-12 d-block d-xxl-flex" style="margin-top:15px;">
        <div class="row col-xl-5 col-sm-12 col-xs-12">
            <span class="d-block blocktext1 mb-1">Size</span>
            <span class="d-flex flex-check-1">
                <div class="form-check  form-check-2">
                    <input class="form-check-input " type="radio" class="flexRadioDefault" name="pointerSize" id="flexRadioDefault1" value="10">
                    <label class="form-check-label label-font-1 style-2" for="flexRadioDefault1">
                        10 x 10 px
                    </label>
                </div>
                <div class="form-check  form-check-2">
                    <input class="form-check-input " type="radio" class="flexRadioDefault" name="pointerSize" id="flexRadioDefault2" value="20" checked>
                    <label class="form-check-label label-font-1 style-2" for="flexRadioDefault1">
                        20 x 20 px
                    </label>
                </div>

                <div class="form-check  form-check-2">
                    <input class="form-check-input " type="radio" class="flexRadioDefault" name="pointerSize" id="flexRadioDefault3" value="30">
                    <label class="form-check-label label-font-1 style-2" for="flexRadioDefault1">
                        30 x 30 px
                    </label>
                </div>
            </span>
            <span class="d-flex flex-check-1">
                <div class="form-check  form-check-2">
                    <input class="form-check-input me-2" type="radio" class="flexRadioDefault" name="pointerSize" id="flexRadioDefault4" value="40">
                    <label class="form-check-label label-font-1 style-1" for="flexRadioDefault1">
                        40 x 40 px
                    </label>
                </div>
                <div class="form-check  form-check-2">
                    <input class="form-check-input me-2" type="radio" class="flexRadioDefault" name="pointerSize" id="flexRadioDefault5" value="50">
                    <label class="form-check-label label-font-1 style-1" for="flexRadioDefault1">
                        50 x 50 px
                    </label>
                </div>

                <div class="form-check  form-check-2">
                    <input class="form-check-input me-2" type="radio" class="flexRadioDefault" name="pointerSize" id="flexRadioDefault6" value="60">
                    <label class="form-check-label label-font-1 style-1" for="flexRadioDefault1">
                        60 x 60 px
                    </label>
                </div>
            </span>
        </div>

        <div class="row " style="padding-right:5px;">
            <span class="d-block  blocktext1 mb-3">Border Color</span>
            <div class="d-flex me-4">
                <div class="d-flex me-2">
                    <span class="span-text-1">R</span>
                    <span class="span-br-R" style="padding-top:30%; padding-left: 10%; padding-right: 0%;"><input class="form-check-input me-2" type="text" name="borderR" id="borderR" value="0" min="0" max="255" style="width: 35px; height: 20px;  margin:0px;"></span>
                </div>
                <div class="d-flex me-2">
                    <span class="span-text-1">G</span>
                    <span class="span-br-G" style="padding-top:30%; padding-left: 10%; padding-right: 0%;"><input class="form-check-input me-2" type="text" name="borderG" id="borderG" value="0" min="0" max="255" style="width: 35px; height: 20px;  margin:0px;"></span>
                </div>
                <div class="d-flex me-2">
                    <span class="span-text-1">B</span>
                    <span class="span-br-B" style="padding-top:30%; padding-left: 10%; padding-right: 0%;"><input class="form-check-input me-2 " type="text" name="borderB" id="borderB" value="255" min="0" max="255" style="width: 35px; height: 20px;  margin:0px;"></span>
                    <input class="form-check-input me-2" type="hidden" name="borderInput" id="borderInput" value="">
                </div>
            </div>
        </div>
        <div class="row " style="padding-right:5px;">
            <span class="d-block  blocktext1 mb-3">Fill Color</span>
            <div class="d-flex me-4">
                <div class="d-flex me-2">
                    <span class="span-text-1">R</span>
                    <span class="span-R" style="padding-top:30%; padding-left: 10%; padding-right: 0%;"><input class="form-check-input me-2" type="text" name="fillR" id="fillR" value="255" min="0" max="255" style="width: 35px; height: 20px;  margin:0px;"></span>
                </div>
                <div class="d-flex me-2">
                    <span class="span-text-1">G</span>
                    <span class="span-G" style="padding-top:30%; padding-left: 10%; padding-right: 0%;"><input class="form-check-input me-2" type="text" name="fillG" id="fillG" value="0" min="0" max="255" style="width: 35px; height: 20px;  margin:0px;"></span>
                </div>
                <div class="d-flex me-2">
                    <span class="span-text-1">B</span>
                    <span class=" span-B" style="padding-top:30%; padding-left: 10%; padding-right: 0%;"><input class="form-check-input me-2" type="text" name="fillB" id="fillB" value="0" min="0" max="255" style="width: 35px; height: 20px;  margin:0px;"></span>
                    <input class="form-check-input me-2" type="hidden" name="fillInput" id="fillInput" value="">
                </div>
            </div>
        </div>
    </div>
</div>