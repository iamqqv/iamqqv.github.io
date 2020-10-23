$(document).ready(function() {
    $('.slider').not('.slick-initialized').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false,
                    centerMode: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    centerMode: true,
                }
            }
        ]
    });
});


$('.masonry-grid').imagesLoaded(function() {
    $('.masonry-grid').masonry({
        itemSelector: '.masonry-grid-item',
    });
});

