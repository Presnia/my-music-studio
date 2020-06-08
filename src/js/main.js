$('.js-close-cookies').click(function() {
    $('.js-overlay-cookies').fadeOut();
});
$(window).on('load', function () {
    setTimeout(function(){
        if($('.js-overlay-cookies').hasClass('disabled')) {
            return false;
        }  else {
          $('.js-overlay-cookies').fadeIn();
        }
    }, 5000);
});