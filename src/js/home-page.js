//tab
jQuery(".tab").on("click", function (evt) {
  evt.preventDefault();
  jQuery(".tab").removeClass("active");
  jQuery(this).addClass("active");
  var sel = this.getAttribute("data-toggle-target");
  jQuery(".tab-content").removeClass("active");
  jQuery(sel).addClass("active");
});

// Slider
jQuery(document).ready(function () {
  var splide = new Splide('.slider-hero', {
    type: 'loop',
    perPage: 1,
    paginationDirection: 'ltr',
  });
  splide.mount();

  new Splide('.home-slider', {
    type: 'loop',
    perPage: 4,
    trimSpace: true,
    gap: "30px",
    breakpoints: {
      1024: {
        perPage: 2,
      },
      640: {
        perPage: 2,
      },
    }
  }).mount();

  new Splide('.splide-map', {
    type: 'loop',
    perPage: 3,
    arrows: true,
    cloneStatus: false,
    trimSpace: true,
    gap: "30px",
    breakpoints: {
      1024: {
        perPage: 2,
      },
      640: {
        perPage: 2,
      },
    }
  }).mount();

});


PopoverComponent.init({
  ele: '.popover-map',
  showOnHover: true
});





//  Alert 
jQuery(".alert-close").on("click", function () {
  jQuery("#alert-icon").addClass("hidden");
});



