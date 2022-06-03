$(document).ready(function () {
    $(".QAList ul li").click(function () {
        $(this).toggleClass("active");
        $(this).find("p").slideToggle();
        $(this).siblings().find("p").slideUp();
        $(this).siblings().removeClass("active");
    });
    $(".peopleChoose li").click(function (event) {
        event.preventDefault();
        $(this).find("a").toggleClass("choose");
        $(this).siblings().find("a").removeClass("choose");
        let text_len  = $(this).text().length-1;
        let num_people = $(this).text().substring(0,text_len)
        $(".choose-p").text(num_people);
        if (num_people == 10000){
            $(".choose-pri").text("600");
            $(".choose-pri-h").text("1600");
        }else if (num_people == 15000){
            $(".choose-pri").text("1000");
            $(".choose-pri-h").text("2000");
        }else if (num_people == 20000){
            $(".choose-pri").text("1300");
            $(".choose-pri-h").text("2300");
        }else if (num_people == 25000){
            $(".choose-pri").text("1500");
            $(".choose-pri-h").text("2500");
        }else{
            $(".choose-pri").text("1600");
            $(".choose-pri-h").text("2600");
        }
        
    });
    $(".top a").click(function (event) {
        event.preventDefault();
        $("html,body").animate(
          {
            scrollTop: 0
          },
          800
        );
      });
  });