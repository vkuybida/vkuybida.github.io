$(function(){

	/* Main Menu */
	$(".menu-icon").click(function () {
		$("body").toggleClass("menu-active");
	});

	// Header - Search
	$('.search-open-icon').click(function () {
		$('header').addClass('search-open');
		$('header .search-box-holder input').focus();
	});

	$('.search-close-icon').click(function(){
		$('header').removeClass('search-open');
	});

	/* Language Selector */
	$('.selected-language').on('click', function() {
		$(this).parents('.language-selector').toggleClass('active')
	})

	/* Footer - Newsletter */
	$(".newsletter-holder .title").click(function () {
        $(this).parents('.newsletter-holder').toggleClass('active')
	});

	// Generic Slider
	$(".generic-slider .slider").slick({
		slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
		autoplaySpeed: 3000,
		dots: true,
		responsive: [
			{
				breakpoint: 480,
				settings: {
					arrows: false,
				}
			}
		]
	});

	// Product and Recipes Filters
	$(".open-filters-button").on('click', function(e) {
		e.preventDefault()

		$('.content-with-filters').toggleClass('filter-active')
	})

	$('.filters-content .close').on('click', function(e) {
		e.preventDefault();

		$('.content-with-filters').removeClass('filter-active')
	});

	$('.filters-content .show-products').on('click', function(e) {
		e.preventDefault();
		
		$('.content-with-filters').removeClass('filter-active')
	})

	/* TODO: currently it is hidden */
	$('.slider-wrapper .slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 700,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 2,
				  infinite: true,
				}
			  }
			  ,{
				breakpoint: 550,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1
				}
			  }, {
				breakpoint: 480,
				settings: "unslick"
			 }
		]
	});

	/* Product/Recipe Details - image selector */
	$(".thumbnails-holder img").click(function () {
        var $this = $(this);

		// display main image
		var $parent = $(this).parents('.images-holder')
        var newImageUrl = $this.attr("src");
		$parent.find('.main-image').attr("src", newImageUrl);
      
		// change selected in list
        $(".thumbnails-holder img").removeClass('active');
        $this.addClass("active");
    });

	/* Product Details */
	$('.tab-label').click(function(){
		var $this = $(this);
		var id = '#'+$this.attr("data-product-details-item");
		var activeId = '#'+$('.tabs .tab-label.active').attr("data-product-details-item");
		
		$('.tabs .tab-label.active').removeClass('active');
		$(activeId).css("display", "none");
		
		$this.addClass("active")
		$(id).css("display", "block");
    });

	$(".tab-section-item").click(function(){
		var $this = $(this);
		
		if ($this.hasClass("active")) {
			$this.removeClass('active');
		} else {
			$this.addClass("active");
		}
	});
	
	/* Recipe Details */
	$(".dialog .close").click(function(){
		$("#share-dialog").removeClass('show'); 
	});

	$(".btn-share").click(function(){
		$("#share-dialog").addClass("show");
	});

	/* Inspirations Landing - Filters */
	$('body').on('click', '.filters-panel .filters-item .filters-title', function (e) {
        e.stopPropagation();
        $(this).parent().siblings('.filters-item').removeClass('active');
        $(this).parent().toggleClass('active');
    });

    $('body').on('click', function () {
		$('.filters-panel .filters-item').removeClass('active');
	});

	/* FAQ */
	$(".faq-item .question").click(function(){
		var $holder = $(this).parent();
		if ($holder.hasClass("active")) {
			$holder.removeClass('active');
		} else {
			$holder.addClass("active");
		}
	});
})