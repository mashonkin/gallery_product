/*галлерея продукта*/
$('.owl-carousel.big-gallery').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    mouseDrag: false,
    touchDrag: false,
    items: 1
});
$('.owl-carousel.small-gallery').owlCarousel({
    margin: 15,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 4
        },
        768: {
            items: 6
        }
    }
});
$(document).on('click', '.owl-carousel.small-gallery a', function () {
    $(this).closest('.small-gallery').find('.active').removeClass('active');
    var id = $(this).addClass('active').attr('data-index');
    $('.owl-carousel.big-gallery').trigger('to.owl.carousel',id);
    return false;
});

/*галлерея продукта*/