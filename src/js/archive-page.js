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

jQuery(document).ready(function () {
  jQuery(".default-menu").hide();
  jQuery(".cat-menu-list").hover(function () {
    jQuery(".default-menu").stop().slideToggle();
  });
  if (jQuery(".cat-menu-list").hasClass("active")) {
    jQuery(".default-menu").removeAttr("style"); // Remove the style attribute
  }
});

//
jQuery(function () {
  jQuery(".minus, .plus").click(function () {
    var $input = jQuery(this).parent().find("input");
    var currentValue = parseInt($input.val());

    // Check if the current value is a valid non-negative integer
    if (!isNaN(currentValue) && currentValue >= 0) {
      // Increment or decrement only if the input value is a valid number
      $input
        .val(
          currentValue +
            (jQuery(this).hasClass("minus") && currentValue > 0 ? -1 : 1)
        )
        .change();
    } else {
      // If the input is not a valid number, set the value to 0
      $input.val(0).change();
    }

    return false;
    
  });
// Add an input event listener to validate the input on each change
  jQuery(".add-cart input").on("input", function () {
    var sanitizedValue = jQuery(this)
      .val()
      .replace(/[^0-9]/g, ""); // Remove non-numeric characters
    jQuery(this).val(sanitizedValue);
  });
  
});

// dropdown
jQuery(document).ready(function () {
  jQuery(".has-dropdown").each(function () {
    jQuery(this).on("click", function (e) {
      e.stopPropagation();
      jQuery(this).find(".dropdown-panel").toggleClass("hidden");
      jQuery(".has-dropdown").not(this).find(".dropdown-panel").addClass("hidden");
    });
  });
  jQuery(document).on("click", function (e) {
    if (!jQuery(e.target).closest(".has-dropdown").length) {
      jQuery(".dropdown-panel").addClass("hidden");
    }
  });
});

// cart
var cartOpen = false;
jQuery("body").on("click", ".js-toggle-cart", toggleCart);

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
  jQuery("body").addClass("open");
}

function closeCart() {
  cartOpen = false;
  jQuery("body").removeClass("open");
}

// menu
var menuOpen = false;
jQuery("body").on("click", ".js-toggle-menu", toggleMenu);

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
  jQuery("body").addClass("menuopen");
}

function closeMenu() {
  menuOpen = false;
  jQuery("body").removeClass("menuopen");
}

// nav
// $('.nav').before('<a class="nav__link sub__close" href="#"><i class="fas fa-chevron-left"></i> Back</a>');
jQuery(document).on("click", ".sub__close", function (e) {
  e.preventDefault();
  var activeItems = jQuery(".nav__sub.is-active");
  if (activeItems.length > 0) {
    activeItems.last().removeClass("is-active");
  }
});
jQuery(document).on("click", ".nav__link", function (e) {
  e.preventDefault();
  jQuery(this).siblings(".nav__sub").addClass("is-active");
});

//megaMenu
jQuery(document).ready(function () {
  jQuery("#megaMenu > li").on("mouseenter", function () {
    jQuery(this).find(".hs-mega-menu").stop(true, true).fadeIn(300);
  });
  jQuery("#megaMenu > li").on("mouseleave", function () {
    jQuery(this).find(".hs-mega-menu").stop(true, true).fadeOut(300);
  });
  // Initially hide the mega menu items on page load
  jQuery(".hs-mega-menu").hide();
});

//tab
jQuery(".tab").on("click", function (evt) {
  evt.preventDefault();
  jQuery(".tab").removeClass("active");
  jQuery(this).addClass("active");
  var sel = this.getAttribute("data-toggle-target");
  jQuery(".tab-content").removeClass("active");
  jQuery(sel).addClass("active");
});

// slide
jQuery(document).ready(function () {
  var currentIndex = 0;
  var slides = jQuery(".slide");
  var totalSlides = slides.length;
  for (var i = 0; i < totalSlides; i++) {
    jQuery(".pagination").append('<span class="dot"></span>');
  }
  updatePagination();

  jQuery(".next").click(function () {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlider();
    updatePagination();
  });

  jQuery(".prev").click(function () {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalSlides - 1;
    }
    updateSlider();
    updatePagination();
  });

  jQuery(".dot").click(function () {
    currentIndex = jQuery(this).index();
    updateSlider();
    updatePagination();
  });

  function updateSlider() {
    var translateValue = -currentIndex * 100 + "%";
    jQuery(".slider").css("transform", "translateX(" + translateValue + ")");
  }

  function updatePagination() {
    jQuery(".dot").removeClass("active");
    jQuery(".dot").eq(currentIndex).addClass("active");
  }
});

//
new SlimSelect({
  select: "#selectElement",
  settings: {
    showSearch: false,
    placeholderText: "Custom Placeholder Text",
    allowDeselect: true,
  },
});

new SlimSelect({
  select: "#multiple",
  settings: {
    showSearch: false,
    placeholderText: "Custom Placeholder Text",
     allowDeselect: true,
  },
});

new SlimSelect({
  select: "#multiple2",
  settings: {
    showSearch: false,
    placeholderText: "Custom Placeholder Text",
     allowDeselect: true,
  },
});

var slim = new SlimSelect({
  select: "#multiple3",
  settings: {
    showSearch: false,
    placeholderText: "Custom Placeholder Text",
     allowDeselect: true,
  },
});

var slim = new SlimSelect({
  select: "#multiple4",
  settings: {
    showSearch: false,
    placeholderText: "Custom Placeholder Text",
     allowDeselect: true,
  },
});


var slim = new SlimSelect({
  select: "#multiple5",
  settings: {
    showSearch: false,
    placeholderText: "Custom Placeholder Text",
     allowDeselect: true,
  },
});

var slim = new SlimSelect({
  select: "#multiple6",
  settings: {
    showSearch: false,
    placeholderText: "Custom Placeholder Text",
     allowDeselect: true,
  },
});

var slim = new SlimSelect({
  select: "#multiple7",
  settings: {
    showSearch: false,
    placeholderText: "Custom Placeholder Text",
     allowDeselect: true,
  },
});

var slim = new SlimSelect({
  select: "#multiple8",
  settings: {
    showSearch: false,
    placeholderText: "Custom Placeholder Text",
     allowDeselect: true,
  },
});

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

jQuery(document).ready(function () {
  // Toggle the range field visibility on click of the range label
  jQuery(".range-lable").click(function () {
    jQuery(".range-field").toggle();
  });
});

//
jQuery(document).ready(function () {
  // Accordion functionality
  jQuery(".flex-col li").click(function () {
    // Close all other accordion items
    jQuery(".flex-col li").not(this).removeClass("active");
    jQuery(".flex-col li").not(this).find("div").slideUp();

    // Toggle current accordion item
    jQuery(this).toggleClass("active");
    jQuery(this).find("div").slideToggle();
  });
});

//

jQuery(".toggle-password").click(function () {
  jQuery(this).toggleClass("eyes-slash");
  var input = jQuery(jQuery(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

///
jQuery(document).ready(function () {
  function AddReadMore() {
    var carLmt = 160;
    var readMoreTxt = " ...read more";
    var readLessTxt = " read less";
    jQuery(".add-read-more .term-description").each(function () {
      if ($(this).find(".first-section .term-description").length) return;
      var allstr = $(this).text();
      if (allstr.length > carLmt) {
        var firstSet = allstr.substring(0, carLmt);
        var secdHalf = allstr.substring(carLmt, allstr.length);
        var strtoadd =
          firstSet +
          "<span class='second-section'>" +
          secdHalf +
          "</span><span class='read-more'  title='Click to Show More'>" +
          readMoreTxt +
          "</span><span class='read-less' title='Click to Show Less'>" +
          readLessTxt +
          "</span>";
        jQuery(this).html(strtoadd);
      }
    });
    jQuery(document).on("click", ".read-more,.read-less", function () {
      jQuery(this)
        .closest(".add-read-more")
        .toggleClass("show-less-content show-more-content");
    });
  }

  AddReadMore();
});

//

$(document).ready(function () {
      var secondarySlider = new Splide('#secondary-slider', {
        rewind: true,
        fixedWidth: 150,
        fixedHeight: 80,
        isNavigation: true,
        gap: 10,
        focus: 'left',
        pagination: false,
        cover: true,
        arrows: false,
        breakpoints: {
          '600': {
            fixedWidth: 150,
            fixedHeight: 50,
          }
        }
      }).mount();

      var primarySlider = new Splide('#primary-slider', {
        rewind: true,
        isNavigation: true,
        type: 'fade',
        pagination: false,
        arrows: true,
        cover: true,
      });

      primarySlider.sync(secondarySlider).mount();
    });