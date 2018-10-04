$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:false,
        navigation:true,
        navigationText:["<img src='images/arrow-left.png'>","<img src='images/arrow-right.png'>"],
        autoPlay:true
    });
});