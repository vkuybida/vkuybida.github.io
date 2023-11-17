$ = jQuery;
$.fn.clickOff = function (callback, selfDestroy) {
	var clicked = false;
	var parent = this;
	var destroy = selfDestroy || true;
	parent.click(function () {
		clicked = true;
	});
	$(document).click(function (event) {
		if (!clicked) {
			callback(parent, event);
		}
		if (destroy) {
		}
		clicked = false;
	});
};
$(document).ready(function () {
	('use strict');

	//=====Mobile Menu======
	$('.menu-burger').on('click', function () {
		$(this).toggleClass('open');
		$('body').toggleClass('mobile_menu_active');
		$('.mobile-main-menu').toggleClass('open');
		return false;
	});

	$('.mobile-main-menu').clickOff(function () {
		$('.menu-burger').removeClass('open');
		$('body').removeClass('mobile_menu_active');
		$('.mobile-main-menu').removeClass('open');
		return false;
	});

	$('.mobile-main-menu .close-menu').click(() => {
		$('.menu-burger').removeClass('open');
		$('body').removeClass('mobile_menu_active');
		$('.mobile-main-menu').removeClass('open');
		return false;
	});
	//=====END Mobile Menu======
	//=====Header Search Banner======
	$('header .search-icon').click(function () {
		$('header .search-header-box').toggleClass('active');
	});
	$('header').clickOff(function () {
		$('header .search-header-box').removeClass('active');
	});
	$('header .search-header-box .reset').click(function () {
		$(this).parents('.search-header-box').find('.search-input').val('');
	});
	//====End Header Search Banner=====
	//=====Mobile Menu======
	$('.mobile-main-menu .menu-has-children .chevron').click(function () {
		const targetItem = $(this).parents('.menu-has-children'),
			subMenu = targetItem.find('.sub-menu');
		targetItem.toggleClass('active');
		subMenu.animate({
			height: 'toggle',
		});
	});
	//====End Mobile Menu=====

	//=====SINGLE RECIPE BANNER======
	var singleRecipeSwiper = new Swiper('.recipe-detail__banner .mySwiper', {
		slidesPerView: 1,
		speed: 1000,
		loop: true,
		autoplay: {
			delay: 4000,
		},
		navigation: {
			nextEl: '.recipe-detail__banner .swiper-button-next',
			prevEl: '.recipe-detail__banner .swiper-button-prev',
		},
	});
	//=====END SINGLE RECIPE BANNER======

	//=====Home OUR LATEST SLIDER======
	var hpOurLatestSwiper = new Swiper('.hp-our-latest__slider .mySwiper', {
		slidesPerView: 1,
		spaceBetween: 20,
		loopedSlides: 50,
		speed: 1000,
		centeredSlides: true,
		slidesPerView: 'auto',
		grabCursor: true,
		mousewheel: true,
		keyboard: {
			enabled: true,
		},
		breakpoints: {
			300: {
				slidesPerView: 1.5,
				loop: false,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 30,
				loop: true,
			},
			1180: {
				slidesPerView: 4,
				spaceBetween: 50,
				loop: true,
			},
		},
	});
	//=====END OUR LATEST SLIDER======
	//=====Home OUR PRODUCTS SLIDER======
	var hpOurProductsSwiper = new Swiper('.hp-our-products__section .mySwiper', {
		slidesPerView: 1,
		spaceBetween: 20,
		loopedSlides: 50,
		speed: 1000,
		initialSlide: 1,
		navigation: {
			nextEl: '.hp-our-products__section .swiper-button-next',
			prevEl: '.hp-our-products__section .swiper-button-prev',
		},
		breakpoints: {
			576: {
				slidesPerView: 2,
			},
		},
	});
	//=====END OUR PRODUCTS SLIDER======
	//=====Home OUR REVIPES SLIDER======
	var hpOurRecipesSwiper = new Swiper('.hp-recipes__slider .mySwiper', {
		slidesPerView: 2.2,
		spaceBetween: 20,
		loopedSlides: 50,
		centeredSlides: true,
		speed: 1000,
		initialSlide: 0,
		navigation: {
			nextEl: '.hp-recipes__slider .swiper-button-next',
			prevEl: '.hp-recipes__slider .swiper-button-prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1.4,
				initialSlide: 1,
			},
			576: {
				slidesPerView: 2.5,
				initialSlide: 0,
			},
			1100: {
				slidesPerView: 2.2,
				centeredSlides: false,
			},
		},
	});
	//=====END OUR REVIPES SLIDER======
	
	//=====ABOUT GALLERY SLIDER======
	var aboutGallerySlider = new Swiper('.about-gallery__slider .mySwiper', {
		slidesPerView: 1,
		spaceBetween: 20,
		speed: 1000,
		loop: true,
		navigation: {
			nextEl: '.about-gallery__slider .swiper-button-next',
			prevEl: '.about-gallery__slider .swiper-button-prev',
		},
	});
	//=====END ABOUT GALLERY SLIDER======
	//=====Home YOU MAY ALSO LIKE SLIDER======
	var YMALSwiper = new Swiper('.you-may-also-like__section .mySwiper', {
		slidesPerView: 1,
		spaceBetween: 20,
		speed: 600,
		navigation: {
			nextEl: '.you-may-also-like__section .swiper-button-next',
			prevEl: '.you-may-also-like__section .swiper-button-prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1.4,
				spaceBetween: 20,
				centeredSlides: true,
				initialSlide: 1,
				loop: true,
			},
			768: {
				slidesPerView: 2,
				centeredSlides: false,
				loop: false,
				initialSlide: 0,
			},
			1100: {
				slidesPerView: 3,
				spaceBetween: 40,
				loop: false,
				nitialSlide: 0,
			},
		},
	});
	//=====END YOU MAY ALSO LIKE SLIDER======

	//=====AIR FRY RECOMMENDED SLIDER========
	var AFRPSwiper = new Swiper('.air-fry-slide-swiper', {
		speed: 600,
        navigation: {
            nextEl: '.air-fry-slide-swiper .swiper-button-next',
            prevEl: '.air-fry-slide-swiper .swiper-button-prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1.6,
				spaceBetween: 50,
				centeredSlides: true,
				initialSlide: 1,
				loop: false,				
			},
			768: {
				slidesPerView: 3,
				centeredSlides: true,
				initialSlide: 0,
			},
			1100: {
				slidesPerView: 3.7,
				spaceBetween: 30,
				centeredSlides: true,
				loop: true,
				nitialSlide: 0,
			},
		},
    });
	//=====END AIR FRY RECOMMENDED SLIDER========

	

	//=====PRODUCT DETAILS ACCORDION======
	$('.product-details-acc .item .acc-title').click(function () {
		var title = $(this),
			info = title.next();
		if (!title.hasClass('active')) {
			$('.product-details-acc .item .acc-title').removeClass('active');
			title.addClass('active');
			$('.product-details-acc .item .info').slideUp(400);
			info.slideDown(400);
		} else {
			$('.product-details-acc .item .acc-title').removeClass('active').next().slideUp(400);
		}
		return false;
	});
	//=====END PRODUCT DETAILS ACCORDION======
	
	//=====FAQ ACCORDION======
	$('.faq__section .faq__acc .item .acc-title').click(function () {
		var title = $(this),
			info = title.next();
		if (!title.hasClass('active')) {
			$('.faq__section .faq__acc .item .acc-title').removeClass('active');
			title.addClass('active');
			$('.faq__section .faq__acc .item .info').slideUp(400);
			info.slideDown(400);
		} else {
			$('.faq__section .faq__acc .item .acc-title').removeClass('active').next().slideUp(400);
		}
		return false;
	});
	//=====END FAQ ACCORDION======
	//=====SELECTRIC======
	$('select').selectric();
	//=====END SELECTRIC======
	//=====INIT FANCYBOX======
	Fancybox.bind('[data-fancybox]', {
		on: {
			destroy: function () {
				var videos = document.getElementsByTagName('video');
				for (var i = 0; i < videos.length; i++) {
					videos[i].pause();
				}
			},
		},
	});
	//=====END INIT FANCYBOX======
});
// ===END READY===

$(window).on('load', function () {});
// ===END LOAD===
