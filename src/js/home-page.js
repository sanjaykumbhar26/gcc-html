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

// Slider
$(document).ready(function () {
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



