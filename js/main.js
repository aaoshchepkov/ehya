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

  var reviewsSwiper = new Swiper(".reviews__slider", {
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
    clickable: true,
  }, 
  })
  $(".reviews").on("mouseover", function( ) {
    reviewsSwiper. autoplay. stop();
  });
  $(".reviews").on("mouseout", function( ) {
    reviewsSwiper. autoplay. start();
  });

  var historySwiper = new Swiper('.history__slider', {
  // Optional parameter
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.history__button-left',
    prevEl: '.history__button-right',
  },
})

});