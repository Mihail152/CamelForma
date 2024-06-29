$(document).on("click", ".js_open_popup_startap", function (e) {
  e.preventDefault();
  const id = $(this).attr("href");
  console.log(id);
  $(id).addClass("active");
  $(".popup_startap-bg").addClass("active");
  $("body").addClass("oh");
});
$(".popup_startap-close, .popup_startap-bg, .btn-reset-apple, .popup_startap,.btn-reset-apple-country").click(function (e) {
  if (e.target !== this && !$(this).hasClass('popup_startap-close'))
    return;
  // var div = $(".popup_startap-wrap");
  // if (!div.is(e.target) // если клик был не по нашему блоку
  //   && div.has(e.target).length === 0) { // и не по его дочерним элементам
  $(".popup_startap").removeClass("active");
  $(".popup_startap-bg").removeClass("active");
  $("body").removeClass("oh");
  // }
});

$(".biznes_tab-item .triger").click((function() {
  $(this).toggleClass("active");
  $(this).parent().find(".biznes_tab-info").toggle("");
}));
$(".go-a").click((function(e) {
  e.preventDefault();
  const lsle = $(this).attr("href");
  $(lsle).find(".triger").addClass("active");
  $(lsle).find(".biznes_tab-info").show("");
}));


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

$(".progressbar").each(function () {
  var progressbar = $(this);
  var progressValue = parseInt(progressbar.data('progress'));
  progressbar.progressbar({
    value: progressValue
  });
})

if ($('#file_input').length) {

  $("#file_input").withDropZone("#drop_zone", {
    action: {
      name: "image",
      params: {
        preview: true,
      }
    },
  });
}

$("select.countryselect-investor-page").multiselect({
  columns: 1,
  placeholder: "Выберите страну",
  icon: "./img/Icon/choise_country.svg",
  search: true,
  openList: true,
  listType: "radio",
  btncalssreset: ".btn-reset",
  categoryInput: "choise-country-placeholder",
  maxPlaceholderOpts: 2,
  searchOptions: {
    default: "Введите страну для поиска",
  },
  selectAll: false,
});
$("select.cityselect-investor-page").multiselect({
  columns: 1,
  placeholder: "Выберите страну",
  icon: "./img/Icon/choise_city.svg",
  search: false,
  openList: true,
  listType: "radio",
  btncalssreset: ".btn-reset",
  categoryInput: "choise-city-placeholder",
  maxPlaceholderOpts: 2,
  searchOptions: {
    default: "Введите страну для поиска",
  },
  selectAll: false,
});
