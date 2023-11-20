$(document).ready(function () {

	//=====Home PAGE TOP BANNER======
	var hp_top_animation = new Swiper('.hp-top-animation__section .mySwiper', {
		slidesPerView: 1,
		effect: 'fade',
		fadeEffect: { crossFade: true },
		speed: 700,
		pagination: {
			el: '.hp-top-animation__section .swiper-pagination',
			clickable: true,
		},
	});
	//=====END Home PAGE TOP BANNER======

	//=====FRY SCHOOL SLIDER======
	var FrySchoolSwiper = new Swiper('.hp-fry-school__section .mySwiper', {
		slidesPerView: 1,
		spaceBetween: 20,
		effect: 'fade',
		fadeEffect: { crossFade: true },
		speed: 300,
		navigation: {
			nextEl: '.hp-fry-school__section .swiper-button-next',
			prevEl: '.hp-fry-school__section .swiper-button-prev',
		},
	});
	//=====END FRY SCHOOL SLIDER======

	//=====FRYER TIPS SLIDER===========
	var FTSwiper = new Swiper('.fryer-tips_swiper', {
		slidesPerView: 1,
		spaceBetween: 20,
		centeredSlides: true,
		effect: 'fade',
		fadeEffect: { crossFade: true },
		speed: 300,
		navigation: {
			nextEl: '.fryer-tips_swiper .swiper-button-next',
			prevEl: '.fryer-tips_swiper .swiper-button-prev',
		}
	});

	//=====END FRYER TIPS SLIDER===========

	if (document.body.classList.contains('home-page')) {
		//GSAP ANIMATION
		gsap.registerPlugin(ScrollTrigger);

		ScrollTrigger.saveStyles('body *');

		ScrollTrigger.matchMedia({
			"(min-width: 766px)": function () {
				var tl = gsap.timeline({
					scrollTrigger: {
						trigger: 'header',
						once: true,
					},
				});

				//Header Animation
				tl.to('.dark-overlay', {opacity: 0, duration: 0.5})
					.fromTo('header', {height: 0}, {height: 'auto', duration: 1.1, ease: 'power2.out' })
					.from('header .menu > .menu-item > a span', { y: -100, delay: 0.3, duration: 0.4, stagger: -0.2, ease: 'power2.out'}, '<0.2')
					.from('header .menu > .menu-item > a .sub-anchor', { y: -100, duration: 0.7, stagger: -0.2, ease: 'power2.out'}, '<')
					.from('header .logo #logo img', { y: -150, opacity: 0, duration: 0.5, ease: 'power2.out'}, '<')
					.from('header .right .bottom .btn', { y: -100, opacity: 0, duration: 0.5, stagger: 0.2, ease: 'circ.out'}, '<')
					.from('header .right .top a', { y: -100, opacity: 0, duration: 0.5, stagger: -0.2, ease: 'power2.out'}, '<')
					.from('header', { backgroundPosition: '1000px 0px', delay: 0, duration: 0.8 }, '>-1.2');

				// Banner Animation
					var tl2pagi = gsap.timeline({
						scrollTrigger: {
							trigger: '.hp-top-animation__section .swiper-pagination',
							once: true,
						},
					});

					tl2pagi.from('.swiper-pagination .swiper-pagination-bullet', {y: 100, opacity: 0, delay: 2, duration: 1, stagger: 0.1, ease: 'power2.out'});
					
					var tl2s1 = gsap.timeline({
						scrollTrigger: {
							trigger: '.hp-top-animation__section .slide-1',
							once: true,
						},
					});

					tl2s1.from('.hp-top-animation__section .slide-1 .big_image', { xPercent: -150, delay: 0.3, duration: 1.2}, '<')
						.from('.hp-top-animation__section .slide-1 .shine_bg', { xPercent: -130, duration: 1.2}, '<0.1')
						.from('.hp-top-animation__section .slide-1 .fries-bg', { x: -160, y: -100, opacity: 0, duration: 1.2})
						.from('.hp-top-animation__section .slide-1 .text-slide h2 span', { y: 200, opacity: 0, duration: 1.2, stagger: 0.1, ease: 'power2.out'}, '<0.1')
						.from(`.hp-top-animation__section .slide-1 .text-slide h2 .four`, { y: 200, opacity: 0, duration: 1.2, stagger: 0.1, ease: 'power2.out'}, '<0.2')
						.from(`.hp-top-animation__section .slide-1 .button`, {y: 100, opacity: 0, duration: 1.2, ease: 'power2.out'}, '<0.2');

					var tl2s2 = gsap.timeline({
						scrollTrigger: {
							trigger: '.hp-top-animation__section .slide-2',
							once: true,
						},
					});
					tl2s2.from('.hp-top-animation__section .slide-2 .left-image', { yPercent: 100, opacity: 0, delay: 0.4, duration: 1, ease: 'power2.out'})
						.from('.hp-top-animation__section .slide-2 .cloud', { y: 100, opacity: 0, scale: 0.5, duration: 1.8, ease: 'power2.out'}, '<0.1')
						.from('.hp-top-animation__section .slide-2 .right-image', { yPercent: 100, opacity: 0, duration: 1, ease: 'power2.out'}, '<0.2')
						.from('.hp-top-animation__section .slide-2 .text-slide h2 span', { yPercent: 100, opacity: 0, duration: 1, stagger: 0.1, ease: 'power2.out'}, '>0.2')
						.from('.hp-top-animation__section .slide-2 .text-slide h2 span .play', { scale: 0.8, opacity: 0, rotate: -360, duration: 1, ease: 'power2.out'}, '>')
						.from('.hp-top-animation__section .slide-2 .text-slide .button', { yPercent: 100, opacity: 0, duration: 0.8, ease: 'power2.out'}, '<0.1')
						.from('.hp-top-animation__section .slide-2 .board-image', { scale: 0.2, opacity: 0, duration: 0.8, ease: 'power2.out'}, '<');

					var tl2s3 = gsap.timeline({
						scrollTrigger: {
							trigger: '.hp-top-animation__section .slide-3',
							once: true,
						},
					});

					tl2s3.from('.hp-top-animation__section .slide-3 .shine_bg', { xPercent: -100, opacity: 0, delay: 0.4, duration: 0.7, ease: 'power2.out'})
						.from('.hp-top-animation__section .slide-3 .text-slide h2 span.text0', { y: -200, opacity: 0, duration: 1.2, ease: 'power2.out'}, '<')
						.from('.hp-top-animation__section .slide-3 .text-slide h2 span.text1', { x: -200, opacity: 0, duration: 1.2, ease: 'power2.out'}, '<')
						.from('.hp-top-animation__section .slide-3 .text-slide h2 span.text2', { x: 200, opacity: 0, duration: 1.2, ease: 'power2.out'}, '<')
						.from('.hp-top-animation__section .slide-3 .text-slide .button', { y: 200, opacity: 0, duration: 1.2, ease: 'power2.out'}, '<')
						.from('.hp-top-animation__section .slide-3 .item-image img', { scale: 0.1, opacity: 0, rotate: 180, duration: 1.1, ease: 'power2.out'}, '<')
						.from('.hp-top-animation__section .slide-3 .fri_two', { x: 550, opacity: 0, rotate: -180, duration: 1, ease: 'power2.out'}, '<')
						.from('.hp-top-animation__section .slide-3 .fri_one', { x: 100, opacity: 0, rotate: -180, duration: 1, ease: 'power2.out'}, '<0.2')


					hp_top_animation.on("slideChange", function() {
						var activeSlideIndex = hp_top_animation.realIndex;

						if (activeSlideIndex === 0) {
							tl2s1.restart();
							tl2pagi.restart();
						}
						if (activeSlideIndex === 1) {
							tl2s2.restart();
							tl2pagi.restart();
						}
						if (activeSlideIndex === 2) {
							tl2s3.restart();
							tl2pagi.restart();
						}
					});
					

					//Our Latest Animation
					var tl3 = gsap.timeline({
						scrollTrigger: {
							trigger: '.hp-our-latest__section',
							start: 'top 60%',
							once: true,
						},
					});
					tl3.from('.hp-our-latest__title h2', {y: 100, opacity: 0, duration: 1, ease: 'power2.out'})
					.from('.hp-our-latest__title h2 strong', {y: 100, opacity: 0, duration: 1, ease: 'power2.out'}, '-=1')
					.from('.hp-our-latest__slider', {x: 300, opacity: 0, duration: 0.8, ease: 'power2.out'}, '<');

					//Our Products Animation
					var tl4 = gsap.timeline({
						scrollTrigger: {
							trigger: '.hp-our-products__wrapper',
							start: 'top 50%',
							once: true,
						},
					});

					tl4.from('.hp-our-products__wrapper .left .product', {x: -400, opacity: 0, duration: 1, stagger: -0.2, ease: 'power2.out'})
					.from('.hp-our-products__wrapper .right .title h3', {y: 200, opacity: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out'}, '<')
					.from('.hp-our-products__wrapper .right .title h2', {y: 200, opacity: 0, delay: 0.2, duration: 0.8, stagger: 0.3, ease: 'power2.out'}, '<')
					.from('.hp-our-products__wrapper .right .button .btn', {y: 200, opacity: 0, delay: 0.2, duration: 1, stagger: 0.3, ease: 'power2.out'}, '<');

					//Our Recipes Animation
					var tl5 = gsap.timeline({
						scrollTrigger: {
							trigger: '.hp-recipes__section',
							start: 'top 30%',
							once: true,
						},
					});
					tl5.from('.hp-recipes__slider .swiper-slide', {x: 400, opacity: 0, duration: 1, stagger: 0.2, ease: 'power2.out'})
					.from('.hp-recipes__title .title h2 .main', {y: 100, opacity: 0, duration: 0.7, stagger: 0.2}, '<')
					.from('.hp-recipes__title .title h2 .small', {y: 100, opacity: 0, delay: 0.2, duration: 0.7}, '<')
					.from('.hp-recipes__title .button .btn', {y: 100, opacity: 0, duration: 0.5}, '-=1');

					//Home Page Sustainability Animation
					var tl6 = gsap.timeline({
						scrollTrigger: {
							trigger: '.hp-sustainability__section',
							start: 'top 30%',
							once: true,
						},
					});
					tl6.from('.hp-sustainability__section .left .image img', {scale: 2.2, duration: 1.2, ease: 'power2.out'})
					.from('.hp-sustainability__section .right .big-chips', {x: 1000, duration: 1, ease: 'power2.out'}, '<')
					.from('.hp-sustainability__section .right .small-chips', {x: 500, duration: 1.2, ease: 'power2.out'}, '>-1')
					.from('.hp-sustainability__section .right .title h2', {y: 200, opacity: 0, duration: 1, ease: 'power2.out'}, '-=1')
					.from('.hp-sustainability__section .right .title p', {y: 200, opacity: 0, duration: 1, ease: 'power2.out'}, '<0.2')
					.from('.hp-sustainability__section .right .title .btn', {y: 200, opacity: 0, duration: 1, ease: 'power2.out'}, '<0.2');

					//Home Fry School Animation
					var tl7title_navi = gsap.timeline({
						scrollTrigger: {
							trigger: '.hp-fry-school__wrapper',
							start: 'top 50%',
							once: true,
						},
					});
					tl7title_navi.from('.hp-fry-school__wrapper .left .title', {y: -200, opacity: 0, duration: 1, ease: 'power2.out'})
						.from('.hp-fry-school__wrapper .right .slider-navigation .swiper-nav', {y: 200, duration: 0.8, stagger: 0.2, ease: 'power2.out'});
						
					var tl7s1 = gsap.timeline({
						scrollTrigger: {
							trigger: '.hp-fry-school__wrapper .animate-slide-1',
							start: 'top 50%',
							once: true,
						},
					});

					tl7s1.from('.hp-fry-school__wrapper .right .animate-slide-1 .s-item .item', {rotate: -360, scale: 0, delay: 1, duration: 0.4, ease: 'power1.out'})
					.from('.hp-fry-school__wrapper .right .animate-slide-1 .s-item .s-text', {x: 100, opacity: 0, duration: 0.6, ease: 'power1.out'})
					.from('.hp-fry-school__wrapper .right .animate-slide-1 .text1', {opacity: 0, duration: 0.8, ease: 'power3.out'})
					.from('.hp-fry-school__wrapper .right .animate-slide-1 .image1 > img', {scale: 0,  duration: 1, ease: 'back.out'}, '<0.2')
					.from('.hp-fry-school__wrapper .right .animate-slide-1 .image1 .image1-1', {scale: 0,  duration: 1, ease: 'power2.out'}, '<0.1')
					.from('.hp-fry-school__wrapper .right .animate-slide-1 .image2 > img', {scale: 0,  duration: 1, ease: 'back.out'}, '<0.2')
					.from('.hp-fry-school__wrapper .right .animate-slide-1 .image2 .image2-2', {scale: 0,  duration: 1, ease: 'power2.out'}, '<0.1')
					.from('.hp-fry-school__wrapper .right .animate-slide-1 .text3', {opacity: 0,  duration: 1, ease: 'power2.out'}, '<0.5')
					.from('.hp-fry-school__wrapper .right .animate-slide-1 .text2', {opacity: 0,  duration: 1, ease: 'power2.out'})
					.from('.hp-fry-school__wrapper .right .animate-slide-1 .image3 > img', {scale: 0,  duration: 0.7, ease: 'back.out'});

					var tl7s2 = gsap.timeline({
						scrollTrigger: {
							trigger: '.hp-fry-school__wrapper .animate-slide-2',
							start: 'top 50%',
							once: true,
						},
					});

					tl7s2.from('.hp-fry-school__wrapper .right .animate-slide-2 .s-item .item', {rotate: -360, scale: 0, delay: 1, duration: 0.4, ease: 'power1.out'})
					.from('.hp-fry-school__wrapper .right .animate-slide-2 .s-item .s-text', {x: 100, opacity: 0, duration: 0.6, ease: 'power1.out'})
					.from('.hp-fry-school__wrapper .right .animate-slide-2 .text1', {opacity: 0, duration: 0.6, ease: 'power3.out'})
					.from('.hp-fry-school__wrapper .right .animate-slide-2 .image1 > img', {scale: 0,  duration: 1, ease: 'back.out'}, '<0.2')
					.from('.hp-fry-school__wrapper .right .animate-slide-2 .image1 .image1-1', {scale: 0,  duration: 0.8, ease: 'power2.out'})
					.from('.hp-fry-school__wrapper .right .animate-slide-2 .text2', {opacity: 0, duration: 1, ease: 'power3.out'});

					var tl7s3 = gsap.timeline({
						scrollTrigger: {
							trigger: '.hp-fry-school__wrapper .animate-slide-3',
							start: 'top 50%',
							once: true,
						},
					});

					tl7s3.from('.hp-fry-school__wrapper .right .animate-slide-3 .s-item .item', {rotate: -360, scale: 0, delay: 1, duration: 0.4, ease: 'power1.out'})
					.from('.hp-fry-school__wrapper .right .animate-slide-3 .s-item .s-text', {x: 100, opacity: 0, duration: 0.6, ease: 'power1.out'})
					.from('.hp-fry-school__wrapper .right .animate-slide-3 .text2', {opacity: 0, duration: 0.6, ease: 'power3.out'})
					.from('.hp-fry-school__wrapper .right .animate-slide-3 .image1', {scale: 0, duration: 0.8, ease: 'power1.out'})
					.from('.hp-fry-school__wrapper .right .animate-slide-3 .text3', {opacity: 0, duration: 0.6, ease: 'power3.out'})
					.from('.hp-fry-school__wrapper .right .animate-slide-3 .image2 > img', {scale: 0, duration: 0.6, ease: 'power1.out'})
					.from('.hp-fry-school__wrapper .right .animate-slide-3 .text1', {opacity: 0, duration: 0.6, ease: 'power3.out'})
					.from('.hp-fry-school__wrapper .right .animate-slide-3 .image2 .image2-2', {scale: 0,  duration: 0.6, ease: 'back.out'});

					var tl7s4 = gsap.timeline({
						scrollTrigger: {
							trigger: '.hp-fry-school__wrapper .animate-slide-4',
							start: 'top 50%',
							once: true,
						},
					});

					tl7s4.from('.hp-fry-school__wrapper .right .animate-slide-4 .s-item .item', {rotate: -360, scale: 0, delay: 1, duration: 0.4, ease: 'power1.out'})
					.from('.hp-fry-school__wrapper .right .animate-slide-4 .s-item .s-text', {x: 100, opacity: 0, duration: 0.6, ease: 'power1.out'})
					.from('.hp-fry-school__wrapper .right .animate-slide-4 .text1', {opacity: 0, duration: 1, ease: 'power3.out'})
					.from('.hp-fry-school__wrapper .right .animate-slide-4 .image1 > img', {scale: 0, duration: 0.7, ease: 'power1.out'})
					.from('.hp-fry-school__wrapper .right .animate-slide-4 .image2 > img', {y: -100, opacity: 0, duration: 0.7, ease: 'power1.out'}, '<0.2')
					.from('.hp-fry-school__wrapper .right .animate-slide-4 .text2', {opacity: 0, duration: 1, ease: 'power2.out'});

					var tl7s5 = gsap.timeline({
						scrollTrigger: {
							trigger: '.hp-fry-school__wrapper .animate-slide-5',
							start: 'top 50%',
							once: true,
						},
					});

					tl7s5.from('.hp-fry-school__wrapper .right .animate-slide-5 .s-item .item', {rotate: -360, scale: 0, delay: 1, duration: 0.4, ease: 'power1.out'})
					.from('.hp-fry-school__wrapper .right .animate-slide-5 .s-item .s-text', {x: 100, opacity: 0, duration: 0.6, ease: 'power1.out'})
					.from('.hp-fry-school__wrapper .right .animate-slide-5 .image1 > img', {scale: 0, duration: 0.7, ease: 'power2.out'})
					.from('.hp-fry-school__wrapper .right .animate-slide-5 .image2 > img', {scale: 0, duration: 0.7, ease: 'power2.out'}, '<0.2')
					.from('.hp-fry-school__wrapper .right .animate-slide-5 .image1 .image1-1', {scale: 0, opacity: 0, duration: 0.7, ease: 'power2.out'})
					.from('.hp-fry-school__wrapper .right .animate-slide-5 .text1', {opacity: 0, duration: 1, ease: 'power2.out'});

					var tl7s6 = gsap.timeline({
						scrollTrigger: {
							trigger: '.hp-fry-school__wrapper .animate-slide-6',
							start: 'top 50%',
							once: true,
						},
					});

					tl7s6.from('.hp-fry-school__wrapper .right .animate-slide-6 .s-item .item', {rotate: -360, scale: 0, delay: 1, duration: 0.4, ease: 'power1.out'})
					.from('.hp-fry-school__wrapper .right .animate-slide-6 .s-item .s-text', {x: 100, opacity: 0, duration: 0.6, ease: 'power1.out'})
					.from('.hp-fry-school__wrapper .right .animate-slide-6 .image1 > img', {scale: 0, opacity: 0, duration: 1, ease: 'back.out'})
					.from('.hp-fry-school__wrapper .right .animate-slide-6 .image1 .image1-1', {scale: 0, duration: 1, ease: 'power2.out'}, '<0.1')
					.from('.hp-fry-school__wrapper .right .animate-slide-6 .image1 .image1-2', {opacity: 0, x: 100, y: -100, duration: 1, ease: 'power2.out'}, '<0.5')
					.from('.hp-fry-school__wrapper .right .animate-slide-6 .text1', {opacity: 0, duration: 1, ease: 'power2.out'});

					FrySchoolSwiper.on("slideChange", function() {
						var activeSlideIndex = FrySchoolSwiper.realIndex;

						if (activeSlideIndex === 0) {
							tl7s1.restart();
							tl7title_navi.restart();
						}
						if (activeSlideIndex === 1) {
							tl7s2.restart();
							tl7title_navi.restart();
						}
						if (activeSlideIndex === 2) {
							tl7s3.restart();
							tl7title_navi.restart();
						}
						if (activeSlideIndex === 3) {
							tl7s4.restart();
							tl7title_navi.restart();
						}
						if (activeSlideIndex === 4) {
							tl7s5.restart();
							tl7title.restart();
						}
						if (activeSlideIndex === 5) {
							tl7s6.restart();
							tl7title.restart();
						}
					});		

					//Footer Animation
					var tl8 = gsap.timeline({
						scrollTrigger: {
							trigger: 'footer',
							start: 'top 50%',
							once: true,
						},
					});
					tl8.from('.footer-newsletter__title h2', {y: 100, opacity: 0, duration: 1, ease: 'power2.out'})
					.from('.footer-newsletter__title p', {y: 100, opacity: 0, duration: 1, ease: 'power2.out'}, '<0.1')
					.from('.footer-newsletter__form form', {y: 100, opacity: 0, duration: 1, ease: 'power2.out'}, '<0.1')
					.from('.main-footer .left .footer-logo img', {y: 100, opacity: 0, duration: 1, ease: 'power2.out'}, '<0.1')
					.from('.main-footer .left .social-media .title', {y: 100, opacity: 0, duration: 1, ease: 'power2.out'}, '<0.1')
					.from('.main-footer .left .social-media .some a', {y: 100, opacity: 0, duration: 0.5, stagger: -0.1, ease: 'power2.out'}, '<0.1')
					.from('.main-footer .right .footer-menu .col a', {y: 100, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out'}, '<0.1')
					.from('.main-footer .copyright span', { y: 100, opacity: 0, duration: 0.5, stagger: -0.2, ease: 'power2.out' }, '<');
					
					//Medleys Animation				
					var tl9s1 = gsap.timeline({
						scrollTrigger: {
							trigger: '.medleys-hat__section',	
							once: true,
						},
					});
					tl9s1.from('.medleys-hat__section .title', { x: 500, opacity: 0, duration: 1.5, ease: "power2.out" })
					.from('.medleys-hat__section .btn-more', { x: 1500, duration: 1, ease: 'power2.out' })
					.from('.medleys-hat__section .slice', { x: 500, duration: 1, ease: 'power2.out' });
				
					var tl9s2 = gsap.timeline({
						scrollTrigger: {
							trigger: '.medleys-products__section',	
							start: 'top 50%',
							once: true,
						},
					});
					tl9s2.from('.medleys-products__section .cloud-top', { x: -500, duration: 1, opacity: 0, ease: "power4.out" })
					.from('.medleys-products__section .arrow', { x: -500, duration: 0.5, ease: "power4.out"})
					.from('.medleys-products__section .products-list', { x: 500, duration: 1.5, opacity: 0, ease: "power4.out"})
					.from('.medleys-products__section .cloud-bottom', { x: 500, duration: 1, opacity: 0, ease: 'power2.out' })
					.from('.medleys-products__section .products-slice', { x: -500, duration: 1, opacity: 0, ease: 'power2.out' });

				
					var tl9s3 = gsap.timeline({
						scrollTrigger: {
							trigger: '.frozen-aisle__section',	
							start: 'top 70%',
							once: true,
						},
					});
					tl9s3.from('.frozen-aisle__section h2', { x: 500, opacity: 0, duration: 1.5, ease: "power4.out"})

						
					//Air Fry Animation
					var tl10 = gsap.timeline({
						scrollTrigger: {
							trigger: '.air-fry-hat__section',								
							once: true,
						},
					});
					tl10.from('.air-fry-hat__section h1', { y: 300, duration: 1.5, ease: "power2.out" })
					.from('.air-fry-hat__section .air-fry-hat_slice', { y: 300, duration: 0.5, ease: "power2.out" })
					.from('.air-fry-hat__section .cloud-bottom', { y: 300, duration: 0.5, ease: "power2.out" });
				
					var tl11 = gsap.timeline({
						scrollTrigger: {
							trigger: '.fryer-tips',	
							start: 'top 50%',
							once: true,
						},
					});				
					tl11.from('.fryer-tips .fryer-tips_swiper', { y: -300,opacity: 0, duration: 1, ease: "power2.out" })
				
					var tl11navi_title = gsap.timeline({
						scrollTrigger: {
							trigger: '.fryer-tips_swiper',	
							start: 'top 50%',
							once: true,
						},
					});				
					tl11navi_title.from('.fryer-tips_swiper .title', { x: 300,opacity: 0, duration: 1, ease: "power2.out" })

					var tl12s1 = gsap.timeline({
						scrollTrigger: {
							trigger: '.fryer-tips_swiper',	
							start: 'top 50%',
							once: true,
						},
					});				
					tl12s1.from('.fryer-tips_swiper .slide1 .photo1', { x: 300, scale: 1, opacity: 0, duration: 0.5, ease: "power2.out", rotation:45, transformOrigin:"50% 50%" })
					.from('.fryer-tips_swiper .slide1 .slider-navigation', { opacity: 0, duration: 3, ease: "power2.out" }, '<')
					.from('.fryer-tips_swiper .slide1 .arrow1', { x: 300, opacity: 0, duration: 0.7, ease: "power2.out" }, '<')
					.from('.fryer-tips_swiper .slide1 .text1', { x: 300, opacity: 0, duration: 1, ease: "power2.out", rotation:120, transformOrigin:"50% 50%" }, '<')
					.from('.fryer-tips_swiper .slide1 .arrow2', { x: -300, opacity: 0, duration: 0.7, ease: "power2.out" }, '<')
					.from('.fryer-tips_swiper .slide1 .text2', { x: -300, opacity: 0, duration: 1, ease: "power2.out", rotation:120, transformOrigin:"50% 50%" }, '<')
					.from('.fryer-tips_swiper .slide1 .pot-potato', { x: -300, scale: 0, opacity: 0, duration: 0.7, ease: "power2.out" }, '<')		

					FTSwiper.on("slideChange", function() {
						var activeAftSlideIndex = FTSwiper.realIndex;
						if (activeAftSlideIndex === 0) {
							tl12s1.restart();
							// tl11navi_title.restart();
						}
						if (activeAftSlideIndex === 1) {
							tl12s2 = gsap.timeline({
								scrollTrigger: {
									trigger: '.fryer-tips_swiper',	
									start: 'top 50%',
									once: true,
								},
								});				
								tl12s2.from('.fryer-tips_swiper .slide2 .photo2', { x: 300, scale: 1, opacity: 0, duration: 0.5, ease: "power2.out", rotation:45, transformOrigin:"50% 50%" })
								.from('.fryer-tips_swiper .slide2 .slider-navigation', { opacity: 0, duration: 0.5, ease: "power2.out" }, '<')
								.from('.fryer-tips_swiper .slide2 .text1', { x: -300, opacity: 0, duration: 0.5, ease: "power2.out", rotation:120, transformOrigin:"50% 50%" }, '<')
								.from('.fryer-tips_swiper .slide2 .arrow1', { x: -300, opacity: 0, duration: 0.5, ease: "power2.out" }, '<')
							tl12s2.restart();
							// tl11navi_title.restart();
						}
						if (activeAftSlideIndex === 2) {
							tl12s3 = gsap.timeline({
								scrollTrigger: {
									trigger: '.fryer-tips_swiper',	
									start: 'top 50%',
									once: true,
								},
								});				
								tl12s3.from('.fryer-tips_swiper .slide3 .photo3', { x: 300, opacity: 0, duration: 0.5, ease: "power2.out", rotation:45, transformOrigin:"50% 50%" })
								.from('.fryer-tips_swiper .slide3 .slider-navigation', { opacity: 0, duration: 0.5, ease: "power2.out" }, '<')
								.from('.fryer-tips_swiper .slide3 .text1', { x: -300, opacity: 0, duration: 0.5, ease: "power2.out", rotation:120, transformOrigin:"50% 50%" }, '<')
								.from('.fryer-tips_swiper .slide3 .arrow1', { x: -300, opacity: 0, duration: 0.5, ease: "power2.out" }, '<')
								.from('.fryer-tips_swiper .slide3 .text2', { x: -300, opacity: 0, duration: 0.5, ease: "power2.out", rotation:120, transformOrigin:"50% 50%" }, '<')
								.from('.fryer-tips_swiper .slide3 .arrow2', { x: -300, opacity: 0, duration: 0.5, ease: "power2.out" }, '<')
								.from('.fryer-tips_swiper .slide3 .vibro-pot', { scale: 0, opacity: 0, duration: 0.5, ease: "power2.out" }, '<')
							tl12s3.restart();
							// tl11navi_title.restart();
						}
						if (activeAftSlideIndex === 3) {
							tl12s4 = gsap.timeline({
								scrollTrigger: {
									trigger: '.fryer-tips_swiper',	
									start: 'top 50%',
									once: true,
								},
							});				
							tl12s4.from('.fryer-tips_swiper .slide4 .photo4', { x: 300, opacity: 0, duration: 0.5, ease: "power2.out", rotation:45, transformOrigin:"50% 50%" })
							.from('.fryer-tips_swiper .slide4 .slider-navigation', { y: 0, opacity: 0, duration: 0.5, ease: "power2.out" }, '<')
							.from('.fryer-tips_swiper .slide4 .text1', { x: -300, opacity: 0, duration: 0.5, ease: "power2.out", rotation:120, transformOrigin:"50% 50%" }, '<')
							.from('.fryer-tips_swiper .slide4 .arrow1', { x: -300, opacity: 0, duration: 0.5, ease: "power2.out" }, '<')
							.from('.fryer-tips_swiper .slide4 .text2', { x: -300, opacity: 0, duration: 0.5, ease: "power2.out", rotation:120, transformOrigin:"50% 50%" }, '<')
							.from('.fryer-tips_swiper .slide4 .arrow2', { x: -300, opacity: 0, duration: 0.5, ease: "power2.out" }, '<')
							.from('.fryer-tips_swiper .slide4 .pot', { scale: 0, opacity: 0, duration: 0.5, ease: "power2.out" }, '<')
							tl12s4.restart();
							// tl11navi_title.restart();
						}
					});	
				
					var tl12s5 = gsap.timeline({
						scrollTrigger: {
							trigger: '.fryer-tips',	
							start: 'top 50%',
							once: true,
						},
					});
					tl12s5.from('.fryer-tips .fryer-tips-cloud', { y: 300,opacity: 0, duration: 1, ease: "power2.out" })

				
					var tl13 = gsap.timeline({
						scrollTrigger: {
							trigger: '.air-fryer-slide__section',	
							start: 'top 50%',
							once: true,
						},
					});
				
					tl13.from('.air-fryer-slide__section div', { x: 1000, duration: 1.5, ease: "power2.out" })
				
					var tl14 = gsap.timeline({
						scrollTrigger: {
							trigger: '.airfryer-family-dinner',	
							start: 'top 50%',
							once: true,
						},
					});
				
					tl14.from('.airfryer-family-dinner h2 ', { y: 300, duration: 1, opacity: 0, ease: "power2.out" })
					tl14.from('.airfryer-family-dinner p', { y: 300, duration: 0.7, ease: "power2.out" })
					tl14.from('.airfryer-family-dinner .small-chips', { x: 250, duration: 0.7, ease: "power2.out" });
			},
		});
	}
});