$(document).ready(function(){
  $("#imageswap").click(function(){
    $(".site-header__logo").removeClass('background-image');
    $(".site-header__logo").css("background-image","url('./lovelock.jpg')");
  });
});