$(document).on("click", ".js_open_popup_startap", function (e) {
    e.preventDefault();
    const id = $(this).attr("href");
    hide_select();
  
    $(id).addClass("active");
    $(".popup_startap-bg").addClass("active");
    $("body").addClass("oh");
  
  
  });
  $(".popup_startap-close, .popup_startap-bg, .btn-reset-apple, .btn-reset-apple-country").click(function (e) {
    // var div = $(".popup_startap-wrap");
    // if (!div.is(e.target) // если клик был не по нашему блоку
    //   && div.has(e.target).length === 0) { // и не по его дочерним элементам
    $(".popup_startap").removeClass("active");
    $(".popup_startap-bg").removeClass("active");
    $("body").removeClass("oh");
    // }
  });
  new WOW().init();

  document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth > 768) {
      let myFunction = function () {
        if (window.pageYOffset > sticky) {
          if (header)
            header.classList.add("sticky");
        } else {
          if (header)
            header.classList.remove("sticky");
        }
      };
      window.onscroll = function () {
        myFunction();
      };
      var first = document.getElementById("first-scroll");
      var header = document.getElementById("header");
      var sticky = header ? header.offsetTop : 0;
    }
  });