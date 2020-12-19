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
  effect:"coverflow",
  speed:600,
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
  speed:600,
  // Navigation arrows
  navigation: {
    nextEl: '.history__button-left',
    prevEl: '.history__button-right',
  },
  keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
})

var menuButton = $(".navbar__wrapper-button");
menuButton.on("click", function () {
event.preventDefault();  
$(".navbar__menu").toggleClass("navbar__menu-visible");
});

var closeButton = $(".navbar__close");
closeButton.on("click", function () {
$(".navbar__menu").removeClass("navbar__menu-visible");
});

$(document).mouseup(function(e) {
            var $target = $(e.target);
            if ($target.closest(".navbar__menu").length === 0) {
            $(".navbar__menu").removeClass("navbar__menu-visible");
            }
        });

 
var modalButton = $(".navbar__button");
modalButton.on("click", function () {
event.preventDefault();  
$(".modal__overlay").addClass("modal__overlay-visible"); 
$(".modal__dialog").addClass("modal__dialog-visible");
$(".navbar__menu").removeClass("navbar__menu-visible");

});

var closeModal = $(".modal__close");
closeModal.on("click", function () {
event.preventDefault();  
$(".modal__overlay").removeClass("modal__overlay-visible"); 
$(".modal__dialog").removeClass("modal__dialog-visible");

});

$(".modal__overlay").on("mousedown", function(e) {
		if ($(e.target).closest(".modal__dialog").length == 0) {
    $(".modal__overlay").removeClass("modal__overlay-visible");
    $(".modal__dialog").removeClass("modal__dialog-visible");					
		}
	});	
$(document).keydown(function (e) {
    if (e.keyCode === 27) {
      $(".modal__dialog").removeClass("modal__dialog-visible");
$(".modal__overlay").removeClass("modal__overlay-visible");
      $(".navbar__menu").removeClass("navbar__menu-visible");
    }
  });
  


$('.form').each(function() {
  $(this).validate({
  errorClass: "invalid",
  messages: {
    login: {
      required: "Введите email",
      email: "Введите в формате mail@mail.com "
    },
    email: {
      required: "Введите email",
      email: "Введите ваш email в формате mail@mail.com"
    },
    password: {
      required: "Ведите пароль",
      minlength: "Пароль должен быть не менее 6 знаков"
  },
  },
});
});  



});
