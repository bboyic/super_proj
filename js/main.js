var tmp;
var i = 0;
setImg = function (el, chill) {
	if (el.getAttribute('flag') == '0'){
		document.getElementById(chill).innerText = "257";
		el.src = el.src.replace('src/likes.svg', 'src/full_like.svg');
		el.setAttribute('flag', 1);
	}
	else {
		document.getElementById(chill).innerText = "256";
		el.src = el.src.replace('src/full_like.svg', 'src/likes.svg');
		el.setAttribute('flag', 0);
	}
}

// Даниил
const str = '<span class="user_name">zarykovskaya</span> Просто суперски отдохнули в Сочи, вообще всем советую!...';
const str1 = '<span class="user_name">zarykovskaya</span> Просто суперски отдохнули в Сочи, вообще всем советую! Жара, море, песок и мноооого новых знакомств';
const str2 = '<span class="user_name">nelly_astovsky</span> Погода на чёрном море сегодня не лётная, но я такое даже люблю ...';
const str3 = '<span class="user_name">nelly_astovsky</span> Погода на чёрном море сегодня не лётная, но я такое даже люблю, ведь именно в такую погоду, открываются картины, которые многие не замечают.';


function def(){
	var	el = document.getElementById('view1');
	el.innerHTML = str;
	el = document.getElementById('view2');
	el.innerHTML = str2;
}

function chooseText(hr_id, num)
{
	console.log(hr_id);
	if (hr_id == "continue1" && num == 1)
		return (str);
	if (hr_id == "continue1" && num == 2)
		return (str1);
	if (hr_id == "continue2" && num == 1)
		return (str2);
	if (hr_id == "continue2" && num == 2)
		return (str3);
}

function showHide(element_id, hr_id){
	var	text;
	var	el = document.getElementById(element_id);
	var	hr = document.getElementById(hr_id);

	if (el) { 
		if (el.style.display != "inline-block"){
			text = chooseText(hr_id, 2);
			console.log(text);
			el.innerHTML = text;
			hr.textContent = 'скрыть';
			el.style.display = "inline-block";
		}
		else {
			hr.textContent = 'далее';
			text = chooseText(hr_id, 1);
			el.innerHTML = text;
			el.style.display = "block";
		}
	}
}

var prevEl = 0;
function ToRooms(html) {
		window.location.href = html;
	}

// Слайдер
// -------------------------------------------
/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex, 'post1');
showSlides(slideIndex, 'post2');

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
	showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
	showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n, el_id) {
	showSlides(slideIndex = n, el_id);
}

/* Основная функция слайдера */
function showSlides(n, el_id) {
	var	i;
	let	parent = document.querySelector('#'+el_id);
	let	slider = parent.querySelector('.slider');
	let	slider_dots = parent.querySelector('.slider-dots');
	var	slides = slider.querySelectorAll('.post_content');
	var	dots = slider_dots.querySelectorAll('.slider-dots_item');
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}

function showComment(el_id) {
	let	parent = document.querySelector('#'+el_id);
	var	comment = parent.querySelectorAll('.post_comments');
	comment[0].style.display = "block";
}

function hideComment(el_id) {
	let	parent = document.querySelector('#'+el_id);
	var	comment = parent.querySelectorAll('.post_comments');
	comment[0].style.display = "none";
}

// -------------------------------------------