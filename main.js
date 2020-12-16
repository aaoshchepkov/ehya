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
});