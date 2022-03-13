<div class="div-position-1">
    <span><b>Pointer List</b></span>
</div>
<hr class="hr-1">
<div class="d-flex justify-content-between flex-div-3" style="height: 240px; overflow: auto">
    <table class="table">
        <thead class="thead-light">
            <tr>
                <th scope="col">GUID</th>
                <th scope="col">Info Text </th>
                <th scope="col"></th>
                <th scope="col">Time Rate</th>
                <th scope="col"> Links</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <?php

        include_once("baglan.php");
        if (isset($_GET["guid"])) {
            $id = $_GET["guid"];
            $query = $db->query("SELECT * FROM deneme WHERE BOLUM_ID = '{$id}'"); //Tüm verileri getir
            //$query->execute();
            $query->execute(array(":id" => $id));
            $liste = $query->fetchAll(PDO::FETCH_OBJ);
        }
        foreach ($liste as $list) { ?>
            <tbody>

                <tr>
                    <td><?= $list->GUID ?></td>

                    <td><?= $list->INFO ?></td>
                    <td><img src="assets/img/right-arrow.png" class="img-style-1" alt=""></td>
                    <td><?php $jsonstr = $list->MYJSON;
                        $json = json_decode($jsonstr, true);
                        if ($json != null) {
                            $len = count($json);
                            if ($len > 0) {
                                $bas = number_format($json[0][0]["time"], 3, '.', '');
                                $lendrw = count($json[$len-1]);
                                $bit = number_format($json[$len-1][$lendrw - 1]["time"], 3, '.', '');
                                echo $bas . "-" . $bit;
                            }
                        }
                        ?></td>
                    <td><?= $list->LINK ?></td>
                    <td rowspan="4">
                        <div class="btn-group">
                            <img src="assets/img/forward-arrow.png" onclick="onShowPointerList('<?= $list->ID ?>')" class="img-style-1" alt="">

                        </div>
                        <img src="assets/img/trash.png" silid="<?= $list->ID ?>" class="img-style-1 sil" alt=""> </a>
                    </td>
                    </td>
                </tr>
            </tbody>
        <?php } ?>
    </table>
</div>
<div class="row">
    <hr class="hr">
    <div class="btn ">
        <?php
        if (isset($list->BOLUM_ID)) { ?>
            <input class="text-light" type="button" onclick="onShowPointer('<?= $list->BOLUM_ID ?>')" value="Show All Pointer" style=" width:100%; background-color: #222f3e; border:none;">
            <!-- onclick="addlinkf()"> -->
        <?php } ?>
    </div>
</div>
<script>
    // $(document).ready(function() {
    //     $(".sil").click(function() {
    //         var silinecekid = $(this).attr('silid');
    //         var silinecektablo = $(this).parents('tr');
    //         $.post("sil.php", {
    //             id: silinecekid
    //         }, function(gelencevap) {
    //             if (gelencevap == "sildim") {
    //                 silinecektablo.hide(400);
    //             } else {

    //             }
    //         })
    //     })
    // })

    $(document).on('click', '.sil', function() {
        swal({
                title: "Tagmount",
                text: "Pointerı silmek istediğinize emin misiniz?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    var silinecekid = $(this).attr('silid');
                    var silinecektablo = $(this).parents('tr');
                    $.post("sil.php", {
                        id: silinecekid
                    }, function(gelencevap) {
                        if (gelencevap == "sildim") {
                            silinecektablo.hide(400);
                        } else {

                        }
                    })
                    swal("Silme işlemi başarıyla gerçekleşti.", {
                        icon: "success",
                    });
                } else {
                    swal("Silme işlemi iptal edildi.", {
                        icon: "error",
                    });
                }
            });

    });
</script>