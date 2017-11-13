// var request = new RequestService();
//
// function testRequestApi() {
//     request.get('/arezzo-api/function-test-api')
//     .done(function(data) {
//       console.log(data);
//     });
// }




$(function(){

  scroller()

  carrossel()

})

function carrossel() {
  $('.header__banner__carousel').owlCarousel({
    autoplay: true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:1
      }
    }
  })

  $('.prateleira__carousel').owlCarousel({
    autoplay: true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:4
      },
      1000:{
        items:6
      }
    }
  })
}

function scroller() {
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
}
