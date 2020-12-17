$(document).ready(function () {
  var trendsItem = $(".trends__item")
  var trendsCards = $(".trends__cards")

  trendsItem.on('click', function (event) {
    activeContent = $(this).attr("data-target");
    trendsItem.removeClass("trends__item-active");
    trendsCards.removeClass("trends__cards-active");
    $(activeContent).addClass("trends__cards-active");
    $(this).addClass("trends__item-active");
  })

  var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  loop: true,
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    bulletElement:'span',
  }, 
})
  $(".reviews").on("mouseover", function( ) {
    mySwiper. autoplay. stop();
  });
  $(".reviews").on("mouseout", function( ) {
    mySwiper. autoplay. start();
  });

 

});