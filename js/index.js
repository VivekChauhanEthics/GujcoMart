
$('.owlCarousel').owlCarousel({
    loop:true,
    margin:30,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:4,
            nav:true
        },
        1000:{
            items:6,
            nav:true,
            loop:true
        }
    }
})