$(function(){
    

     $('.wq-galeria_01').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: 'a.wq-popup_01', // the selector for gallery item
            type: 'inline',
            gallery: {
              enabled:true
            }
        });
    });

    $('.wq-galeria_02').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: 'a.wq-popup_02', // the selector for gallery item
            type: 'inline',
            gallery: {
              enabled:true
            }
        });
    });

});