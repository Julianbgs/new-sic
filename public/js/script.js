$(document).ready(function () {
    /*profile blocks*/
    $(document).on('click', '.profile__wrapper--element', function (event) {
        event.preventDefault();
        if( $(this).hasClass('js-active-element') ) {
            $(this).removeClass('js-active-element');
        } else {
            $('.profile__wrapper--element').removeClass('js-active-element');
            $(this).addClass('js-active-element');
        }
    });
    /*close*/

});

