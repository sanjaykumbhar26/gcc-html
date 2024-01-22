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

// Range Dropdown
jQuery(document).ready(function () {
  jQuery(".range-lable").click(function () {
    jQuery(".range-field").toggle();
  });
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



// Cat

jQuery(document).ready(function () {
  jQuery(".default-menu").hide();
  jQuery(".cat-menu-list").hover(function () {
    jQuery(".default-menu").stop().slideToggle();
  });
  if (jQuery(".cat-menu-list").hasClass("active")) {
    jQuery(".default-menu").removeAttr("style"); // Remove the style attribute
  }
});

// Minus Plus
jQuery(function () {
  jQuery(".minus, .plus").click(function () {
    var $input = jQuery(this).parent().find("input");
    var currentValue = parseInt($input.val());
    if (!isNaN(currentValue) && currentValue >= 0) {
      $input
        .val(
          currentValue +
          (jQuery(this).hasClass("minus") && currentValue > 0 ? -1 : 1)
        )
        .change();
    } else {
      $input.val(0).change();
    }

    return false;

  });
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

// Accordion


// Toggle Password

jQuery(".toggle-password").click(function () {
  jQuery(this).toggleClass("eyes-slash");
  var input = jQuery(jQuery(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

// Read More
jQuery(document).ready(function () {
  function AddReadMore() {
    var carLmt = 470;
    var readMoreTxt = " ...read more";
    var readLessTxt = " read less";
    jQuery(".add-read-more .term-description").each(function () {
      if ($(this).find(".term-description").length) return;
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

jQuery(document).ready(function () {
  jQuery(".show-more").click(function () {
    if (jQuery(".full-dec").is(":visible")) {
      jQuery(".short").show();
      jQuery(".full-dec").hide();
      jQuery(".show-more").text("read more");
    } else {
      jQuery(".short").hide();
      jQuery(".full-dec").show();
      jQuery(".show-more").text("read less");
    }
  });
});


// rating
let selectedRating = 0;
function handleRating(rating) {
  selectedRating = rating;
  updateIcon();
  const dropdown = document.getElementById('ratingDropdown');
  dropdown.value = rating;
  dropdown.dispatchEvent(new Event('change'));
}
function updateIcon() {
  const stars = document.querySelectorAll('.star');
  stars.forEach((star, index) => {
    if (index < selectedRating) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
}


// 
// SlimSelect
new SlimSelect({
  select: "#origin",
  settings: {
    showSearch: false,
    placeholderText: "ORIGIN",
    allowDeselect: true,
  },
});

new SlimSelect({
  select: "#cut",
  settings: {
    showSearch: false,
    placeholderText: "CUT",
    allowDeselect: true,
  },
});

new SlimSelect({
  select: "#stock-status",
  settings: {
    showSearch: false,
    placeholderText: "STOCK STATUS",
    allowDeselect: true,
  },
});

var slim = new SlimSelect({
  select: "#Sortedpopularity",
  settings: {
    showSearch: false,
    placeholderText: "Sorted by popularity",
    allowDeselect: true,
  },
});


// accordion
$(document).ready(function () {
  var accordionSelected = null;
  $('#accordion h4').on('click', function () {
    var accordionIndex = $(this).data('index');
    if (accordionSelected !== accordionIndex) {
      accordionSelected = accordionIndex;
    } else {
      accordionSelected = null;
    }

    // Toggle visibility of corresponding content for accordion
    $('#accordion p').each(function () {
      var contentIndex = $(this).data('index');
      $(this).toggle(contentIndex === accordionSelected);
    });

    // Toggle arrow direction for accordion
    $('#accordion h4 span.arrow').removeClass('arrow-up');
    $(this).find('span.arrow').toggleClass('arrow-up', accordionSelected === accordionIndex);

    // Toggle active class for accordion header
    $('#accordion h4').removeClass('active');
    $(this).toggleClass('active', accordionSelected === accordionIndex);
  });
});


