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
jQuery('.descriptive').readmore({
  speed: 100,
  collapsedHeight: 80,
  lessLink: '<span class="readmore">Read less</span>'
});

// SlimSelect
var selectorigin = jQuery('#origin');
var placeholderorigin = selectorigin.data('placeholder');
new SlimSelect({
  select: "#origin",
  settings: {
    showSearch: false,
    placeholderText: placeholderorigin,
    allowDeselect: true,
  },
});

var selectcut = jQuery('#cut');
var placeholdercut = selectcut.data('placeholder');
new SlimSelect({
  select: "#cut",
  settings: {
    showSearch: false,
    placeholderText: placeholdercut,
    allowDeselect: true,
  },
});

var selectstatus = jQuery('#stock-status');
var placeholderstatus = selectstatus.data('placeholder');
new SlimSelect({
  select: "#stock-status",
  settings: {
    showSearch: false,
    placeholderText: placeholderstatus,
    allowDeselect: true,
  },
});

var selectElement = $('#Sortedpopularity');
var placeholderText = selectElement.data('placeholder');
var slim = new SlimSelect({
  select: "#Sortedpopularity",
  settings: {
    showSearch: false,
    placeholderText: placeholderText,
    allowDeselect: false,
  },
});


// accordion
jQuery(document).ready(function () {
  var accordionSelected = null;
  jQuery('#accordion h4').on('click', function () {
    var accordionIndex = jQuery(this).data('index');
    if (accordionSelected !== accordionIndex) {
      accordionSelected = accordionIndex;
    } else {
      accordionSelected = null;
    }

    jQuery('#accordion p').each(function () {
      var contentIndex = jQuery(this).data('index');
      $(this).toggle(contentIndex === accordionSelected);
    });

    jQuery('#accordion h4 span.arrow').removeClass('arrow-up');
    jQuery(this).find('span.arrow').toggleClass('arrow-up', accordionSelected === accordionIndex);

    jQuery('#accordion h4').removeClass('active');
    jQuery(this).toggleClass('active', accordionSelected === accordionIndex);
  });
});


