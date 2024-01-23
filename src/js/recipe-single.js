
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


// SlimSelect
new SlimSelect({
  select: "#person",
  settings: {
    showSearch: false,
    placeholderText: "Person",
  },
});


//

$(document).ready(function () {
  $('#ingredientList li span').each(function () {
    $(this).data('original', parseInt($(this).text().replace(',', '')));
  });
  $('#person').on('change', function () {
    var selectedValue = parseInt($(this).val());

    if (isNaN(selectedValue) || selectedValue < 1) {
      selectedValue = 1;
    }

    $('#ingredientList li').each(function () {
      var spanElement = $(this).find('span');
      var originalValue = spanElement.data('original');
      spanElement.text(originalValue * selectedValue);
    });
  });
});
