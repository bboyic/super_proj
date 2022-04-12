var tmp;
var i = 0;
setImg = function (el) {
	if (el.getAttribute('flag') == '0'){
		el.src = el.src.replace('src/likes.svg', 'src/full_like.png');
		el.setAttribute('flag', 1);
	}
	else {
		el.src = el.src.replace('src/full_like.png', 'src/likes.svg');
		el.setAttribute('flag', 0);
	}
};
