$(document).ready(function() {

	AOS.init();

	$('a[href^="#"]').on('click', function(event) {
		var target = $(this.getAttribute('href'));
		if( target.length ) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top - 80
			}, 1000);
		}
	});

	$(window).resize(function() {
		var $window = $(window);
		distance = $('body').offset().top + 20;
		$window.scroll(function () {
			if ($window.scrollTop() >= distance) {
				$('header').addClass('mini');
			} else {
				$('header').removeClass('mini');
			}
		});
	}).resize();

	$('#toggler').on('click', function() {
			$(this).toggleClass('opened');
			$('#menu').slideToggle(300);
	});

	$('#menu a').on('click', function() {
		if($(window).width() < 991) {
			$('#toggler').toggleClass('opened');
			$('#menu').slideToggle(300);
		}
	});

	$('.tooltip-name').on('mouseenter', function(){
		$(this).next('.tooltip-desc').slideToggle(200);
	});

	$('.tooltip-name').on('mouseleave', function(){
		$(this).next('.tooltip-desc').slideToggle(200);
	});

});
