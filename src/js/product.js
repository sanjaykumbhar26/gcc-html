// Minus Plus Number
jQuery(function () {
  jQuery(".minus, .plus").click(function () {
    var $input = jQuery(this).parent().find("input");
    var currentValue = parseInt($input.val());
    if (isNaN(currentValue)) {
      currentValue = 1;
    }
    if (jQuery(this).hasClass("minus")) {
      $input.val(Math.max(1, currentValue - 1)).change();
    } else {
      $input.val(currentValue + 1).change();
    }
    return false;
  });

  jQuery(".add-cart input").on("input", function () {
    var sanitizedValue = jQuery(this)
      .val()
      .replace(/[^1-9]/g, ""); // Remove non-numeric characters
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
jQuery(document).ready(function () {
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
  Array.from(dropdown.options).forEach(option => {
    option.removeAttribute('selected');
  });
  const selectedOption = dropdown.options[rating - 1];
  selectedOption.setAttribute('selected', 'selected');
}
function handleDropdownChange() {
  const dropdown = document.getElementById('ratingDropdown');
  const selectedValue = dropdown.value;
  handleRating(parseInt(selectedValue));
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

/// total rating
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

new SlimSelect({
  select: "#weight2",
  settings: {
    showSearch: false,
    placeholderText: "Wähle eine Option",
    allowDeselect: true,
  },
});

// Read More
jQuery('.descriptive').readmore({
  speed: 100,
  collapsedHeight: 100,
  lessLink: '<span class="readmore">Read less</span>'
});


jQuery('.heart-icon').on('click', function () {
  jQuery(this).toggleClass('active');
});
