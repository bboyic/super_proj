var tmp;
var i = 0;
setImg = function (el, chill) {
	if (el.getAttribute('flag') == '0'){
		document.getElementById(chill).innerText = "257";
		el.src = el.src.replace('src/likes.svg', 'src/full_like.png');
		el.setAttribute('flag', 1);
	}
	else {
		document.getElementById(chill).innerText = "256";
		el.src = el.src.replace('src/full_like.png', 'src/likes.svg');
		el.setAttribute('flag', 0);
	}
};
