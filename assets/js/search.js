$('.icon-search').click(function () {
  $(".menu-search").fadeIn("slow");
  $('.menu-search').css({
    display: 'block',
  });
  $(".background-search").css({
    display: 'block',
  });
});
// close
$(".close-search").click(function() {
  $(".menu-search").fadeOut("slow");
  $(".background-search").css({
    display: "none"
  });
});