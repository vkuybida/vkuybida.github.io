$(function(){

	// Product Filters
	$(".open-filters-button").on('click', function(e) {
		e.preventDefault()

		$('.products-wrapper').toggleClass('filter-active')
	})

	$('.filters-content .close').on('click', function(e) {
		e.preventDefault();

		$('.products-wrapper').removeClass('filter-active')
	});

	$('.filters-content .show-products').on('click', function(e) {
		e.preventDefault();
		
		$('.products-wrapper').removeClass('filter-active')
	})

	/* Main Menu */
	$(".menu-icon").click(function () {
		$("body").toggleClass("menu-active");
	});

		
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

	$('.tab-label').click(function(){
		var $this = $(this);
		var id = '#'+$this.attr("data-product-details-item");
		var activeId = '#'+$('.tabs .tab-label.active').attr("data-product-details-item");
		
		$('.tabs .tab-label.active').removeClass('active');
		$(activeId).css("display", "none");
		
		$this.addClass("active")
		$(id).css("display", "block");
    });

    $(".thumbnails-holder img").click(function () {
        var $this = $(this);
        var urlImg = $this.attr("src");
      
        $(".thumbnails-holder img").removeClass('active');
        $("#product-main-img").attr("src", urlImg);
        $this.addClass("active");
    });

	$(".tab-section-item").click(function(){
		var $this = $(this);
		
		if ($this.hasClass("active")) {
			$this.removeClass('active');
		} else {
			$this.addClass("active");
		}
	});
	
	$(".faq-item").click(function(){
		var $this = $(this);
		if ($this.hasClass("active")) {
			$this.removeClass('active');
		} else {
			$this.addClass("active");
		}
	});

	$(".dialog .close").click(function(){
		$("#share-dialog").removeClass('show'); 
	});

	$(".btn-share").click(function(){
		$("#share-dialog").addClass("show");
	});

	$(".thumbnails-holder img").click(function () {
        var $this = $(this);
        var urlImg = $this.attr("src");
      
        $(".thumbnails-holder img").removeClass('active');
        $("#recipe-main-img").attr("src", urlImg);
        $this.addClass("active");
    });

	/* Footer - Newsletter */
	$(".newsletter-holder .title").click(function () {
        $(this).parents('.newsletter-holder').toggleClass('active')
	});

	// Banner
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

	// Search
	$('.search-open-icon').click(function () {
		$('header').addClass('search-open');
		$('header .search-box-holder input').focus();
	});

	$('.search-close-icon').click(function(){
		$('header').removeClass('search-open');
	});

	/* Language */
	$('.selected-language').on('click', function() {
		$(this).parents('.language-selector').toggleClass('active')
	})


})