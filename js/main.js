$(document).ready(function () {

    //Hypenator initalization
    Hyphenator.run();


    // Global scroll with subnavi
    var scrollTo = function(hash){

        if($('header').hasClass('affix')) {
            $('html,body').animate({
                scrollTop: $(hash).offset().top - 30
            }, 1500, 'easeInOutExpo');
        }
        else {
            $('html,body').animate({
                scrollTop: $(hash).offset().top - 100
            }, 1500, 'easeInOutExpo');
        }


    };

    $('.scroll-to').on('click', function (event) {
        event.preventDefault();
        var hash = $(this).attr('href');
        scrollTo(hash);
    });


    $('.navbar-toggle').on('click', function (e) {
        $(this).toggleClass('open');        
    });


});