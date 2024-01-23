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


// Read More
$('.article').readmore({
  speed: 100,
  collapsedHeight: 80,
  lessLink: '<span class="readmore">Read less</span>'
});

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


