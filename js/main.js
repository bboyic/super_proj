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
const str = '<span class="user_name">zarykovskaya</span>Просто суперски отдохнули в Сочи, вообще всем советую!...';
const str1 = '<span class="user_name">zarykovskaya</span>Просто суперски отдохнули в Сочи, вообще всем советую! Жара, море, песок и мноооого новых знакомств';
const str2 = '<span class="user_name">nelly_astovsky</span>Погода на чёрном море сегодня не лётная, но я такое даже люблю ...';
const str3 = '<span class="user_name">nelly_astovsky</span>Погода на чёрном море сегодня не лётная, но я такое даже люблю, ведь именно в такую погоду, открываются картины, которые многие не замечают.';


function def(){
	var el = document.getElementById('view1');
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
	var text;
	var el = document.getElementById(element_id);
	var hr = document.getElementById(hr_id);

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
