// Minus Plus Number
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

// Tab
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
  var secondarySlider = new Splide('#secondary-slider', {
    rewind: true,
    fixedWidth: 150,
    fixedHeight: 100,
    isNavigation: true,
    gap: 10,
    focus: 'left',
    pagination: false,
    cover: true,
    arrows: false,
    breakpoints: {
      '600': {
        fixedWidth: 150,
        fixedHeight: 100,
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

// Rating
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

/// Rating
jQuery(document).ready(function () {
  jQuery('.total-rating').click(function (evt) {
    evt.preventDefault();
    jQuery('html, body').animate({
      scrollTop: jQuery('#product-dec').offset().top
    }, 100);
    jQuery(".tab").removeClass("active");
    jQuery(".tab.second-tab").addClass("active");
    var sel = jQuery(".tab.second-tab").attr("data-toggle-target");
    jQuery(".tab-content").removeClass("active");
    jQuery(sel).addClass("active");
  });
});


// SlimSelect
new SlimSelect({
  select: "#weight",
  settings: {
    showSearch: false,
    placeholderText: "Wähle eine Option",
    allowDeselect: true,
  },
});

// Read More
$('.article').readmore({
  speed: 100,
  collapsedHeight: 100,
  lessLink: '<span class="readmore">Read less</span>'
});
