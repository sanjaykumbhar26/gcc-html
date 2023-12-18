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

// SlimSelect
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

// Range Dropdown

jQuery(document).ready(function () {
  jQuery(".range-lable").click(function () {
    jQuery(".range-field").toggle();
  });
});

//  Read More
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

