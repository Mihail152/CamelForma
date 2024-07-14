
$((function () {
  if ($(window).width() > 993) {
    var columns = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 1; i <= 22; i++) $(`.js_height_${i}`).each((function () {
      const h = $(this).height();
      if (h > columns[i - 1]) columns[i - 1] = h;
    })).height(columns[i - 1]);
  }
}));
$(".box_8987 .button-open").click((function () {
  $(this).parent().parent().parent().find(".sevice_table-path-mobile").show(0);
  $(this).parent().parent().parent().find(".bottom ").hide(0);
}));

$(".sevice_table-path-mobile-close").click((function () {
  $(this).parent().parent().parent().find(".sevice_table-path-mobile").hide(0);
  $(this).parent().parent().parent().find(".bottom ").show(0);
}));

$(document).on('click', '.upload-btn', function (e) {
  e.preventDefault();
  $(this).siblings('input[type="file"]').trigger('click');
})

$('.product-btn').on('click', function (e) {
  e.preventDefault();
  $('.plan_title-selected .logo').hide();
  if ($(this).hasClass('active')) {
    $('.product-btn, .td_col').removeClass('active');
    $('.plan_header').removeClass('active');
  } else {
    $('.product-btn, .td_col').removeClass('active');
    $(this).closest('.td_col').addClass('active');
    $(this).toggleClass('active');
    $('.plan_header').addClass('active');
    const data_product = $(this).attr('data-product');
    $('.plan_title-selected .logo[data-plan="' + data_product + '"]').show();
  }
})



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
  ".btn-apply, .popup_startap-close, .popup_startap-bg, .btn-reset-apple, .popup_startap,.btn-reset-apple-country",
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
  if ($(this).hasClass("active")) {
    $(this).closest('.forma_page-item').addClass("active");
  } else {
    $(this).closest('.forma_page-item').removeClass("active");
  }
  $(this).parent().find(".forma_page-info").toggle("");
});
$(".go-a").click(function (e) {
  e.preventDefault();
  const lsle = $(this).attr("href");
  $(lsle).find(".triger").addClass("active");
  $(lsle).find(".forma_page-info").show("");
});

// new WOW().init();

$(document).on('click', function (e) {
  if (!$(e.target).closest('.ms-active').length) {
    $('.ms-active').removeClass('ms-active');
  }
});

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
        maxFiles: 5,
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



function init_select() {
  $('.multiselect').each(function (index) {
    const selectElement = $(this);
    const selectAll = $(this).attr('data-selectAll') || false;
    const listType = $(this).attr('data-listType') || "radio";
    selectElement.multiselect({
      columns: 1,
      placeholder: $(this).attr("data-placeholder"),
      icon: "",
      search: false,
      openList: false,
      listType: listType,
      minHeight: "150",
      // onlyValue: onlyvalue,
      maxPlaceholderOpts: 2,
      searchOptions: {
        default: "Введите страну для поиска",
      },
      selectAll: selectAll,
    });
  });
  $('.multiselect_opened').each(function (index) {
    const selectElement = $(this);
    const searchPlaceholder = $(this).attr('data-placeholder') || false;
    const placeholderId = $(this).attr('data-placeholderId') || false;
    const search = $(this).attr('data-search') || false;
    const columns = $(this).attr('data-columns') || 3;
    const maxPlaceholder = $(this).attr('data-columns') || 3;
    selectElement.multiselect({
      columns: columns,
      icon: "",
      search: search,
      openList: true,
      listType: "checkbox",
      minHeight: "150",
      onlyValue: true,
      maxPlaceholderOpts: 2,
      searchOptions: {
        default: searchPlaceholder,
      },
      selectAll: false,
    });
  });

}


function syncSelectedByText(sourceSelect, targetSelect) {
  
  $(sourceSelect).find('option:selected').each(function () {
    let searchText = $(this).text().trim();
    $(targetSelect).find('option').each(function () {
      if ($(this).text().trim() === searchText) {
        $(this).prop('selected', true);
      }
    });
  });
}

function updateCombinedValues() {
  let selectedValues = [];

  $('select.industry__mini option:selected').each(function () {
    selectedValues.push($(this).text());
  });

  $('select.industry__popup option:selected').each(function () {
    selectedValues.push($(this).text());
  });


  // Удаление дубликатов
  let uniqueValues = [...new Set(selectedValues)];
  let txt_end = "";
  if (uniqueValues.length > 3) {
    txt_end = '+ ' + (uniqueValues.length - 3);
  }

  let minuniqueValues = uniqueValues;
  $('#combined_industry-placeholder').html(minuniqueValues.map(text => `<span class="item">${text} <img src="img/Icon/ic_close.svg" class="remove__item"></span>`).join(''));
}


$('select.industry__mini, select.industry__popup').change(updateCombinedValues);
// Обработка события изменения в select.industry__mini
$('select.industry__mini').change(function () {
  syncSelectedByText(this, 'select.industry__popup');
});

// Обработка события изменения в select.industry__popup
$('select.industry__popup').change(function () {
  syncSelectedByText(this, 'select.industry__mini');
});

syncSelectedByText('select.industry__mini', 'select.industry__popup');
// Общая функция для снятия выбора с опций по тексту
function deselectOptionByText(text) {
  $('.industry__mini option, .industry__popup option').each(function () {
    if ($(this).text().trim() === text.trim()) {
      $(this).prop('selected', false).trigger('chosen:updated');
    }
  });
  $('li[data-search-term="' + text.trim().toLowerCase() + '"]').removeClass('selected').find('input[type="checkbox"]').prop('checked', false);
}

// Делегирование события клика на элементах .combined span.item img
$(document).on('click', '.combined span.item img', function () {
  const searchText = $(this).parent().text().trim();
  deselectOptionByText(searchText);
  updateCombinedValues();
});




// Удаляем блок 
$(document).on("click", ".remove_button", function (e) {
  e.preventDefault();
  const container = $(this).closest(".clone-container");
  let remove_count = parseInt($(this).siblings('.clone_button').attr('data-remove')) + 1;
  if (isNaN(remove_count)) {
    remove_count = 1;
  }
  if (!container.prev().find('.clone_button').length) { // если такой кнопки нет, то добавляем
    const clone_btn_html = '<div class="clone_button" data-remove="' + remove_count + '"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd"d="M8.00002 8.00002L8.00006 13C8.00006 13.5523 7.55232 14 7.00007 14C6.72391 14 6.47388 13.8881 6.29291 13.7071C6.11198 13.5262 6.00007 13.2762 6.00007 13L6.00003 8.00002L0.999996 8.00002C0.723892 8.00007 0.473858 7.88816 0.292885 7.70719C0.111912 7.52621 -2.19475e-07 7.27618 0 7.00003C4.3895e-07 6.44773 0.447744 5.99998 0.999997 6.00003L6.00003 6.00003L6.00003 0.999997C6.00003 0.447696 6.44778 -4.67018e-05 7.00003 0C7.55228 4.67018e-05 8.00002 0.447789 8.00002 0.999996L8.00002 6.00003L13 5.99998C13.5523 6.00002 14 6.44776 14 6.99997C14 7.55227 13.5523 8.00002 13 7.99997L8.00002 8.00002Z"fill="#4272C5"></path></svg></div>';
    container.prev().find('.wrap_clone_buttons').append(clone_btn_html);
  } else {
    remove_count = parseInt(container.prev().find('.clone_button').attr('data-remove')) + 1;
    console.log(remove_count);
    container.prev().find('.clone_button').attr('data-remove', remove_count)
  }
  container.remove();
})


// Добавляем блок
$(document).on("click", ".clone_button", function (e) {
  e.preventDefault();
  const container = $(this).closest(".clone-container");
  const maxClones = parseInt(container.data("max")) || 0;
  const curContainer = parseInt(container.data("id")) || 0;
  if (curContainer < maxClones) {

    const newClone = container.clone();

    // задаем id и name в input[type="text"] и сбрасываем значение
    newClone.find('input[type="text"]').each(function () {
      const newInput_name = $(this).attr('name') + "_" + curContainer;
      $(this).attr('name', newInput_name);
      const newInput_ID = $(this).attr('id') + "_" + curContainer;
      $(this).attr('id', newInput_ID);
      $(this).val("");
    })
    // задаем id и name в input[type="radio"] и сбрасываем значение
    newClone.find('input[type="radio"]').each(function () {
      const newName = $(this).attr("name") + "_" + curContainer;
      $(this).attr("name", newName);
      const id = $(this).attr("id") + "_" + curContainer;
      $(this).attr("id", id);
      $(this).siblings("label").attr("for", id);
    });

    // 
    newClone.attr("data-id", curContainer + 1);
    newClone.find(".current").text(curContainer + 1);

    // Добавляем второму блоку кнопку удаления
    if (curContainer == 1 && !newClone.find('.remove_button').length) { // если такой кнопки нет, то добавляем
      const close_html = '<div class="remove_button"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.75 6.75L13.44 11.7625C13.361 13.043 13.3215 13.6835 13 14.144C12.8413 14.3716 12.637 14.5637 12.4 14.708C11.9215 15 11.28 15 9.997 15C8.712 15 8.0695 15 7.59 14.7075C7.35294 14.5629 7.14861 14.3704 6.99 14.1425C6.669 13.6815 6.63 13.04 6.553 11.7575L6.25 6.75M5.5 6.75H14.5M12.028 6.75L11.6865 6.046C11.46 5.578 11.3465 5.3445 11.151 5.1985C11.1076 5.16616 11.0616 5.1374 11.0135 5.1125C10.797 5 10.537 5 10.0175 5C9.4845 5 9.218 5 8.9975 5.117C8.94876 5.14311 8.90227 5.17321 8.8585 5.207C8.661 5.3585 8.5505 5.601 8.3295 6.0855L8.0265 6.75M8.75 12.25V9.25M11.25 12.25V9.25" stroke="#E52E2E" stroke-linecap="round" stroke-linejoin="round"/><circle cx="10" cy="10" r="9.5" stroke="#E52E2E"/></svg></div>';
      $(newClone).find('.clone_button').before(close_html)
    }

    // Убавляем поличество добавлений кнопки
    if ($(this).attr('data-remove') > 0) {
      let remove_count = parseInt($(this).data('remove'));
      if (remove_count == 1 && container.next('.clone-container').length) {
        newClone.find('.clone_button').remove();
      } else {
        remove_count--;
        newClone.find('.clone_button').attr('data-remove', remove_count)
      }
    }


    // Сбрасываем селект в popup
    if (newClone.find(".js_open_popup_startap").length) {
      newClone.find(".js_open_popup_startap").each(function () {
        const href = $(this).attr("href");
        const container_popup = $(href);
        const newContainer_popup = container_popup.clone();

        const newIdContainer = href.replace("#", "") + "_" + curContainer;
        newContainer_popup.attr("id", newIdContainer);

        const newHref = href + "_" + curContainer;
        $(this).attr("href", newHref);

        newContainer_popup.find(".ms-options-wrap").remove();
        newContainer_popup
          .find("select")
          .removeClass('active jqmsLoaded [class*="ms-list-"]');

        const placeholderText = $(this).siblings('.placeholder').attr('data-placeholder')
        $(this).siblings('.placeholder').text(placeholderText)

        const selectClass = newContainer_popup.find('select').attr('data-id');
        const newSelectClass = selectClass + "_" + curContainer;

        newContainer_popup.find("select").removeClass(selectClass).addClass(newSelectClass);

        const placeholderId = $(this).siblings('.placeholder').attr('data-id');
        const newPlaceholderId = placeholderId + "_" + curContainer;
        $(this).siblings('.placeholder').attr('id', newPlaceholderId);

        const data_search = $(this).attr('data-search') || false;
        const data_openlist = $(this).attr('data-openlist') || false;
        const data_onlyvalue = $(this).attr('data-onlyvalue') || false;
        const data_listtype = $(this).attr('data-listtype') || false;

        container_popup.after(newContainer_popup);
        $('select.' + newSelectClass).multiselect({
          columns: 1,
          placeholder: placeholderText,
          icon: "",
          search: data_search,
          openList: data_openlist,
          onlyValue: data_onlyvalue,
          listType: data_listtype,
          btncalssreset: ".btn-reset",
          categoryInput: newPlaceholderId,
          maxPlaceholderOpts: 3,
          searchOptions: {
            default: "Введите город для поиска",
          },
          selectAll: false,
        });
      })
    }




    // Сброс значений по умолчанию для чекбоксов и радиокнопок
    // newClone.find('input[type="checkbox"]').each(function () {
    //   $(this).prop("checked", false);
    // });
    // newClone.find('input[type="radio"]').each(function () {
    //   $(this).prop("checked", false);
    // });





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
    // if (newClone.find(".your-country").length) {
    //   newClone.find(".your-country").each(function (index) {
    //     const href = $(this).attr("href");
    //     const container_popup = $(href);
    //     const newHref = href.replace("#", "") + "_" + curContainer;

    //     // $(this).find('#location-country').attr('id', countryId);
    //     // $(this).find('#location-city').attr('id', cityId);

    //     const newContainer_popup = container_popup.clone();
    //     const placeholder = newContainer_popup.attr("id");
    //     const newPlaceholder = placeholder + "_" + curContainer;
    //     $(this).attr("id", newPlaceholder);
    //     newContainer_popup.attr("id", newHref);
    //     container_popup.after(newContainer_popup);
    //     $(this).attr("href", "#" + newHref);
    //     newContainer_popup.find(".ms-options-wrap").remove();
    //     newContainer_popup
    //       .find("select")
    //       .removeClass('active jqmsLoaded [class*="ms-list-"]');
    //   });

    //   // $("select.languageselect").multiselect({
    //   //   columns: 4,
    //   //   placeholder: "Выберите языки",
    //   //   icon: "./img/Icon/choise_country.svg",
    //   //   search: true,
    //   //   openList: true,
    //   //   listType: "checkbox",
    //   //   btncalssreset: ".btn-reset",
    //   //   categoryInput: newPlaceholder,
    //   //   maxPlaceholderOpts: 4,
    //   //   searchOptions: {
    //   //     default: "Введите страну для поиска",
    //   //   },
    //   //   selectAll: false,
    //   // });
    // }

    newClone.find(".ms-options-wrap").remove();
    newClone.find(".cloneselect, .multiselect").removeClass('jqmsLoaded [class*="ms-list-"]');

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


  init_select();
});
// 
// 
// 
// 
// end 




// Сбросить значение input[type="radio"]
$('.btn-reset').on('click', function () {
  var parentDiv = $(this).closest('.popup_startap');

  if (parentDiv.length) {
    var selectElement = parentDiv.find('select');
    if (selectElement.length) {
      selectElement.val('');
    }
    var selectedLi = parentDiv.find('li.selected');
    if (selectedLi.length) {
      selectedLi.removeClass('selected');
      selectedLi.find('input[type="radio"]').prop('checked', false);
    }
  }
});
// клик по крестику на выбранном элементе 
$(document).on('click', '.remove__item', function () {
  const popup_forma__link = $(this).closest('.popup_forma__link');
  if (popup_forma__link.length) {
    const get_href = popup_forma__link.find('.js_open_popup_startap').attr('href');
    const get_id = $(this).closest('.item').attr('data-id');
    const parentDiv = $(get_href);
    console.log(get_id);
    if (parentDiv.length) {
      var selectElement = parentDiv.find('option[value="' + get_id + '"]');
      if (selectElement.length) {
        selectElement.prop('selected', false);
      }
      var selectedInput = parentDiv.find('li input[value="' + get_id + '"]');
      if (selectedInput.length) {

        selectedInput.closest('li').removeClass('selected');
        selectedInput.prop('checked', false);
      }
    }
  }
  $(this).parent().remove();
})

init_select();



$('.js_open_popup_startap').each(function () {
  const this_id = $(this).attr('href').replace('#', '');

  const columns = $(this).attr('data-columns') || 1;
  const placeholder = $(this).attr('data-placeholder') || $(this).siblings('.placeholder').attr('data-placeholder') || "default";
  const icon = $(this).attr('data-Icon') || false;
  const search = $(this).attr('data-search') || false;
  const openList = $(this).attr('data-openlist') || false;
  const listType = $(this).attr('data-listtype') || false;
  const onlyvalue = $(this).attr('data-onlyvalue') || false;
  const categoryInput = $(this).siblings('.placeholder').attr('id') || false;
  const maxPlaceholderOpts = $(this).attr('data-maxPlaceholder') || 1;
  const defaultText = $(this).attr('data-defaultText');

  let icon_path = false;
  if (icon) {
    icon_path = "./img/" + icon;
  }

  $("select." + this_id).multiselect({
    columns: columns,
    placeholder: placeholder,
    icon: icon_path,
    search: search,
    openList: openList,
    listType: listType,
    btncalssreset: ".btn-reset",
    onlyValue: onlyvalue,
    categoryInput: categoryInput,
    maxPlaceholderOpts: maxPlaceholderOpts,
    searchOptions: {
      default: defaultText,
    },
    selectAll: false,
  });
})



$(".m-scroll").bind("touchstart", (function () {
  $(this).addClass("start-scroll");
}));
$(".m-scroll-767").bind("touchstart", (function () {
  $(this).addClass("start-scroll");
}));
$(".history").bind("touchstart", (function () {
  $(this).addClass("start-scroll");
}));
$("#polzunok").slider({
  animate: "slow",
  range: "min",
  value: 50,
  slide: function (event, ui) {
    $("#send-result-polzunok").val(ui.value);
  }
});
$(".go-tab-200").click((function () {
  $("html, body").animate({
    scrollTop: $(".tab-200").offset().top - 130
  }, 500);
}));
$(".tab-200-nav").delegate("li:not(.current)", "click", (function () {
  $(this).addClass("current").siblings().removeClass("current").parents(".tab-200").find("div.tab-200-box").hide().eq($(this).index()).fadeIn(0);
}));
// Валюта
// $("select.currency").multiselect({
//   columns: 3,
//   placeholder: "Выберите валюту",
//   icon: "./img/Icon/dollar--1.svg",
//   search: true,
//   openList: true,
//   onlyValue: true,
//   listType: "radio",
//   btncalssreset: ".btn-reset",
//   categoryInput: "currency__popup-placeholder",
//   maxPlaceholderOpts: 3,
//   searchOptions: {
//     default: "Введите валюту для поиска",
//   },
//   selectAll: false,
// });
// Страна 
// $("select.country__popup").multiselect({
//   columns: 4,
//   placeholder: "Выберите страну",
//   icon: "./img/Icon/choise_country.svg",
//   search: true,
//   openList: true,
//   listType: "radio",
//   btncalssreset: ".btn-reset",
//   categoryInput: "country__popup-placeholder",
//   maxPlaceholderOpts: 2,
//   searchOptions: {
//     default: "Введите страну для поиска",
//   },
//   selectAll: false,
// });
// Город
// $("select.city__popup").multiselect({
//   columns: 2,
//   placeholder: "Выберите страну",
//   icon: "./img/Icon/choise_city.svg",
//   search: false,
//   openList: true,
//   listType: "radio",
//   btncalssreset: ".btn-reset",
//   categoryInput: "city__popup-placeholder",
//   maxPlaceholderOpts: 2,
//   searchOptions: {
//     default: "Введите город для поиска",
//   },
//   selectAll: false,
// });
// professional_skills
// $("select.professional_skills").multiselect({
//   columns: 1,
//   placeholder: "Выберите тип",
//   icon: "",
//   search: false,
//   openList: true,
//   onlyValue: true,
//   listType: "checkbox",
//   btncalssreset: ".btn-reset",
//   categoryInput: "professional_skills-placeholder",
//   maxPlaceholderOpts: 3,
//   searchOptions: {
//     default: "Введите город для поиска",
//   },
//   selectAll: false,
// });
// key_skills
// $("select.key_skills").multiselect({
//   columns: 1,
//   placeholder: "Выберите тип",
//   icon: "",
//   search: false,
//   openList: true,
//   onlyValue: true,
//   listType: "checkbox",
//   btncalssreset: ".btn-reset",
//   categoryInput: "key_skills-placeholder",
//   maxPlaceholderOpts: 3,
//   searchOptions: {
//     default: "Введите город для поиска",
//   },
//   selectAll: false,
// });








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
// $("select[multiple].client_status-select").multiselect({
//   columns: 3,
//   placeholder: "Семейный статус клиентов",
//   icon: "",
//   search: true,
//   openList: true,
//   listType: "checkbox",
//   categoryInput: "client_status-placeholder",
//   maxPlaceholderOpts: 3,
//   searchOptions: {
//     default: "Введите категорию для поиска",
//   },
//   selectAll: false,
// });
// $("select[multiple].family_status-select").multiselect({
//   columns: 2,
//   placeholder: "Социальные статусы клиентов",
//   icon: "",
//   search: true,
//   openList: true,
//   listType: "checkbox",
//   categoryInput: "family_status-placeholder",
//   maxPlaceholderOpts: 4,
//   searchOptions: {
//     default: "Введите категорию для поиска",
//   },
//   selectAll: false,
// });
// $("select[multiple].adv_source-select").multiselect({
//   columns: 3,
//   placeholder: "Социальные статусы клиентов",
//   icon: "",
//   search: true,
//   openList: true,
//   listType: "checkbox",
//   categoryInput: "adv_source-placeholder",
//   maxPlaceholderOpts: 3,
//   searchOptions: {
//     default: "Введите категорию для поиска",
//   },
//   selectAll: false,
// });
// $("select[multiple].company_size-select").multiselect({
//   columns: 3,
//   placeholder: "Социальные статусы клиентов",
//   icon: "",
//   search: true,
//   openList: true,
//   listType: "checkbox",
//   categoryInput: "company_size-placeholder",
//   maxPlaceholderOpts: 3,
//   searchOptions: {
//     default: "Введите категорию для поиска",
//   },
//   selectAll: false,
// });

// $("select[multiple].segment_client-select").multiselect({
//   columns: 2,
//   placeholder: "Социальные статусы клиентов",
//   icon: "",
//   search: true,
//   openList: true,
//   listType: "checkbox",
//   categoryInput: "segment_client-placeholder",
//   maxPlaceholderOpts: 4,
//   searchOptions: {
//     default: "Введите категорию для поиска",
//   },
//   selectAll: false,
// });

// $("select[multiple].adv_source_b2b-select").multiselect({
//   columns: 4,
//   placeholder: "Социальные статусы клиентов",
//   icon: "",
//   search: true,
//   openList: true,
//   listType: "checkbox",
//   categoryInput: "adv_source_b2b-placeholder",
//   maxPlaceholderOpts: 4,
//   searchOptions: {
//     default: "Введите категорию для поиска",
//   },
//   selectAll: false,
// });

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
