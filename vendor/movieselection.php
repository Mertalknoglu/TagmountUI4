<div class="row">
    <span class="span-4"><b>Movie Select</b></span>
</div>
<hr class="mt-0">
<div class="d-flex  flex-div-2">
    <select name="dizi" id="dizi" class="form-select select-1" aria-label="Default select example">
        <option value="">Dizi Seçin </option>
        <?php foreach ($diziler as $dizi) : ?>
            <option value="<?= $dizi['video_dizi'] ?>"><?= $dizi['video_dizi'] ?></option>
        <?php endforeach; ?>
    </select>
    <select name="bolum" id="bolum" class="form-select select-2" aria-label="Default select example" onchange="pointerchance(this.value)" disabled>
        <option  value="">Bölüm Seçin</option>
    </select>
</div>