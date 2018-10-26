  $( "body" ).prepend( '<div class="loader-cont"><div class="loader"><div class="loader__bar"></div><div class="loader__bar"></div><div class="loader__bar"></div><div class="loader__bar"></div><div class="loader__bar"></div><div class="loader__ball"></div></div></div>' );

$(window).on('load', function() { // makes sure the whole site is loaded 
    
    $('.loader__bar').fadeOut(); // will first fade out the loading animation 
    $('.loader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('.loader-cont').fadeOut();
    $('body').delay(350).css({'overflow-y':'visible'});

});		