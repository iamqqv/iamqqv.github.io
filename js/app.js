$(document).ready(function () {
    $('.slider').not('.slick-initialized').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        dots: true,
        arrows: true,
    });
});


$('.masonry-grid').imagesLoaded(function() {
    $('.masonry-grid').masonry({
        itemSelector: '.masonry-grid-item',
    });
});

