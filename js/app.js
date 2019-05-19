$(document).ready(function () {
    $('.slider').not('.slick-initialized').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        centerMode: true,
        variableWidth: true,
        dots: true,
    });
});
