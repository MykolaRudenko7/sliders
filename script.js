                       // 1 slider (flex)

/*
// всі зображення
const images = document.querySelectorAll('.slider__wrapper img');
// контейнер
const sliderWrapper = document.querySelector('.slider__wrapper');
// номер
let count = 0;
// ширина
let width;

function init() {

	// ширина слайдера
   width = document.querySelector('.slider').offsetWidth;
	
	//вказуєм ширину обертки слайдера = ширина помножина на к-сть зображень
	sliderWrapper.style.width = width * images.length + 'px';
	
	// для кожного зображення роблю ширину як ширина слайдеру
	images.forEach(item => {
      item.style.width = width + 'px';
		// висота автоматично
      item.style.height = 'auto';
   });

	// ф-ція, що переміщає слайд
   rollSlider();
}

// запускаю функцію, щоб вона при робило одразу при зазрузці 
init();
// подія: при зміні ширини вюпорта відбувається Ф-ція вище
window.addEventListener('resize', init);


// кнопка вперед, при клікові до додаю 1, якщо перемінна більша або = к-сті зображень , то присвоюєм 0, + перемотую слайд
document.querySelector('.btn-next').addEventListener('click', function () {
   count++;
   if (count >= images.length) {
      count = 0;
   }
   rollSlider();
});

// кнопка назад 
document.querySelector('.btn-prev').addEventListener('click', function () {
   count--;
   if (count < 0) {
		// -1 бо відлік з 0
      count = images.length - 1;
   }
   rollSlider();
});

// ф-ція перемотки, дає стиль, здвиг вліво на ширину 1 зображення
function rollSlider() {
   sliderWrapper.style.transform = 'translate(-' + count * width + 'px)';
}
*/


/*                              // 2 my


// кнопки
const prev = document.querySelector('.btn-prev');
const next = document.querySelector('.btn-next');

// слайди
const slides = document.querySelectorAll('.slider__item');
console.log(slides);
// dots
const dots = document.querySelectorAll('.slider-dots__item');
console.log(dots);

// перемінна активного слайду
let index = 0;



//                            ф-ція що ставить активн слайд
const activeSlide = n => {
	// циклом убираєм у слайдів клас "active"
	for (let slide of slides) {
		slide.classList.remove('active');
	}
	// але до теперішнього добавляєм
	slides[n].classList.add('active');
}

//                             ф-ція що ставить активну точку
const activeDots = n => {
	// циклом убираєм у dots клас "active"
	for (let dot of dots) {
		dot.classList.remove('active');
	}
	// але до теперішнього добавляєм
	dots[n].classList.add('active');
}

//                                           обща 
const prepareCurrentSlide = ind => {
	activeSlide(ind);
	activeDots(ind);
}




//                                        ф-ця + slide
const nextSlide = () => {
	// провірить, якщо наш слайд останній (-1 бо з 0)
	if(index == slides.length -1) {
		// то пререходим на 0(1й слайд)
		index = 0;
		prepareCurrentSlide(index)
	} else {
		// якщо не так, то збільш на 1
		index++
		prepareCurrentSlide(index)
	}
}

//                                        ф-ця - slide
const prevSlide = () => {
	// провірить, якщо наш слайд перший
	if(index == 0) {
		// то пререходим 1ший
		index = slides.length -1
		prepareCurrentSlide(index)
	} else {
		// якщо не так, то збільш на 1
		index--;		
		prepareCurrentSlide(index)
	}
}

//                                            при події 
next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)



//                              при клікові на кнопку одкриваю картинку
dots.forEach( (item, indexDot) => {
	item.addEventListener('click', () => {
		index = indexDot;
		prepareCurrentSlide(index)
	})
})
// setInterval(nextSlide, 5000)
*/






// 3 Like jQuery

// /* Индекс слайда по умолчанию */
// let  slideIndex = 1;
// showSlides(slideIndex);

// /* Функция увеличивает индекс на 1, показывает следующй слайд*/
// function plusSlide() {
//    showSlides(slideIndex += 1);
// }

// /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
// function minusSlide() {
//    showSlides(slideIndex -= 1);  
// }

// /* Устанавливает текущий слайд */
// function currentSlide(n) {
//    showSlides(slideIndex = n);
// }

// /* Основная функция сладера */
// function showSlides(n) {
//    let i;
//    const slides = document.getElementsByClassName("item");
//    const dots = document.getElementsByClassName("slider-dots_item");
//    if (n > slides.length) {
//       slideIndex = 1
//    }
//    if (n < 1) {
//       slideIndex = slides.length
//    }
//    for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//    }
//    for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//    }
//    slides[slideIndex - 1].style.display = "block";
//    dots[slideIndex - 1].className += " active";
// }
