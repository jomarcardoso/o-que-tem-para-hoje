// var request = new RequestService();
//
// function testRequestApi() {
//     request.get('/arezzo-api/function-test-api')
//     .done(function(data) {
//       console.log(data);
//     });
// }


var scrollerTopMargin = $("#fita").offset().top;
$(window).scroll(function(){
    var c = $(window).scrollTop();
    var d = $("#fita");
    if (c > scrollerTopMargin) {
        d.css({ position: "fixed", top: "0px", left: "0px", right: "0px" });
    }
    else if (c <= scrollerTopMargin)
    {
        d.css({ position: "relative", top: ""   });
    }
});


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
