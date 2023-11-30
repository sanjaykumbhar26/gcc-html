(jQuery.event.special.touchstart = {
  setup: function (e, t, s) {
    this.addEventListener("touchstart", s, {
      passive: !t.includes("noPreventDefault"),
    });
  },
}),
  (jQuery.event.special.touchmove = {
    setup: function (e, t, s) {
      this.addEventListener("touchmove", s, {
        passive: !t.includes("noPreventDefault"),
      });
    },
  }),
  (jQuery.event.special.wheel = {
    setup: function (e, t, s) {
      this.addEventListener("wheel", s, { passive: !0 });
    },
  }),
  (jQuery.event.special.mousewheel = {
    setup: function (e, t, s) {
      this.addEventListener("mousewheel", s, { passive: !0 });
    },
  });

$(document).ready(function () {
  // Set default state
  $(".default-menu").hide(); // Hide the default menu initially
  // Handle click event
  $(".cat-menu-list").on("click", function () {
    $(".default-menu").slideToggle();
    $(".dropdown-overlay").show();
  });

  $(".cat-menu-list").hover(
    function () {
      $(".default-menu").stop().slideToggle()
    }
  );

  // Check if the "active" class is present initially
  if ($(".cat-menu-list").hasClass("active")) {
    $(".default-menu").removeAttr("style"); // Remove the style attribute
  }
});

//
//
$(function () {
  $(".minus, .plus").click(function () {
    var $input = $(this).parent().find("input");
    $input
      .val(
        Math.max(
          1,
          parseInt($input.val()) + ($(this).hasClass("minus") ? -1 : 1)
        )
      )
      .change();
    return false;
  });
});

// dropdown
$(document).ready(function () {
  $(".has-dropdown").each(function () {
    $(this).on("click", function (e) {
      e.stopPropagation();
      $(this).find(".dropdown-panel").toggleClass("hidden");
      $(".has-dropdown").not(this).find(".dropdown-panel").addClass("hidden");
    });
  });
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".has-dropdown").length) {
      $(".dropdown-panel").addClass("hidden");
    }
  });
});

// cart
var cartOpen = false;
$("body").on("click", ".js-toggle-cart", toggleCart);

function toggleCart(e) {
  e.preventDefault();
  if (cartOpen) {
    closeCart();
    return;
  }
  openCart();
}

function openCart() {
  cartOpen = true;
  $("body").addClass("open");
}

function closeCart() {
  cartOpen = false;
  $("body").removeClass("open");
}

// menu
var menuOpen = false;
$("body").on("click", ".js-toggle-menu", toggleMenu);

function toggleMenu(e) {
  e.preventDefault();
  if (menuOpen) {
    closeMenu();
    return;
  }
  openMenu();
}

function openMenu() {
  menuOpen = true;
  $("body").addClass("menuopen");
}

function closeMenu() {
  menuOpen = false;
  $("body").removeClass("menuopen");
}

// nav
// $('.nav').before('<a class="nav__link sub__close" href="#"><i class="fas fa-chevron-left"></i> Back</a>');
$(document).on("click", ".sub__close", function (e) {
  e.preventDefault();
  var activeItems = $(".nav__sub.is-active");
  if (activeItems.length > 0) {
    activeItems.last().removeClass("is-active");
  }
});
$(document).on("click", ".nav__link", function (e) {
  e.preventDefault();
  $(this).siblings(".nav__sub").addClass("is-active");
});

//megaMenu
$(document).ready(function () {
  $("#megaMenu > li").on("mouseenter", function () {
    $(this).find(".hs-mega-menu").stop(true, true).fadeIn(300);
  });
  $("#megaMenu > li").on("mouseleave", function () {
    $(this).find(".hs-mega-menu").stop(true, true).fadeOut(300);
  });
  // Initially hide the mega menu items on page load
  $(".hs-mega-menu").hide();
});

//tab
$(".tab").on("click", function (evt) {
  evt.preventDefault();
  $(".tab").removeClass("active");
  $(this).addClass("active");
  var sel = this.getAttribute("data-toggle-target");
  $(".tab-content").removeClass("active");
  $(sel).addClass("active");
});


// slide
$(document).ready(function () {
  var currentIndex = 0;
  var slides = $(".slide");
  var totalSlides = slides.length;
  for (var i = 0; i < totalSlides; i++) {
    $(".pagination").append('<span class="dot"></span>');
  }
  updatePagination();

  $(".next").click(function () {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlider();
    updatePagination();
  });

  $(".prev").click(function () {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalSlides - 1;
    }
    updateSlider();
    updatePagination();
  });

  $(".dot").click(function () {
    currentIndex = $(this).index();
    updateSlider();
    updatePagination();
  });

  function updateSlider() {
    var translateValue = -currentIndex * 100 + "%";
    $(".slider").css("transform", "translateX(" + translateValue + ")");
  }

  function updatePagination() {
    $(".dot").removeClass("active");
    $(".dot").eq(currentIndex).addClass("active");
  }
});

//
new SlimSelect({
  select: "#selectElement",
  settings: {
     showSearch: false,
  }
});

new SlimSelect({
  select: '#multiple',
  settings: {
     showSearch: false,
  }
})

new SlimSelect({
  select: '#multiple2',
  settings: {
     showSearch: false,
  }
})


//


function getValues(slide1, slide2) {
  if (slide1 > slide2) {
    [slide1, slide2] = [slide2, slide1];
  }

  return "$" + slide1 + " - $" + slide2;
}

function updateDisplay(sliders, displayElement) {
  let slide1 = parseFloat(sliders[0].value);
  let slide2 = parseFloat(sliders[1].value);
  displayElement.innerHTML = getValues(slide1, slide2);
}

window.onload = function () {
  let sliderSections = document.getElementsByClassName("range-slider");
  for (let x = 0; x < sliderSections.length; x++) {
    let sliders = sliderSections[x].getElementsByTagName("input");
    let displayElement =
      sliderSections[x].getElementsByClassName("rangeValues")[0];

    for (let y = 0; y < sliders.length; y++) {
      if (sliders[y].type === "range") {
        sliders[y].oninput = function () {
          updateDisplay([sliders[0], sliders[1]], displayElement);
        };

        sliders[y].oninput(); // Initial update
      }
    }
  }
};

//

$(document).ready(function () {
  // Toggle the range field visibility on click of the range label
  $(".range-lable").click(function () {
    $(".range-field").toggle();
  });
});


//
$(document).ready(function() {
    // Accordion functionality
    $('.flex-col li').click(function() {
      // Close all other accordion items
      $('.flex-col li').not(this).removeClass('active');
      $('.flex-col li').not(this).find('div').slideUp();

      // Toggle current accordion item
      $(this).toggleClass('active');
      $(this).find('div').slideToggle();
    });
});
  

//

$(".toggle-password").click(function() {
  $(this).toggleClass("eyes-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});