$(function() {
    showMasks();
    slider();
});

function showMasks() {
    $('.js-phone').mask('(000) 000 0000');
}


function slider() {
    var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
}