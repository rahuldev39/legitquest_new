$(window).on('load', function() {
	$('.sk-fading-circle').fadeOut();
	$('.preload').delay(350).fadeOut('slow');
});

'use strict';


function is_display_type(display_type) {
  return $('.display-type').css('content') == display_type || $('.display-type').css('content') == '"' + display_type + '"';
}
function not_display_type(display_type) {
  return $('.display-type').css('content') != display_type && $('.display-type').css('content') != '"' + display_type + '"';
}

// Initiate on click and on hover sub menu activation logic
function os_init_sub_menus() {

  // INIT MENU TO ACTIVATE ON HOVER
  var menu_timer;
  $('.menu-activated-on-hover').on('mouseenter', 'ul.main-menu > li.has-sub-menu', function () {
    var $elem = $(this);
    clearTimeout(menu_timer);
    $elem.closest('ul').addClass('has-active').find('> li').removeClass('active');
    $elem.addClass('active');
  });

  $('.menu-activated-on-hover').on('mouseleave', 'ul.main-menu > li.has-sub-menu', function () {
    var $elem = $(this);
    menu_timer = setTimeout(function () {
      $elem.removeClass('active').closest('ul').removeClass('has-active');
    }, 30);
  });

  // INIT MENU TO ACTIVATE ON CLICK
  $('.menu-activated-on-click').on('click', 'li.has-sub-menu > a', function (event) {
    var $elem = $(this).closest('li');
    if ($elem.hasClass('active')) {
      $elem.removeClass('active');
    } else {
      $elem.closest('ul').find('li.active').removeClass('active');
      $elem.addClass('active');
    }
    return false;
  });
}

$(function () {



  // #16. OUR OWN CUSTOM DROPDOWNS
  $('.os-dropdown-trigger').on('mouseenter', function () {
    $(this).addClass('over');
  });
  $('.os-dropdown-trigger').on('mouseleave', function () {
    $(this).removeClass('over');
  });

  // #17. BOOTSTRAP RELATED JS ACTIVATIONS

  // - Activate tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // - Activate popovers
  $('[data-toggle="popover"]').popover();





  // #22. Colors Toggler

  $('.floated-colors-btn').on('click', function () {
    if ($('body').hasClass('color-scheme-dark')) {
      $('.menu-w').removeClass('color-scheme-dark').addClass('color-scheme-light').removeClass('selected-menu-color-bright').addClass('selected-menu-color-light');
      $(this).find('.os-toggler-w').removeClass('on');
    } else {
      $('.menu-w, .top-bar').removeClass(function (index, className) {
        return (className.match(/(^|\s)color-scheme-\S+/g) || []).join(' ');
      });
      $('.menu-w').removeClass(function (index, className) {
        return (className.match(/(^|\s)color-style-\S+/g) || []).join(' ');
      });
      $('.menu-w').addClass('color-scheme-dark').addClass('color-style-transparent').removeClass('selected-menu-color-light').addClass('selected-menu-color-bright');
      $('.top-bar').addClass('color-scheme-transparent');
      $(this).find('.os-toggler-w').addClass('on');
    }
    $('body').toggleClass('color-scheme-dark');
    return false;
  });

  // #23. Autosuggest Search
  $('.autosuggest-search-activator').on('click', function () {
    var search_offset = $(this).offset();
    // If input field is in the activator - show on top of it
    if ($(this).find('input[type="text"]')) {
      search_offset = $(this).find('input[type="text"]').offset();
    }
    var search_field_position_left = search_offset.left;
    var search_field_position_top = search_offset.top;
    $('.search-with-suggestions-w').css('left', search_field_position_left).css('top', search_field_position_top).addClass('over-search-field').fadeIn(300).find('.search-suggest-input').focus();
    return false;
  });

  $('.search-suggest-input').on('keydown', function (e) {

    // Close if ESC was pressed
    if (e.which == 27) {
      $('.search-with-suggestions-w').fadeOut();
    }

    // Backspace/Delete pressed
    if (e.which == 46 || e.which == 8) {
      // This is a test code, remove when in real life usage
      $('.search-with-suggestions-w .ssg-item:last-child').show();
      $('.search-with-suggestions-w .ssg-items.ssg-items-blocks').show();
      $('.ssg-nothing-found').hide();
    }

    // Imitate item removal on search, test code
    if (e.which != 27 && e.which != 8 && e.which != 46) {
      // This is a test code, remove when in real life usage
      $('.search-with-suggestions-w .ssg-item:last-child').hide();
      $('.search-with-suggestions-w .ssg-items.ssg-items-blocks').hide();
      $('.ssg-nothing-found').show();
    }
  });

  $('.close-search-suggestions').on('click', function () {
    $('.search-with-suggestions-w').fadeOut();
    return false;
  });

  // #24. Element Actions
  $('.element-action-fold').on('click', function () {
    var $wrapper = $(this).closest('.element-wrapper');
    $wrapper.find('.element-box-tp, .element-box').toggle(0);
    var $icon = $(this).find('i');

    if ($wrapper.hasClass('folded')) {
      $icon.removeClass('os-icon-plus-circle').addClass('os-icon-minus-circle');
      $wrapper.removeClass('folded');
    } else {
      $icon.removeClass('os-icon-minus-circle').addClass('os-icon-plus-circle');
      $wrapper.addClass('folded');
    }
    return false;
  });
});
