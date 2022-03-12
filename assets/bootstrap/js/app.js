$(function(){

    $('#gonder-btn').on('click', function(e){
        var formData = $('#iletisim-form').serialize();
        $.post('ajax.php', formData + '&tip=iletisim',function(response){
            if (response.hata){
                alert(response.hata);
            } else {
                alert(response.basarili);
            }
        }, 'json');
        e.preventDefault();
    });

});
$(function(){

    $(document.body).on('change', '#dizi', function(){
        var diziadi = $(this).val();
        if (diziadi){
            $.post('ajax.php', {'diziadi': diziadi}, function(response){
                $('#bolum').html(response).removeAttr('disabled');
            });
        } else {
            $('#bolum').html('<option>- Bölüm Seçin -</option>').attr('disabled', 'disabled');
        }
    });

});