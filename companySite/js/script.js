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
    $('.hamburger').click(function() {
      $('.bar1, .bar2, .bar3').toggleClass('open');
    })
});