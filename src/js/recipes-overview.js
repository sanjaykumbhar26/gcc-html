

// Read More
jQuery(document).ready(function () {
  jQuery(".show-more").click(function () {
    if (jQuery(".full-dec").is(":visible")) {
      jQuery(".short").show();
      jQuery(".full-dec").hide();
      jQuery(".show-more").text("read more");
    } else {
      jQuery(".short").hide();
      jQuery(".full-dec").show();
      jQuery(".show-more").text("read less");
    }
  });
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