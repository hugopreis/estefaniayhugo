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
    
    $(".eh__btn").on('click', function(e){
       var lang = $(this).attr("lang");
        $.post("https://formspree.io/estefaniayhugo2017@gmail.com", $("#confirm_form").serialize(), function(){
           switch(lang){
               case "en":
                   alert("some english stuff");
                   break;
               case "es":
                   alert("some spanish stuff");
                   break;
               case "pt":
                alert("some portuguese stuff");
                   break;
           }
       }) 
    });


});