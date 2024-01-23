
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

