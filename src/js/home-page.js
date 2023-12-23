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

// Accordion
jQuery(document).ready(function () {
  jQuery(".flex-col li").click(function () {
    jQuery(".flex-col li").not(this).removeClass("active");
    jQuery(".flex-col li").not(this).find("div").slideUp();
    jQuery(this).toggleClass("active");
    jQuery(this).find("div").slideToggle();
  });
});

// Slider
$(document).ready(function () {
  var splide = new Splide('#home-slider', {
    type: 'loop',
    perPage: 4,
    gap: 10,
    breakpoints: {
      1024: {
        perPage: 2,
      },
      767: {
        perPage: 1,
      },
    }
  });
  splide.mount();
});



