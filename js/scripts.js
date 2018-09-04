WebFont.load({
  google: {
    families: ["PT Serif:400,400italic,700,700italic", "Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic", "Poppins:300,regular,500,600,700"]
  }
});
/*************************************
  Pt serif font end
 *************************************/

var options = {
data: ["blue", "green", "pink", "red", "yellow"],
};

$("#basics").easyAutocomplete(options);

/*************************************
  Autocomplete dropdown end
 *************************************/


var navbar = $(".navbar-v2"),
    body = $("html,body");
  function track (e) {
    navbar.toggleClass("top", $(window).scrollTop() > 0);
  }
  $(window).on("scroll", track);
  $(window).on("load", track);

  /*************************************
    navigationbar top fixed end
   *************************************/



  $('.selectpicker').selectpicker({
    size: 10,
    style: 'btn-primary',
  });
  /*************************************
    slect picker
   *************************************/

  $('.featured-slider').owlCarousel({
    center: true,
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 4
      },
      1000: {
        items: 8
      }
    }
  })
  /*************************************
    featured slider end
   *************************************/

  $('.testimonial-slider').owlCarousel({
    center: true,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })
  /*************************************
    testimonial slider end
   *************************************/


  $('.banner-slider').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    autoplay:true,
    mouseDrag:false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
/*************************************
  banner slider end
 *************************************/

$(document).ready(function() {
$("input[name=search-radio]").on( "change", function() {
     var test = $(this).val();
     var sText = $(this).next().text();
     $(".search-field").removeClass('show');
     $("#"+test).addClass('show');
     $(".select-btn").text(sText)
} );

$(".select-radio label span").on("click", function() {
  $("#select-dropdown").removeClass("show");
});

$(document).on('click',function(e) {
    e.stopPropagation();
    var container = $("#select-dropdown");
    //check if the clicked area is dropDown or not
    if (container.has(e.target).length === 0) {
        $('#select-dropdown').removeClass('show');
    }
});
});
/*************************************
  search dropdown slection end
 *************************************/

$('[data-fancybox]').fancybox({


});

/*************************************
  fancybox end
 *************************************/

var jump=function(e){

e.preventDefault();                        //prevent "hard" jump
  var target = $(this).attr("href");       //get the target

      //perform animated scrolling
      $('html,body').animate(
        {
          scrollTop: $(target).offset().top - document.getElementById('nav').offsetHeight + 2  //get top-position of target-element and set it as scroll target
        },1000,function()                  //scrolldelay: 1 seconds
        {
                  //attach the hash (#jumptarget) to the pageurl
        });
      }

$(document).ready(function()
{
  $('a[href*="#"]').bind("click", jump); //get all hrefs
  return false;
});
/*************************************
  smooth scrollspy end
 *************************************/



$(document).ready(function() {
/******************************
    BOTTOM SCROLL TOP BUTTON
 ******************************/

// declare variable
var scrollTop = $(".scroll-top-wrapper");

$(window).scroll(function() {
  // declare variable
  var topPos = $(this).scrollTop();
  if (topPos > 100) {
    $(scrollTop).css("opacity", "1");

  } else {
    $(scrollTop).css("opacity", "0");
  }

});

//Click event to scroll to top
$(scrollTop).click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;

});
});
/*************************************
  scroll top end
 *************************************/
