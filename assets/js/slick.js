var nextArrow = $('.slick-next');
var prevArrow = $('.slick-prev');




$(document).ready (function() {
    $('.slick__container').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        nextArrow: nextArrow,
        prevArrow: prevArrow,
        autoplay: true,
        autoplaySpeed: 3000,
    });
});