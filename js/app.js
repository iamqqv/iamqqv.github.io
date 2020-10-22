$(document).ready(function () {
    $('.slider').not('.slick-initialized').slick({
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        dots: true,
        arrows: true,
        // prevArrow: "<img class='prevArrow' src='../assets/img/slider-arrow.jpg'>",
        // nextArrow: "<img class='nextArrow' src='../assets/img/slider-arrow.jpg'>"
    });
});


$('.masonry-grid').imagesLoaded(function() {
    $('.masonry-grid').masonry({
        itemSelector: '.masonry-grid-item',
    });
});

