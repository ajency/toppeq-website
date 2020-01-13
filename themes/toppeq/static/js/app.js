$(document).ready(function () {
    
    $('.mainSlider').slick({
        slidesToScroll: 1,
        arrows: false,
        dots: true        
    });
    
	$('.pageSlider').slick({
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow:1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: true,
		prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
		nextArrow:'<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
	});

    $(".hamburger-menu").click(function(e) {
		e.preventDefault();
        $(".site-menu").addClass("visible");
        $("body").addClass("overflow-hidden");
    });
    
    $(".menu-close-btn").click(function(e) {
		e.preventDefault();
        $(".site-menu").removeClass("visible");
        $("body").removeClass("overflow-hidden");
	});

});
