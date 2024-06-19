'use strict'

document.addEventListener("DOMContentLoaded", () => {
	const header = document.querySelector('.navbar'),
				headerOffset = header.offsetTop,
				burger = document.querySelector('.burger'),
				menu = document.querySelector('.nav-menu'),
				dropdownItems = document.querySelectorAll('.dropdown-menu');

	let lastScrollY = window.pageYOffset;

	window.addEventListener('scroll', () => {
		const currentScrollY = window.pageYOffset
		let firstSectionHeight = document.querySelector('.section-hero').offsetHeight
		let opacity = Math.min(currentScrollY / firstSectionHeight, 0.8)
		header.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`

		if (currentScrollY > lastScrollY) {
			header.style.transform = 'translateY(-100%)'
		} else {
			header.style.transform = 'translateY(0)'
		}
		
		lastScrollY = currentScrollY

		console.log(lastScrollY)
	})


	burger.addEventListener('click', () => {
		menu.classList.toggle('opened')
	})

	dropdownItems.forEach(item => {
		item.addEventListener('click', () => {
			const dropListMenu = item.querySelector('.drop-list-menu.w-dropdown-list')
			
			// Закрыть все открытые меню
			document.querySelectorAll('.drop-list-menu.w-dropdown-list.opened').forEach(openedMenu => {
				if (openedMenu !== dropListMenu) {
					openedMenu.classList.remove('opened')
				}
			});

			// Переключить класс opened у текущего меню
			if (dropListMenu) {
				dropListMenu.classList.add('opened')
			}
		})
	})

// Табы
	const
		tabs = document.querySelector('.tabs'),
		accordion = document.querySelector('.accordion'),
		tabItem = document.querySelectorAll('.tab-btn'),
		tabItemInner = document.querySelectorAll('.tab-btn-inner'),
		tabContent = document.querySelectorAll('.tab-content'),
		tabContentInner = document.querySelectorAll('.tab-content-inner')

	if (tabs) {
		// Инициализация внутренних табов для каждого верхнего таба
		tabContent.forEach((tabContent) => {
			if (tabItemInner.length > 0 && !accordion) {
				tabItemInner[0].classList.add('active', 'w--current');
				tabContentInner[0].classList.add('active', 'w--current');
			}
		});

		// Обработчик событий для кликов по внутренним табам
		tabs.addEventListener('click', function(event) {
			const button = event.target.closest('.tab-btn-inner');
			if (!button) return;

			const innerTabId = button.getAttribute('data-button');
			const innerTabContent = document.getElementById(innerTabId);

			if (!accordion) {
				tabItemInner.forEach((btn) => btn.classList.remove('active', 'w--current'));
				tabContentInner.forEach((content) => content.classList.remove('active', 'w--current'));

				if (innerTabContent) {
					innerTabContent.classList.add('active', 'w--current');
					button.classList.add('active', 'w--current');
				}
			} else {
				// Закрыть все внутренние табы
				const parentTabContent = button.closest('.tab-content');
				const innerTabItems = parentTabContent.querySelectorAll('.tab-btn-inner');
				const innerTabContents = parentTabContent.querySelectorAll('.tab-content-inner');

				innerTabItems.forEach((btn) => {
					if (btn !== button) btn.classList.remove('active', 'w--current');
				});

				innerTabContents.forEach((content) => {
					if (content !== innerTabContent) content.classList.remove('active', 'w--current');
				});

				if (innerTabContent) {
					innerTabContent.classList.toggle('active', 'w--current');
					button.classList.toggle('active', 'w--current');
				}
			}
		});

		// Установка первого верхнего таба активным по умолчанию
		if (tabItem.length > 0 && !accordion) {
			tabItem[0].classList.add('active', 'w--current');
			tabContent[0].classList.add('active', 'w--current');
		}

		// Обработчик событий для кликов по верхним табам
		tabs.addEventListener('click', function(event) {
			const button = event.target.closest('.tab-btn');
			if (!button) return;

			const topTabId = button.getAttribute('data-button');
			const topTabContent = document.getElementById(topTabId);

			if (!accordion) {
				tabItem.forEach((btn) => btn.classList.remove('active', 'w--current'));
				tabContent.forEach((content) => content.classList.remove('active', 'w--current'));

				if (topTabContent) {
					topTabContent.classList.add('active', 'w--current');
					button.classList.add('active', 'w--current');
				}
			} else {
				// Закрыть все верхние табы
				tabItem.forEach((btn) => {
					if (btn !== button) btn.classList.remove('active', 'w--current');
				});

				tabContent.forEach((content) => {
					if (content !== topTabContent) content.classList.remove('active', 'w--current');
				});

				if (topTabContent) {
					topTabContent.classList.toggle('active', 'w--current');
					button.classList.toggle('active', 'w--current');
				}
			}

			// Активировать первый внутренний таб внутри выбранного верхнего таба
			const innerTabItems = document.querySelectorAll(`#${topTabId} .tab-btn-inner`);
			const innerTabContents = document.querySelectorAll(`#${topTabId} .tab-content-inner`);

			if (innerTabItems.length > 0 && !accordion) {
				innerTabItems.forEach((btn) => btn.classList.remove('active', 'w--current'));
				innerTabContents.forEach((content) => content.classList.remove('active', 'w--current'));

				innerTabItems[0].classList.add('active', 'w--current');
				innerTabContents[0].classList.add('active', 'w--current');
			}
		});
	}


// init wow.js
	const wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animate__animated',
		mobile: false,
	})

	wow.init()

	// Инициализация Fancybox
	Fancybox.bind("[data-fancybox]", {
		Carousel: {
			infinite: false,
		},
	});


	// Главный слайдер (баннер)
	if (document.querySelector('.mainHeroSwiper')) {
		const swiper = new Swiper(".mainHeroSwiper", {
			simulateTouch: false,
			loop: true,

			autoplay: {
				delay: 3500,
				disableOnInteraction: false,
			},

			pagination: {
				el: ".swiper-pagination",
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + "</span>";
				},
			},

			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		});
	}

	// Сладйер с программами на главной
	if (document.querySelector('.main-programmes .slider-wrapper')) {
		let sliderWrapper = document.querySelector('.main-programmes .slider-wrapper');
		let slides = sliderWrapper.querySelectorAll('.slider-item');
		let slidesCount = slides.length;

		const programSlider = new Swiper(".slider-wrapper", {
			wrapperClass: "slider-list",
			slideClass: "slider-item",
			navigation: {
				nextEl: '.next-slide',
				prevEl: '.prev-slide'
			},
			autoplay: slidesCount > 4 ? {
				delay: 4000,
				disableOnInteraction: false
			} : false,
			speed: 300,
			slidesPerView: 'auto',
			loop: slidesCount > 4
		});
	}

	// Слайдер на странице Экскурсий
	if (document.querySelector('.slider-exurs-wrapper')) {
		document.querySelectorAll('.slider-exurs-wrapper').forEach(sliderWrapperElement => {
			const sliderWrapper = sliderWrapperElement.querySelector('.mask-slider-exurs');
			const slides = sliderWrapper.querySelectorAll('.slide-exurs');
			const slidesCount = slides.length;

			if (slidesCount > 3) {
				sliderWrapper.classList.remove('less-than-4');

				new Swiper(sliderWrapperElement, {
					wrapperClass: "mask-slider-exurs",
					slideClass: "slide-exurs",
					navigation: {
						nextEl: sliderWrapperElement.querySelector('.slide-nav-right'),
						prevEl: sliderWrapperElement.querySelector('.slide-nav-left')
					},
					speed: 300,
					slidesPerView: 'auto',
					loop: false,
				});
			}
		});
	}


	if (document.querySelector('.contentPhotoSwiper')) {
		const swiper = new Swiper(".contentPhotoSwiper", {
			simulateTouch: false,
			loop: true,

			/*
			autoplay: {
				delay: 3500,
				disableOnInteraction: false,
			},
			 */

			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		});
	}

});



