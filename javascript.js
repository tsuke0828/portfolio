$('.imgslid').slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    dots: true,
    
});

lightbox.option({
    'wrapAround': true,
    'albumLabel': ' %1 / total %2 '
  })