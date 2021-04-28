




// ///////////////////////////////////////////////////////////


var owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:2500,
    smartSpeed:1000,
    autoplayHoverPause:true,

    responsive : {
    // breakpoint from 0 up
    320 : {
        items:2,
    },
   
    370 : {
        items:3,
    },
   
    576 : {
        items:4,
    },
}




});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[3000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})



// /./////////////////////////////////////////////////////

