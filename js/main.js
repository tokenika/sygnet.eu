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
		$(this).next('.tooltip-desc').stop().slideToggle(200);
	});

	$('.tooltip-name').on('mouseleave', function(){
		$(this).next('.tooltip-desc').stop().slideToggle(200);
	});

	$('#product').on('click', function(){
		if($(window).width() < 480){
			if($('.roadmap').hasClass('project')){
				$('.roadmap').removeClass('project');
				$('.roadmap').addClass('product');
			} else {
				$('.roadmap').addClass('product');
			}
		}
	});

	$('#project').on('click', function(){
		if($(window).width() < 480){
			if($('.roadmap').hasClass('product')){
				$('.roadmap').removeClass('product');
				$('.roadmap').addClass('project');
			} else {
				$('.roadmap').addClass('project');
			}
		}
	});

	function setCookie(key, value) {
		var expires = new Date();
		expires.setTime(expires.getTime() + (30 * 24 * 60 * 60 * 1000));
		document.cookie = key + '=' + value +';path=/'+ ';expires=' + expires.toUTCString();
	}

	(function($) {
	$.fn.cookiepolicy = function(options) {
		new jQuery.cookiepolicy($(this), options);
		return this;
	};

	$.cookiepolicy = function(options) {
			options = $.extend({
				cookie: 'cookiepolicyinfo',
				info: 'This site uses cookies to provide you with great user experience. By using Sygnet, you accept our use of cookies.',
				close: 'X'
			}, options || {});

		if($.cookie(options.cookie) != 'true') {
			var wrapper = $('<div/>').addClass('cookiepolicy d-flex justify-content-center').appendTo('body');
			$('<span/>').html(options.info).appendTo(wrapper);
			$('body').addClass('cookie');
			$('<a/>').addClass('cookie-btn').html(options.close).appendTo(wrapper)
				.on('click', function(e) {
					e.preventDefault();
					setCookie(options.cookie, true);
					$(this).parents('.cookiepolicy').slideUp(300);
					$('.cookiepolicy').removeClass('d-flex');
					$('body').removeClass('cookie');
				});
		}
	};
	})(jQuery);

	$.cookiepolicy();

});
