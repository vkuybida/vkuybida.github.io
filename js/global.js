$(document).ready(function () {
/* Sticky menu */
    window.onscroll = function() {myFunction()};
        var navbar = document.getElementById("header");
        var sticky = navbar.offsetTop;
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }

/* Search placeholder change on mobile */
    if ($(window).width() < 1060 ) {
        $(".search-holder input").attr("placeholder","Search McCain");
    }
    else { $(".search-holder input").attr("placeholder","Type to search here...");}


/* Search */
    $('header .top .search-icon').click(function () {
        $('header').toggleClass('active'); return false;
    });

/* cookie-policy */
    $('.cookie-policy .close').click(function () {
        $('.cookie-policy').toggle(); return false;
    });

/* mobile-menu */
    $('.mobile-menu').click(function () {
        $(this).toggleClass('active');
        $('#header').toggleClass('active');
        $('header .top').toggleClass('active');
        $('header .navigation-holder').toggleClass('active');  return false;
    });

/* Product selector and FAQ */
    $('.selector-item h2').click(function () {
        $(this).parent('.selector-item').toggleClass('active'); return false;
    });
    $('.faq-item h3').click(function () {
        $(this).parent('.faq-item').toggleClass('active'); return false;
    });

/* Menu subitems */
    if ($(window).width() < 1060) {
        $('.menu-item.subitems').click(function () {
            $(this).toggleClass('active'); return false;
        });
    }
    else {
        return false;
    }
});