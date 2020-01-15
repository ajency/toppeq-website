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
		slidesToShow:3,
		slidesToScroll: 3,
		arrows: true,
		prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
		nextArrow:'<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
		responsive: [
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});
	var animateHTML = function() {
	var elems,
	windowHeight

	var init = function() {
		elems = document.getElementsByClassName("hidden");
		windowHeight = window.innerHeight;
		_addEventHandlers();
	}

	var _addEventHandlers = function() {
		window.addEventListener("scroll", _checkPosition);
		window.addEventListener("resize", init)
	}
	var _checkPosition = function() {
		for ( var i = 0; i < elems.length; i++ ) {
		var posFromTop = elems[i].getBoundingClientRect().top;
		if ( posFromTop - windowHeight <= 0) { 
			elems[i].className = elems[i].className.replace( "hidden", "in-left" );
		}
	}    
}

  return {
    init: init
  }
}

animateHTML().init();

});
