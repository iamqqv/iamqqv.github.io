$(document).ready(function () {
    $('.slider').not('.slick-initialized').slick({
        infinite: true,
        slidesToShow: 2,
        arrows: true,
        centerMode: true,
        variableWidth: true,
        dots: true,
    });
});


$('.masonry-grid').imagesLoaded(function() {
    $('.masonry-grid').masonry({
        itemSelector: '.masonry-grid-item',
    });
});

