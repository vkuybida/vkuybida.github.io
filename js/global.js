$(document).ready(function () {
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
});