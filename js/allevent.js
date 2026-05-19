$(function () {
  // slideUp
  $(".slideUp").click(function () {
    $(".box").slideUp(1000);
  });
  // slideDown
  $(".slideDown").click(function () {
    $(".box").slideDown(1000);
  });
  // slideToggle
  $(".slideToggle").click(function () {
    $(".box").slideToggle(1000);
  });

  // fadeIn
  $(".fadeIn").click(function () {
    $(".box").fadeIn(1200);
  });
  // fadeOut
  $(".fadeOut").click(function () {
    $(".box").fadeOut(1200);
  });
  // fadeToggle
  $(".fadeToggle").click(function () {
    $(".box").fadeToggle(1200);
  });

  // hide
  $(".hide").click(function () {
    $(".box").hide(1500);
  });
  // show
  $(".show").click(function () {
    $(".box").show(1500);
  });
  // toggle
  $(".toggle").click(function () {
    $(".box").toggle(1500);
  });
});
