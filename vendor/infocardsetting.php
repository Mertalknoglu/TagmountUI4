<div class="row mb-3">
    <div style="margin-top:10px; margin-bottom:10px"><span><b>Info Card Settings</b></span> </div>
    <span class="mobile-mt1">
        <label class="switch">
            <input id="infoCardSettingsCheckbox" type="checkbox"></input>
            <span class="slider round"></span>
        </label>
    </span>
</div>
<div id="infoCardSettingsDiv" style="display: none;">
    <hr class="hr-3" style="margin-bottom:15px;">
    <div class="col-6 col-lg-12 d-xxl-flex d-block p-1">
        <div class="row ">
            <span class="d-block  blocktext1 mb-3">Background Color</span>
            <div class="d-flex me-5">
                <div class="d-flex me-3">
                    <span class="span-text-1">R</span>
                    <span class="span-bg-R" style="padding-top:30%; padding-left: 10%; padding-right: 0%;"><input class="form-check-input me-2" type="text" name="backR" id="backR" value="255" style="width: 35px; height: 20px;  margin:0px;"></span>
                </div>
                <div class="d-flex me-3">
                    <span class="span-text-1">G</span>
                    <span class="span-bg-G" " style=" padding-top:30%; padding-left: 10%; padding-right: 0%;"><input class="form-check-input me-2" type="text" name="backG" id="backG" value="255" style="width: 35px; height: 20px;  margin:0px;"></span>
                </div>
                <div class="d-flex">
                    <span class="span-text-1">B</span>
                    <span class="span-bg-B" style="padding-top:30%; padding-left: 10%; padding-right: 0%;"><input class="form-check-input me-2" type="text" name="backB" id="backB" value="255" style="width: 35px; height: 20px;  margin:0px;"></span>
                    <input class="form-check-input me-2" type="hidden" name="backgroundInput" id="backgroundInput" value="white">
                </div>
            </div>
        </div>
        <div class="row row-grind-position-1">
            <span class="d-block p-0 blocktext1 mb-3">Background Opacity</span>
            <span class="shadow shadow-boxes-1" id="slidebar">100%</span>
            <input type="range" name="slidebarinput" id="slidebarinput" min="1" max="100" value="100">
            <input type="hidden" name="sliderinput" id="sliderinput" min="1" max="100" value="1.0">
            </span>
        </div>
        <div class="row ">
            <span class="d-block mb-3 blocktext1">Text Color</span>
            <div class="d-flex ">
                <div class="d-flex me-3">
                    <span class="span-text-1">R</span>
                    <span class="span-tx-R" style="padding-top:30%; padding-left: 10%; padding-right: 0%;"><input class="form-check-input me-2" type="text" name="textR" id="textR" value="0" style="width: 35px; height: 20px;  margin:0px;"></span>
                </div>
                <div class="d-flex me-3">
                    <span class="span-text-1">G</span>
                    <span class="span-tx-G" style="padding-top:30%; padding-left: 10%; padding-right: 0%;"><input class="form-check-input me-2" type="text" name="textG" id="textG" value="0" style="width: 35px; height: 20px;  margin:0px;"></span>
                </div>
                <div class="d-flex">
                    <span class="span-text-1">B</span>
                    <span class="span-tx-B" style="padding-top:30%; padding-left: 10%; padding-right: 0%;"><input class="form-check-input me-2" type="text" name="textB" id="textB" value="0" style="width: 35px; height: 20px;  margin:0px;"></span>
                    <input class="form-check-input me-2" type="hidden" name="textInput" id="textInput" value="black">
                </div>
            </div>
        </div>
    </div>
</div>