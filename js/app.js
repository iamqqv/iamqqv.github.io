$(document).ready(function () {
    $('.slider').not('.slick-initialized').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: true,
        centerMode: true,
        variableWidth: true,
        dots: true,
    });
});

// vanilla JS
// init with element
// var grid = document.querySelector('.grid');
// var msnry = new Masonry( grid, {
//     itemSelector: '.grid-item',
//     columnWidth: 200
// });

$('.masonry-grid').masonry({
    itemSelector: '.masonry-grid-item',
});
