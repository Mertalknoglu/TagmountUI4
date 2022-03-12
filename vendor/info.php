<div class="col-xs-3 col-md-3 col-lg-3 col-xl-3">
    <a>
        <div style="margin-bottom:10px;"><span><b>Info Settings </b></span> </div>
        <label class="switch">
            <input id="infoSettingsCheckbox" type="checkbox">
            <span class="slider round"></span>
    </a>
</div>
<div id="infoSettingsDiv" style="display:none;">
    <hr class="hr-3" style="margin-bottom:15px;">
    <div class="d-flex justify-content-between flex-div-4">
        <div class="col-5 div-col-1">
            <div class="d-flex">*
                <b><input type="text" name="info" id="info" style="border:none; background:transparent;" value="" placeholder="Info Text"></b>
            </div>
        </div>
        <div id="addimg" class="col-5 div-col-2"><b><span id="infoImage">Add Image</span><input type="file" id="AddImageInfo" name="AddImageInfo" accept="image/*" style="display:none" value=""></b></div>
        <div class="img-div-1"><img src="assets/img/trash.png" id="infoImageDel" class="img-style-2" alt=""></div>
        <input type="hidden" name="imageHiddenData" id="imageHiddenData" style="border:none;" value="">
    </div>
    <div class="d-flex justify-content-between flex-div-5">
        <div class="col-5 div-col-1">
            <div class="d-flex">
                *</b> <input type="text" class="buttonLink" style="border:none; background:transparent;" id="Links" value="" name="Link" placeholder="Link">
                <div class="info-mobile" value="www.google.com" id="addLink" name="addLink"></div>
            </div>
        </div>
        <div id="addimg" class="col-5 div-col-2"><b><span id="logoImage">Add Image</span><input type="text" id="AddImageLogo" name="AddImageLogo" accept="image/*" style="display:none" value=""></b></div>
        <div class="img-div-1"><img src="assets/img/trash.png" id="logoImageDel" class="img-style-2" alt=""></div>
    </div>
</div>