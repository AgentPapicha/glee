$(function () {

    $('.nav ul').on('click', function () {
        $('.menu__list-link').toggleClass('menu__list-link--active');
    });

    $('.top-slider__wrapper').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });

    var mixer = mixitup('.week-products__cards');


});