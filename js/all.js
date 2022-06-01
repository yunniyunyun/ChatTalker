$(document).ready(function () {
    $(".QAList ul li").click(function () {
        $(this).toggleClass("active");
        $(this).find("p").toggleClass("show");
        $(this).siblings().find("p").removeClass("show");
        $(this).siblings().removeClass("active");
    });
    $(".peopleChoose li").click(function (event) {
        event.preventDefault();
        $(this).find("a").toggleClass("choose");
        $(this).siblings().find("a").removeClass("choose");
    });
  });