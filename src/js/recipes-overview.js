

// Read More
jQuery('.descriptive').readmore({
  speed: 100,
  collapsedHeight: 100,
  lessLink: '<span class="readmore">Read less</span>'
});

// SlimSelect
new SlimSelect({
  select: "#cut",
  settings: {
    showSearch: false,
    placeholderText: "Cut",
    allowDeselect: true,
  },
});

new SlimSelect({
  select: "#gang",
  settings: {
    showSearch: false,
    placeholderText: "Gang",
    allowDeselect: true,
  },
});

new SlimSelect({
  select: "#dauer-zubereitung",
  settings: {
    showSearch: false,
    placeholderText: "Dauer Zubereitung",
    allowDeselect: true,
  },
});


// Range Slider
jQuery(document).ready(function () {
  jQuery(".range-lable").click(function () {
    jQuery(".range-field").toggle();
  });
});

// Range Dropdown
function getValues(slide1, slide2) {
  let hours1 = Math.floor(slide1 / 60);
  let minutes1 = slide1 % 60;

  let hours2 = Math.floor(slide2 / 60);
  let minutes2 = slide2 % 60;

  return `${hours1}:${minutes1 < 10 ? '0' : ''}${minutes1} - ${hours2}:${minutes2 < 10 ? '0' : ''}${minutes2}`;
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
    let displayElement = sliderSections[x].getElementsByClassName("rangeValues")[0];

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


