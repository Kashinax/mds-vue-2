$(document).ready(function () {
    $('header .bouton-open').click(function() {
        $('.menu-mobile').addClass('active');
    });

    $('header .bouton-close').click(function () {
        $('.menu-mobile').removeClass('active');
    });
});