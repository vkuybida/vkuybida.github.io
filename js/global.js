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


	$(".menu-open").click(function () {
		$(".mobile-menu-section").css("display", "block");
	});

	$(".menu-close").click(function () {
		$(".mobile-menu-section").css("display", "none");
	});
		
	$('.slider').slick({
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

})