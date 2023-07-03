$(document).ready(function () {
	if (document.body.classList.contains('home-page')) {
		//GSAP ANIMATION
		gsap.registerPlugin(ScrollTrigger);

		let mm = ScrollTrigger.matchMedia({
			'(min-width: 576px)': function () {
				var tl = gsap.timeline({
					scrollTrigger: {
						trigger: 'header',
						once: true,
					},
				});

				//Header Animation
				tl.to('.dark-overlay', {opacity: 0, duration: 0.5})
					.from('header', {height: '0px', duration: 1.2, ease: 'power2.out'})
					.from('header .menu > .menu-item > a span', { y: -100, delay: 0.3, duration: 0.4, stagger: -0.2, ease: 'power2.out'}, '<0.2')
					.from('header .menu > .menu-item > a em', { y: -100, duration: 0.7, stagger: -0.2, ease: 'power2.out'}, '<')
					.from('header .logo #logo img', { y: -150, opacity: 0, duration: 0.5, ease: 'power2.out'}, '<')
					.from('header .right .bottom .btn', { y: -100, opacity: 0, duration: 0.5, stagger: 0.2, ease: 'circ.out'}, '<')
					.from('header .right .top a', { y: -100, opacity: 0, duration: 0.5, stagger: -0.2, ease: 'power2.out'}, '<')
					.from('header', { backgroundPosition: '1000px 0px', delay: 0, duration: 0.8 }, '>-1.2')
					.from('.hp-top-banner__section .title h2', { y: 100, opacity: 0, duration: 1, stagger: 0.3, ease: 'power2.out'}, '-=1');

				// Banner Animation
					var tl2 = gsap.timeline({
						scrollTrigger: {
							trigger: '.hp-top-banner__section',
							once: true,
						},
					});
					tl2.from('.button', {y: 100, opacity: 0, duration: 1.2, ease: 'power2.out'})
						.from('.swiper-pagination ', {y: 100, opacity: 0, duration: 1.2, ease: 'power2.out'}, '<');

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

					tl4.from('.hp-our-products__wrapper .left .product img', {x: -400, opacity: 0, duration: 1, stagger: -0.2, ease: 'power2.out'})
					.from('.hp-our-products__wrapper .right .title h3', {y: 200, opacity: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out'}, '<')
					.from('.hp-our-products__wrapper .right .title h2', {y: 200, opacity: 0, delay: 0.2, duration: 0.8, stagger: 0.3, ease: 'power2.out'}, '<')
					.from('.hp-our-products__wrapper .right .button .btn', {y: 200, opacity: 0, delay: 0.2, duration: 1, stagger: 0.3, ease: 'power2.out'}, '<');

					//Our Recipes Animation
					var tl5 = gsap.timeline({
						scrollTrigger: {
							trigger: '.hp-recipes__section',
							start: 'top 80%',
							once: true,
						},
					});
					tl5.from('.hp-recipes__slider .swiper-slide', {x: 400, opacity: 0, duration: 1, stagger: 0.2, ease: 'power2.out'})
					.from('.hp-recipes__title .title h2', {y: 100, opacity: 0, duration: 0.7, stagger: 0.2}, '<')
					.from('.hp-recipes__title .title h3', {y: 100, opacity: 0, delay: 0.2, duration: 0.7}, '<')
					.from('.hp-recipes__title .button .btn', {y: 100, opacity: 0, duration: 0.5}, '-=1');

					//Home Page Sustainability Animation
					var tl6 = gsap.timeline({
						scrollTrigger: {
							trigger: '.hp-sustainability__section',
							start: 'top 80%',
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
					var tl7 = gsap.timeline({
						scrollTrigger: {
							trigger: '.hp-fry-school__wrapper',
							once: true,
						},
					});
					tl7.from('.hp-fry-school__wrapper .left .title h2', {y: 200, opacity: 0, duration: 0.7, stagger: 0.2, ease: 'power2.out'})
					.from('.hp-fry-school__wrapper .left .title h3', {y: 200, opacity: 0, duration: 0.7, ease: 'power2.out'}, '<0.2')
					.from('.hp-fry-school__wrapper .right .swiper-slide img', {opacity: 0, duration: 1.5, ease: 'power2.out'}, '<0.2')
					.from('.hp-fry-school__wrapper .right .swiper-slide .step-index', {scale: 1.1, opacity: 0, duration: 1, ease: 'power2.out'}, '>-1');

					//Footer Animation
					var tl8 = gsap.timeline({
						scrollTrigger: {
							trigger: 'footer',
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
					.from('.main-footer .copyright span', {y: 100, opacity: 0, duration: 0.5, stagger: -0.2, ease: 'power2.out'}, '<');
			},
		});
	
	}
});

