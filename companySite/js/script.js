// Swiper
var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});

// Wow
new WOW().init();

// drawer
$(document).ready(function() {
    $('.drawer').drawer();
});

$(function() {
    $('.hamburger, .drawer-overlay, .drawer-menu-item').click(function() {
      $('.bar1, .bar2, .bar3, .header, .mainvisual').toggleClass('open');
    })
});

// floating button
var syncerTimeout = null;
$( function() {
	$(window).scroll( function() {
		if(syncerTimeout == null) {
			syncerTimeout = setTimeout(function() {
				var element = $('.back-to-top');
				var visible = element.is(':visible');
				var now = $(window).scrollTop();
				if(now > 500) {
					if(!visible) {
						element.fadeIn('slow');
					}
				}
				else if(visible) {
					element.fadeOut('slow');
				}
				syncerTimeout = null;
			} , 1000);
		}
	});
});

// Smooth Scroll
$(function(){
    $('a[href^="#"]').click(function(){
        var adjust = -30;
        var speed = 400;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top + adjust;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
});

//navbar border added by clicking
$('.nav-items a').click(function(){
    $('.nav-items a').removeClass('clicked');
    $(this).addClass('clicked');
});

// accordion
$(function(){
	$('.ac').click(function(){
        $(this).next('ul').slideToggle();
        $(this).find('.line2').toggleClass('open');
	});
});

// modal
$(function(){
    $('.js-modal-open').on('click',function(){
        $('.js-modal').fadeIn();
        return false;
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        return false;
    });
});