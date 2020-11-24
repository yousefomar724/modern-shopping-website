// Search Bar
$(document).on('click', '.search', function(){
    $('.search-bar').addClass('search-bar-active')
});

$(document).on('click', '.search__cancel', function(){
    $('.search-bar').removeClass('search-bar-active')
});

// Login & SignUp
$(document).on('click', '.user, .already-account', function(){
    $('.form').addClass('login-active').removeClass('sign-up-active')
});

$(document).on('click', '.sign-up-btn', function(){
    $('.form').addClass('sign-up-active').removeClass('login-active')
});

$(document).on('click', '.form__cancel', function(){
    $('.form').removeClass('login-active sign-up-active')
});

// Full Slider
$(document).ready(function(){
    $('#adaptive').lightSlider({
        adaptiveHeight: true,
        auto: true,
        item: 1,
        slideMargin: 0,
        loop: true
    });
});

// Featured Slider
$(document).ready(function(){
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function(){
            $('#autoWidth').removeClass('cs-hidden');
        }
    });
});

// For Fix Menu When Scrolling
$(window).scroll(function(){
    if($(document).scrollTop() > 50){
        $('.menu-bar').addClass('fix-nav');
    } else {
        $('.menu-bar').removeClass('fix-nav');
    }
});

// Menu Toggle
$(document).ready(function(){
    $('.toggle').click(function(){
        $('.toggle').toggleClass('active');

        $('.menu-bar').toggleClass('active');
    });
});
