$(function () {


    $(".star").rateYo({
        rating: 3.6,
        starWidth: "11px",
        spacing: "8px",
        ratedFill: "#ffcc00",
      });


   $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    
    onStart: function (data) {
        $('.filter-price__from').text(data.from);
        $('.filter-price__to').text(data.to); 
    },

    onChange: function (data) {
        $('.filter-price__from').text(data.from);
        $('.filter-price__to').text(data.to);
    },
   });



    $('.category-input__chair').on('click', function () {
        $('.category-label__chair').toggleClass('filter-category__label--active');
    });

    $('.category-input__table').on('click', function () {
        $('.category-label__table').toggleClass('filter-category__label--active');
    });

    $('.category-input__lamp').on('click', function () {
        $('.category-label__lamp').toggleClass('filter-category__label--active');
    });

    $('.category-input__watch').on('click', function () {
        $('.category-label__watch').toggleClass('filter-category__label--active');
    });

    $('.category-input__clock').on('click', function () {
        $('.category-label__clock').toggleClass('filter-category__label--active');
    });


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
    var mixer = mixitup('.design__items');


});