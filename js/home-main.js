$(function() {
    showMasks();
    slider();
    myCountdown();
    circleDraw('#circle-1', 312000);
    circleDraw('#circle-2', 108000);
    circleDraw('#circle-3', 60000);
    circleDraw('#circle-4', 312000);
    circleDraw('#circle-5', 108000);
    circleDraw('#circle-6', 60000);
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


Date.prototype.addHours = function(h) {
    this.setHours(this.getHours() + h);
    return this;
}

function myCountdown() {

    var countDownDate = new Date().addHours(3).getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("js-hours").innerHTML = hours;
        document.getElementById("js-minutes").innerHTML = minutes;
        document.getElementById("js-seconds").innerHTML = seconds;

        if ($('#js-seconds').text() == 0) {
            $('#js-seconds').closest('.circle-holder').find('.loader-spinner').addClass('full');
        } else {
            $('#js-seconds').closest('.circle-holder').find('.loader-spinner').removeClass('full');
        }

        // If the count down is over, write some text 

    }, 1000);


}

function circleDraw(element, duration) {
    var bar = new ProgressBar.Circle(element, {
        strokeWidth: 8,
        easing: 'easeInOut',
        duration: duration,
        color: '#ff0000',
        trailColor: '#eee',
        trailWidth: 8,
        svgStyle: null
    });

    bar.animate(1.0); // Number from 0.0 to 1.0
}