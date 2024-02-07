// Menu sidebar category
jQuery(document).ready(function () {
    jQuery(".default-menu").hide();
    jQuery(".cat-menu-list").hover(function () {
        jQuery(".default-menu").stop().slideToggle();
    });
    if (jQuery(".cat-menu-list").hasClass("active")) {
        jQuery(".default-menu").removeAttr("style"); // Remove the style attribute
    }
});

// Main menu Dropdown
jQuery(document).ready(function () {
    jQuery(".has-dropdown").each(function () {
        jQuery(this).on("click", function (e) {
            e.stopPropagation();
            jQuery(this).find(".dropdown-panel").toggleClass("hidden");
            jQuery(".has-dropdown").not(this).find(".dropdown-panel").addClass("hidden");
        });
    });
    jQuery(document).on("click", function (e) {
        if (!jQuery(e.target).closest(".has-dropdown").length) {
            jQuery(".dropdown-panel").addClass("hidden");
        }
    });
});

// Cart
var cartOpen = false;
jQuery("body").on("click", ".js-toggle-cart", toggleCart);

function toggleCart(e) {
    e.preventDefault();
    if (cartOpen) {
        closeCart();
        return;
    }
    openCart();
}
function openCart() {
    cartOpen = true;
    jQuery("body").addClass("open");
}
function closeCart() {
    cartOpen = false;
    jQuery("body").removeClass("open");
}

// Menu
var menuOpen = false;
jQuery("body").on("click", ".js-toggle-menu", toggleMenu);

function toggleMenu(e) {
    e.preventDefault();
    if (menuOpen) {
        closeMenu();
        return;
    }
    openMenu();
}

function openMenu() {
    menuOpen = true;
    jQuery("body").addClass("menuopen");
}

function closeMenu() {
    menuOpen = false;
    jQuery("body").removeClass("menuopen");
}

// jQuery(document).on("click", ".sub__close, .nav__link", function (e) {
//     e.preventDefault();

//     if (jQuery(this).hasClass("sub__close")) {
//         var activeItems = jQuery(".nav__sub.is-active");
//         if (activeItems.length > 0) {
//             activeItems.last().removeClass("is-active");
//         }
//     } else if (jQuery(this).hasClass("nav__link")) {
//         jQuery(this).siblings(".nav__sub").addClass("is-active");
//     }
// });

jQuery(document).on("click", ".sub__close, .nav__link", function (e) {
    e.preventDefault();

    if (jQuery(this).hasClass("sub__close")) {
        var activeItems = jQuery(".nav__sub.is-active");
        if (activeItems.length > 0) {
            activeItems.last().removeClass("is-active");
        }
    } else if (jQuery(this).hasClass("nav__link")) {
        jQuery(this).siblings(".nav__sub").addClass("is-active");
    }

    // Check if there are any active sub-menus
    var anyActiveSubmenu = jQuery(".nav__sub.is-active").length > 0;

    // Toggle visibility of the back button based on the presence of active sub-menus
    if (anyActiveSubmenu) {
        jQuery(".sub__close").removeClass("hidden");
    } else {
        jQuery(".sub__close").addClass("hidden");
    }
});


jQuery(document).ready(function () {
    jQuery("#megaMenu > li").on("mouseenter", function () {
        jQuery(this).find(".hs-mega-menu").stop(true, true).fadeIn(300);
    });
    jQuery("#megaMenu > li").on("mouseleave", function () {
        jQuery(this).find(".hs-mega-menu").stop(true, true).fadeOut(300);
    });
    jQuery(".hs-mega-menu").hide();
});

