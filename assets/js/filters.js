$('.btn-filters').click(function () {
  $('.filters-separators').css({
    display: 'block',
    width: 0,
  });
  "slow",
  $(".filters-separators").animate({
    width: "50%",
  });
  $(".background-filters").css({
    display: 'block',
  });
});
// close
$(".close-filters").click(function() {
  $(".filters-separators").toggle("slow");
  $(".background-filters").css({
    display: "none"
  });
});