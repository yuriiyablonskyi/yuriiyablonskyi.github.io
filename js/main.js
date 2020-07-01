// header active effect
$( '.header__link' ).click(function() {

    $( ".header__link" ).removeClass('active_link');
    $(this).toggleClass('active_link');
});

// animation text
$(document).ready(function() {
    let $element = $('.about__anim-text');
    let phrases = [
        "Hey, I'm Yurii",
        'Web Deweloper',
        'Freelancer'
    ];
    let index = -1;
    (function loopAnimation() {
        index = (index + 1) % phrases.length;
        bubbleText({
            element: $element,
            newText: phrases[index],
            letterSpeed: 70,
            callback: function() {
                setTimeout(loopAnimation, 1000);
            },
        });
    })();
});

    // скрол по сайту
    $('[data-link]').on('click', function(event) {
        event.preventDefault();
        const elementId = $(this).data('link');
        const elementOffset = $(elementId).offset().top;
        $('html, body').animate({
                scrollTop: elementOffset - 70
        }, 700);
    });

// anim scroll 
    $(window).scroll(function() {
        const scroll = $(window).scrollTop(),
        dh = $(document).height(),
        wh = $(window).height(),
        scrollPercent = (scroll / (dh-wh)) * 100;
        $('.anim_scroll').css('height', scrollPercent + '%');
    });


// burger
    $('.burger').click(function() {
    $('.header__nav').toggleClass('header__nav-active');
    $(this).toggleClass('active-burger');
    });












