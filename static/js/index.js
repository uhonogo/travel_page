$(document).ready( function() {
	
	'use-script';

	var paralax_block   = $('[data-parallax="parallax"]').find('img');
	var paralax_video_block   = $('[data="parallax_video"]').find('.header_data');
	
	var window_height   = $(window).height();

	// paralax
	function parallaxIt( p_block ) {
		var scrolling = $(this).scrollTop();

		if ( scrolling >= window_height ) {
			return p_block.css({ top:window_height/8 });
			
		} else {
			return p_block.css({ top:scrolling/8 });
			
		}
	}

	$(window).on('scroll', function () {

		if ( paralax_block.length !== 0 ) {
			parallaxIt( paralax_block );
		} else if ( paralax_video_block.length !== 0) {
			parallaxIt( paralax_video_block );
		} else return
	});

	// slider
	
	$('.some_slides').slick({
		arrows: false,
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
		  {
			breakpoint: 1320,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 3,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 980,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 630,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  infinite: true,
			  dots: true
			}
		  }
		]
	  });
	
});