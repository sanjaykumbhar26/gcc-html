// Toggle Password
jQuery(".toggle-password").click(function () {
    jQuery(this).toggleClass("eyes-slash");
    var input = jQuery(jQuery(this).attr("toggle"));
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});