$('.owl-carousel').owlCarousel({
    stagePadding: 192,
    loop:true,
    margin:48,
    nav:true,
    responsive:{
        0:{
            items:1,
            stagePadding: 0
        },
        600:{
            items:1,
            stagePadding: 0
        },
        1000:{
            items:1
        },
        1350:{
            items:1,
            stagePadding:250
        },
        1600:{
            items:1,
            stagePadding:350
        }, 
        1980:{
            items:1,
            stagePadding:450
        }               
    }
});
var owl=$(".owl-carousel");
owl.owlCarousel();
//$(".next") - находим нашу кнопку
$(".next").click(function(){
    owl.trigger("next.owl.carousel");
});
$(".prev").click(function(){
    owl.trigger("prev.owl.carousel");
});