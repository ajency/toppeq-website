$(document).ready(function () {
    
    $('.mainSlider').slick({
        slidesToScroll: 1,
        arrows: false,
		dots: true,
		infinite: true,
		speed: 1000,
		fade: true,
		cssEase: 'linear',
		// autoplay: true,
		//swipe: false        
	});
	
	$(".mainSlider").on("beforeChange", function() {
		$('.item-text').removeClass('in-left');
		$('.item-count').removeClass('in-bottom');
		$('.item picture').removeClass('in');
		setTimeout(function() {
			$('.item-text').addClass('in-left');
			$('.item-count').addClass('in-bottom');
			$('.item picture').addClass('in');
		}, 10);
	});
	$(".homeSlider").on("beforeChange", function() {
		$('.block').removeClass('in-left');
		$('img').removeClass('in-right');
		setTimeout(function() {
			$('.block').addClass('in-left');
			$('img').addClass('in-right');
		}, 10);
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
	var elems, elemTop,elemRight,
	windowHeight

	var init = function() {
		elems = document.getElementsByClassName("hidden");
	 	elemTop = document.getElementsByClassName("hidden_block");
	 	elemRight = document.getElementsByClassName("hidden_right");
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
	for ( var i = 0; i < elemTop.length; i++ ) {
		var posFromTop = elemTop[i].getBoundingClientRect().top;
		if ( posFromTop - windowHeight <= 0) { 
			elemTop[i].className = elemTop[i].className.replace( "hidden_block", "in-top" );
		}
	} 
	for ( var i = 0; i < elemRight.length; i++ ) {
		var posFromTop = elemRight[i].getBoundingClientRect().top;
		if ( posFromTop - windowHeight <= 0) { 
			elemRight[i].className = elemRight[i].className.replace( "hidden_right", "in-right" );
		}
	}   
}

  return {
    init: init
  }
}

animateHTML().init();

	$('.homeSlider').slick({
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow:1,
		slidesToScroll: 1,
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


	$('.item-text a[href*="#"]').on('click', function(e) {
		e.preventDefault();	  
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top,
		  },
		  500,
		  'linear'
		)
	});

	window.onscroll = function() {stickyHeader()};
	var header = document.getElementById("site-header");
	var sticky = header.offsetTop;
	function stickyHeader() {
		if (window.pageYOffset > sticky) {
			header.classList.add("sticky");
		} else {
			header.classList.remove("sticky");
		}
	}

});
