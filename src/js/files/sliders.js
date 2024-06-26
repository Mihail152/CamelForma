/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Thumbs } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
 import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
 //import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
//import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.swiper')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		var swiper = new Swiper('.develop-swiper', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			loop: true,
			spaceBetween: 20,
			slidesPerView: 4,
		//	slidesPerGroup: 4,
		//	freeMode: true,
		//	watchSlidesProgress: true,
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
			},
		});
		var swiper = new Swiper('.swiper-tab1', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			loop: true,
			spaceBetween: 20,
			slidesPerView: 3,
		//	slidesPerGroup: 4,
		//	freeMode: true,
		//	watchSlidesProgress: true,
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
			},
		});
		var swiper = new Swiper('.swiper-tab2', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			loop: true,
			spaceBetween: 20,
			slidesPerView: 3,
		//	slidesPerGroup: 4,
		//	freeMode: true,
		//	watchSlidesProgress: true,
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
			},
		});
		var swiper = new Swiper('.swiper-tab3', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			loop: true,
			spaceBetween: 20,
			slidesPerView: 3,
		//	slidesPerGroup: 4,
		//	freeMode: true,
		//	watchSlidesProgress: true,
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
			},
		});
		var swiper = new Swiper('.mySwiper', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			loop: true,
			spaceBetween: 10,
			slidesPerView: 8,
			freeMode: true,
			watchSlidesProgress: true,
			breakpoints: {
				320: {
					slidesPerView: 3,
					spaceBetween: 10,
					autoHeight: true,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 10,
				},
				992: {
					slidesPerView: 8,
					spaceBetween: 10,
				},
				1268: {
					slidesPerView: 8,
					spaceBetween: 10,
				},
			},
		});
		var swiper2 = new Swiper('.mySwiper2', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Thumbs],
			//observer: true,
			//observeParents: true,
			//slidesPerView: 1,
			//spaceBetween: 0,
			//autoHeight: true,
		//	speed: 800,
			//freeMode: true,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},*/
      thumbs: {
        swiper: swiper,
      },

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			
*/
			// Кнопки "влево/вправо"
		/*	navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
*/
			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			
			*/
		
		
		});
		
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});