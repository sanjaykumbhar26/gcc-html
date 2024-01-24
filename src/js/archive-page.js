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


// Range Dropdown
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

jQuery(document).ready(function () {
  jQuery(".range-lable").click(function () {
    jQuery(".range-field").toggle();
  });
});

// Read More
$('.article').readmore({
  speed: 100,
  collapsedHeight: 100,
  lessLink: '<span class="readmore">Read less</span>'
});

