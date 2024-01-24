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



$(document).ready(function () {

  var splide = new Splide('.splide', {
    type: 'loop',
    perPage: 1,
    paginationDirection: 'ltr',
  });
  splide.mount();


  var splide = new Splide('#home-slider', {
    type: 'loop',
    perPage: 4,
    gap: 20,
    pagination: false,
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

  var splide = new Splide('#hero-slider', {
    type: 'loop',
    perPage: 1,
    gap: 20,
    pagination: false,
  });
  splide.mount();

  var splide = new Splide('#home-slider-tow', {
    type: 'loop',
    perPage: 3,
    gap: 20,
    pagination: false,
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



//  Alert 
$(".alert-close").on("click", function () {
  $("#alert-icon").addClass("hidden");
});



