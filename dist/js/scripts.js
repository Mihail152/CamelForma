$(document).on("click", ".js_open_popup_startap", function (e) {
  e.preventDefault();
  const id = $(this).attr("href");
  console.log(id);
  $(id).addClass("active");
  $(".popup_startap-bg").addClass("active");
  $("body").addClass("oh");
});
$(document).on(
  "click",
  ".popup_startap-close, .popup_startap-bg, .btn-reset-apple, .popup_startap,.btn-reset-apple-country",
  function (e) {
    if (e.target !== this && !$(this).hasClass("popup_startap-close")) return;
    // var div = $(".popup_startap-wrap");
    // if (!div.is(e.target) // если клик был не по нашему блоку
    //   && div.has(e.target).length === 0) { // и не по его дочерним элементам
    $(".popup_startap").removeClass("active");
    $(".popup_startap-bg").removeClass("active");
    $("body").removeClass("oh");
    // }
  }
);

$(".forma_page_tab .triger").click(function () {
  $(this).toggleClass("active");
  $(this).parent().find(".forma_page-info").toggle("");
});
$(".go-a").click(function (e) {
  e.preventDefault();
  const lsle = $(this).attr("href");
  $(lsle).find(".triger").addClass("active");
  $(lsle).find(".forma_page-info").show("");
});

new WOW().init();

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth > 768) {
    let myFunction = function () {
      if (window.pageYOffset > sticky) {
        if (header) header.classList.add("sticky");
      } else {
        if (header) header.classList.remove("sticky");
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
  var progressValue = parseInt(progressbar.data("progress"));
  progressbar.progressbar({
    value: progressValue,
  });
});

if ($("#file_input").length) {
  $("#file_input").withDropZone("#drop_zone", {
    action: {
      name: "image",
      params: {
        preview: true,
      },
    },
  });
}

$(".add_row").click(function (e) {
  e.preventDefault();
  var items_input = $(this).parent().parent().children(".row__input_items");
  var placeholder = items_input
    .children("input:first-child")
    .attr("placeholder");
  var last_input = items_input.children("input:last-child").data("item");
  var max_input = items_input.children("input:last-child").data("max");
  if (parseInt(last_input) <= max_input) {
    var element =
      '<input type="text" id="ms-benefit-' +
      ++last_input +
      '" data-item="' +
      last_input +
      '" data-max="' +
      max_input +
      '" class="fs_input" placeholder="' +
      placeholder +
      '">';
    items_input.append(element);
  }
  if (parseInt(last_input) == max_input) {
    $(this).addClass("disable");
  }
});

if ($("#datepicker").length) {
  $("#datepicker").datepicker({
    dateFormat: "dd/mm/yy",
  });
  // Получение текущей даты
  var today = new Date();
  var day = String(today.getDate()).padStart(2, "0");
  var month = String(today.getMonth() + 1).padStart(2, "0"); // Январь = 0
  var year = today.getFullYear();

  var currentDate = day + "/" + month + "/" + year;

  // Установка placeholder
  $("#datepicker").attr("placeholder", currentDate);
}

$(document).on("click", ".clone_button", function (e) {
  e.preventDefault();
  const container = $(this).closest(".clone-container");
  const maxClones = parseInt(container.data("max")) || 0;
  const curContainer = parseInt(container.data("id")) || 0;

  if (curContainer < maxClones) {
    const newClone = container.clone();
    newClone.find("input").val("");
    // Сброс значений по умолчанию для чекбоксов и радиокнопок
    newClone.find('input[type="checkbox"]').each(function () {
      $(this).prop("checked", false);
    });
    newClone.find('input[type="radio"]').each(function () {
      $(this).prop("checked", false);
    });
    newClone.attr("data-id", curContainer + 1);
    newClone.find(".current").text(curContainer + 1);

    newClone.find('input[type="radio"]').each(function () {
      const newName = $(this).attr("name") + "_" + curContainer;
      $(this).attr("name", newName);
      const id = $(this).attr("id") + "_" + curContainer;
      $(this).attr("id", id);

      $(this).siblings("label").attr("for", id);
    });

    if (newClone.find(".languages__link").length) {
      const href = newClone.find(".languages__link").attr("href");
      const container_popup = $(href);
      const newContainer_popup = container_popup.clone();
      const newHref = href.replace("#", "") + "_" + curContainer;
      const placeholder = newClone.find(".languages__link").attr("id");
      const newPlaceholder = placeholder + "_" + curContainer;
      newClone.find(".languages__link").attr("id", newPlaceholder);
      newContainer_popup.attr("id", newHref);
      container_popup.after(newContainer_popup);
      const languages__link_href =
        newClone.find(".languages__link").attr("href") + "_" + curContainer;
      newClone.find(".languages__link").attr("href", languages__link_href);
      newContainer_popup.find(".ms-options-wrap").remove();
      newContainer_popup
        .find(".languageselect")
        .removeClass('active jqmsLoaded [class*="ms-list-"]');
      $("select.languageselect").multiselect({
        columns: 4,
        placeholder: "Выберите языки",
        icon: "./img/Icon/choise_country.svg",
        search: true,
        openList: true,
        listType: "checkbox",
        btncalssreset: ".btn-reset",
        categoryInput: newPlaceholder,
        maxPlaceholderOpts: 4,
        searchOptions: {
          default: "Введите страну для поиска",
        },
        selectAll: false,
      });
    }
    if (newClone.find(".your-country").length) {
      newClone.find(".your-country").each(function (index) {
        const href = $(this).attr("href");
        const container_popup = $(href);
        const newHref = href.replace("#", "") + "_" + curContainer;

        // $(this).find('#location-country').attr('id', countryId);
        // $(this).find('#location-city').attr('id', cityId);

        const newContainer_popup = container_popup.clone();
        const placeholder = newContainer_popup.attr("id");
        const newPlaceholder = placeholder + "_" + curContainer;
        $(this).attr("id", newPlaceholder);
        newContainer_popup.attr("id", newHref);
        container_popup.after(newContainer_popup);
        $(this).attr("href", "#" + newHref);
        newContainer_popup.find(".ms-options-wrap").remove();
        newContainer_popup
          .find("select")
          .removeClass('active jqmsLoaded [class*="ms-list-"]');
      });

      // $("select.languageselect").multiselect({
      //   columns: 4,
      //   placeholder: "Выберите языки",
      //   icon: "./img/Icon/choise_country.svg",
      //   search: true,
      //   openList: true,
      //   listType: "checkbox",
      //   btncalssreset: ".btn-reset",
      //   categoryInput: newPlaceholder,
      //   maxPlaceholderOpts: 4,
      //   searchOptions: {
      //     default: "Введите страну для поиска",
      //   },
      //   selectAll: false,
      // });
    }

    newClone.find(".ms-options-wrap").remove();
    newClone.find(".cloneselect").removeClass('jqmsLoaded [class*="ms-list-"]');

    $(this).remove();
    if (curContainer == maxClones - 1) {
      newClone.find(".clone_button").remove();
    }
    container.after(newClone);

    if (newClone.find(".datepicker_calendar").length) {
      newClone.find(".datepicker_calendar").removeClass("hasDatepicker");
      var uniqueId = "datepicker_" + curContainer;
      newClone.find(".datepicker_calendar").attr("id", uniqueId);
      $("#" + uniqueId).datepicker({
        dateFormat: "dd/mm/yy",
      });
      // Получение текущей даты
      var today = new Date();
      var day = String(today.getDate()).padStart(2, "0");
      var month = String(today.getMonth() + 1).padStart(2, "0"); // Январь = 0
      var year = today.getFullYear();

      var currentDate = day + "/" + month + "/" + year;

      // Установка placeholder
      $("#" + uniqueId).attr("placeholder", currentDate);
    }
  }

  $("select.cloneselect").multiselect({
    columns: 1,
    placeholder: "",
    icon: "",
    search: false,
    openList: false,
    listType: "radio",
    minHeight: "150",
    maxPlaceholderOpts: 2,
    searchOptions: {
      default: "Введите страну для поиска",
    },
    selectAll: false,
  });
});
$("select.cloneselect").each(function (index) {
  const selectElement = $(this);
  selectElement.multiselect({
    columns: 1,
    placeholder: $(this).attr("data-placeholder"),
    icon: "",
    search: false,
    openList: false,
    listType: "radio",
    minHeight: "150",
    maxPlaceholderOpts: 2,
    searchOptions: {
      default: "Введите страну для поиска",
    },
    selectAll: false,
  });
});
$("select.languageselect").multiselect({
  columns: 4,
  placeholder: "Выберите языки",
  icon: "./img/Icon/choise_country.svg",
  search: true,
  openList: true,
  listType: "checkbox",
  btncalssreset: ".btn-reset",
  categoryInput: "choise-language-placeholder",
  maxPlaceholderOpts: 4,
  searchOptions: {
    default: "Введите страну для поиска",
  },
  selectAll: false,
});

$("select.location-countryselect").multiselect({
  columns: 4,
  placeholder: "Выберите страну",
  icon: "./img/Icon/choise_country.svg",
  search: true,
  openList: true,
  listType: "radio",
  btncalssreset: ".btn-reset",
  categoryInput: "location-country-placeholder",
  maxPlaceholderOpts: 2,
  searchOptions: {
    default: "Введите страну для поиска",
  },
  selectAll: false,
});
$("select.location-cityselect").multiselect({
  columns: 3,
  placeholder: "Выберите город",
  icon: "./img/Icon/choise_city.svg",
  search: false,
  openList: true,
  listType: "radio",
  btncalssreset: ".btn-reset",
  categoryInput: "location-city-placeholder",
  maxPlaceholderOpts: 2,
  searchOptions: {
    default: "Введите страну для поиска",
  },
  selectAll: false,
});

$("select.countryselect-investor-page").multiselect({
  columns: 4,
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
$("select.stageproject").multiselect({
  columns: 1,
  placeholder: "Стадия проекта",
  icon: "",
  search: false,
  openList: false,
  listType: "radio",
  btncalssreset: ".btn-reset",
  categoryInput: "choise-city-placeholder",
  maxPlaceholderOpts: 2,
  searchOptions: {
    default: "Введите страну для поиска",
  },
  selectAll: false,
});
$("select.sprosselect").multiselect({
  columns: 1,
  placeholder: "Спрос",
  icon: "",
  search: false,
  openList: false,
  listType: "radio",
  minHeight: "150",
  btncalssreset: ".btn-reset",
  categoryInput: "choise-city-placeholder",
  maxPlaceholderOpts: 2,
  searchOptions: {
    default: "Введите страну для поиска",
  },
  selectAll: false,
});

$("select[multiple].choise-industry").multiselect({
  columns: 3,
  placeholder: "Выберите отрасль",
  icon: "img/choise_cat.webp",
  search: true,
  openList: true,
  listType: "checkbox",
  categoryInput: "choise-industry-placeholder",
  maxPlaceholderOpts: 2,
  searchOptions: {
    default: "Введите категорию для поиска",
  },
  selectAll: false,
});

$("select[multiple].local_industry").multiselect({
  columns: 3,
  placeholder: "Выберите отрасль",
  icon: "img/choise_cat.webp",
  search: true,
  openList: true,
  listType: "checkbox",
  categoryInput: "local_industry-placeholder",
  maxPlaceholderOpts: 2,
  searchOptions: {
    default: "Введите категорию для поиска",
  },
  selectAll: false,
});
$("select[multiple].client_status-select").multiselect({
  columns: 3,
  placeholder: "Семейный статус клиентов",
  icon: "",
  search: true,
  openList: true,
  listType: "checkbox",
  categoryInput: "client_status-placeholder",
  maxPlaceholderOpts: 3,
  searchOptions: {
    default: "Введите категорию для поиска",
  },
  selectAll: false,
});
$("select[multiple].family_status-select").multiselect({
  columns: 2,
  placeholder: "Социальные статусы клиентов",
  icon: "",
  search: true,
  openList: true,
  listType: "checkbox",
  categoryInput: "family_status-placeholder",
  maxPlaceholderOpts: 4,
  searchOptions: {
    default: "Введите категорию для поиска",
  },
  selectAll: false,
});
$("select[multiple].adv_source-select").multiselect({
  columns: 3,
  placeholder: "Социальные статусы клиентов",
  icon: "",
  search: true,
  openList: true,
  listType: "checkbox",
  categoryInput: "adv_source-placeholder",
  maxPlaceholderOpts: 3,
  searchOptions: {
    default: "Введите категорию для поиска",
  },
  selectAll: false,
});
$("select[multiple].company_size-select").multiselect({
  columns: 3,
  placeholder: "Социальные статусы клиентов",
  icon: "",
  search: true,
  openList: true,
  listType: "checkbox",
  categoryInput: "company_size-placeholder",
  maxPlaceholderOpts: 3,
  searchOptions: {
    default: "Введите категорию для поиска",
  },
  selectAll: false,
});

$("select[multiple].segment_client-select").multiselect({
  columns: 2,
  placeholder: "Социальные статусы клиентов",
  icon: "",
  search: true,
  openList: true,
  listType: "checkbox",
  categoryInput: "segment_client-placeholder",
  maxPlaceholderOpts: 4,
  searchOptions: {
    default: "Введите категорию для поиска",
  },
  selectAll: false,
});

$("select[multiple].adv_source_b2b-select").multiselect({
  columns: 4,
  placeholder: "Социальные статусы клиентов",
  icon: "",
  search: true,
  openList: true,
  listType: "checkbox",
  categoryInput: "adv_source_b2b-placeholder",
  maxPlaceholderOpts: 4,
  searchOptions: {
    default: "Введите категорию для поиска",
  },
  selectAll: false,
});

$(".forma_slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  infinite: true,
  nextArrow:
    '<span class="slick-next-biznes"><span class="flex aic jcc"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M11.4318 4.43873L20.1765 13.4095C20.3301 13.567 20.416 13.7784 20.416 13.9984C20.416 14.2185 20.3301 14.4298 20.1765 14.5873L11.4318 23.5615C11.3603 23.635 11.2748 23.6934 11.1803 23.7332C11.0858 23.7731 10.9843 23.7937 10.8817 23.7937C10.7792 23.7937 10.6776 23.7731 10.5832 23.7332C10.4887 23.6934 10.4031 23.635 10.3316 23.5615C10.1844 23.4108 10.102 23.2085 10.102 22.9979C10.102 22.7872 10.1844 22.5849 10.3316 22.4342L18.5548 13.9984L10.3316 5.56429C10.1849 5.41368 10.1028 5.21175 10.1028 5.00151C10.1028 4.79127 10.1849 4.58934 10.3316 4.43873C10.4031 4.36525 10.4887 4.30684 10.5832 4.26697C10.6776 4.22709 10.7792 4.20654 10.8817 4.20654C10.9843 4.20654 11.0858 4.22709 11.1803 4.26697C11.2748 4.30684 11.3603 4.36525 11.4318 4.43873Z" fill="white"/></svg></span></span>',
  prevArrow:
    '<span class="slick-prev-biznes"><span class="flex aic jcc"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">  <path d="M16.5682 4.43873L7.82353 13.4095C7.66994 13.567 7.58398 13.7784 7.58398 13.9984C7.58398 14.2185 7.66994 14.4298 7.82353 14.5873L16.5682 23.5615C16.6397 23.635 16.7252 23.6934 16.8197 23.7332C16.9142 23.7731 17.0157 23.7937 17.1183 23.7937C17.2208 23.7937 17.3224 23.7731 17.4168 23.7332C17.5113 23.6934 17.5969 23.635 17.6684 23.5615C17.8156 23.4108 17.898 23.2085 17.898 22.9979C17.898 22.7872 17.8156 22.5849 17.6684 22.4342L9.44521 13.9984L17.6684 5.56429C17.8151 5.41368 17.8972 5.21175 17.8972 5.00151C17.8972 4.79127 17.8151 4.58934 17.6684 4.43873C17.5969 4.36525 17.5113 4.30684 17.4168 4.26697C17.3224 4.22709 17.2208 4.20654 17.1183 4.20654C17.0157 4.20654 16.9142 4.22709 16.8197 4.26697C16.7252 4.30684 16.6397 4.36525 16.5682 4.43873Z" fill="white"/></svg></span></span>',
  adaptiveHeight: true,
  fade: true,
  speed: 500,
  asNavFor: ".forma_slider-nav",
});
$(".forma_slider-nav").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: ".forma_slider",
  infinite: true,
  arrows: false,
  nextArrow:
    '<span class="slick-next-biznes"><span class="flex aic jcc"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M11.4318 4.43873L20.1765 13.4095C20.3301 13.567 20.416 13.7784 20.416 13.9984C20.416 14.2185 20.3301 14.4298 20.1765 14.5873L11.4318 23.5615C11.3603 23.635 11.2748 23.6934 11.1803 23.7332C11.0858 23.7731 10.9843 23.7937 10.8817 23.7937C10.7792 23.7937 10.6776 23.7731 10.5832 23.7332C10.4887 23.6934 10.4031 23.635 10.3316 23.5615C10.1844 23.4108 10.102 23.2085 10.102 22.9979C10.102 22.7872 10.1844 22.5849 10.3316 22.4342L18.5548 13.9984L10.3316 5.56429C10.1849 5.41368 10.1028 5.21175 10.1028 5.00151C10.1028 4.79127 10.1849 4.58934 10.3316 4.43873C10.4031 4.36525 10.4887 4.30684 10.5832 4.26697C10.6776 4.22709 10.7792 4.20654 10.8817 4.20654C10.9843 4.20654 11.0858 4.22709 11.1803 4.26697C11.2748 4.30684 11.3603 4.36525 11.4318 4.43873Z" fill="white"/></svg></span></span>',
  prevArrow:
    '<span class="slick-prev-biznes"><span class="flex aic jcc"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">  <path d="M16.5682 4.43873L7.82353 13.4095C7.66994 13.567 7.58398 13.7784 7.58398 13.9984C7.58398 14.2185 7.66994 14.4298 7.82353 14.5873L16.5682 23.5615C16.6397 23.635 16.7252 23.6934 16.8197 23.7332C16.9142 23.7731 17.0157 23.7937 17.1183 23.7937C17.2208 23.7937 17.3224 23.7731 17.4168 23.7332C17.5113 23.6934 17.5969 23.635 17.6684 23.5615C17.8156 23.4108 17.898 23.2085 17.898 22.9979C17.898 22.7872 17.8156 22.5849 17.6684 22.4342L9.44521 13.9984L17.6684 5.56429C17.8151 5.41368 17.8972 5.21175 17.8972 5.00151C17.8972 4.79127 17.8151 4.58934 17.6684 4.43873C17.5969 4.36525 17.5113 4.30684 17.4168 4.26697C17.3224 4.22709 17.2208 4.20654 17.1183 4.20654C17.0157 4.20654 16.9142 4.22709 16.8197 4.26697C16.7252 4.30684 16.6397 4.36525 16.5682 4.43873Z" fill="white"/></svg></span></span>',
  dots: false,
  speed: 500,
  centerMode: false,
  focusOnSelect: true,
  centerPadding: "120px",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        centerPadding: "60px",
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 550,
      settings: {
        centerPadding: "60px",
        slidesToShow: 2,
      },
    },
  ],
});

$(".tab-100-nav").delegate("li:not(.current)", "click", function () {
  $(this)
    .addClass("current")
    .siblings()
    .removeClass("current")
    .parents(".tab-100")
    .find("div.tab-100-box")
    .hide()
    .eq($(this).index())
    .fadeIn(0);
});
$(".tab-200-nav").delegate("li:not(.current)", "click", function () {
  $(this)
    .addClass("current")
    .siblings()
    .removeClass("current")
    .parents(".tab-200")
    .find("div.tab-200-box")
    .hide()
    .eq($(this).index())
    .fadeIn(0);
});

// var handle = $( "#slider-handle" );
// $("#slider-range-min").slider({
//   range: "min",
//   value: 37,
//   min: 1,
//   max: 100,
//   create: function() {
//     handle.text( $( this ).slider( "value" ) );
//   },
//   slide: function( event, ui ) {
//     handle.text( ui.value );

//   },
// });

var handle = $(".slider_percent__handle");
$(".slider_percent__progress").slider({
  range: "min",
  value: 37,
  min: 1,
  max: 100,
  create: function () {
    handle.html(
      '<div class="slider_value">' + $(this).slider("value") + " %</div>"
    );
  },
  slide: function (event, ui) {
    handle.html('<div class="slider_value">' + ui.value + " %</div>");
  },
});
// $("#amount").val("$" + $("#slider-range-min").slider("value"));
