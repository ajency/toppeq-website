$(document).ready(function () {
    
    $('.mainSlider').slick({
        slidesToScroll: 1,
        arrows: false,
        dots: true        
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
