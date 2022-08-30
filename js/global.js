$(function(){
	$("#show-filters").on('click', function() {
		$('.products-wrapper').toggleClass('active')
	})

	$(".menu-open").click(function () {
		$(".mobile-menu-section").css("display", "block");
	});

	$(".menu-close").click(function () {
		$(".mobile-menu-section").css("display", "none");
	});

})