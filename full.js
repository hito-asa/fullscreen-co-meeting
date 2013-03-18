$(function() {
  $("#account-menus ul").append("<li><a href='#' id='fullscreen-menu'>フルスクリーン</a></li>");
  $("#fullscreen-menu").click(function () {
    $("#header").remove();
    $("#footer").remove();
    $("#guide").remove();
    $("#side-panel").remove();
    $("#main-header").remove();
    $("#main-subheader").remove();
    $("#online-demo-support-tab").remove();
    $("#main").css("margin", "0 0 0 0");
    $(".SWCAW").css("top", "-30px");
    $(".SWCAW").css("z-index", "2");
    $(".SWCAW").css("background-color", "#FFFFFF");
    $("#main").height($(window).height());
    $("#main-body").css("height", "100%");
  });
  $(window).resize(function () {
    $("#main-body").css("height", "100%");
  });
});

