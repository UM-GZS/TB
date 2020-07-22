window.onload = function() {
	var swiper = document.getElementById('swiper'),
	pic = document.getElementById('swiper_ul').getElementsByTagName("li"),
	list = document.getElementById('swiper_ol').getElementsByTagName("li"),
	index = 0,
	timer = null;
	
	timer = setInterval(autoPlay, 2000);
	
	swiper.onmouseover = function () {
		clearInterval(timer);
	}
	
	swiper.onmouseout = function () {
		timer = setInterval(autoPlay, 2000);
	}
	
	for(var i = 0;i < list.length;i++) {
		list[i].onmouseover = function () {
			clearInterval(timer);
			index = list.getAttribute("title") - 1;
			console.log("data is :"+index)
			changePic(index);
		}
	}
	
	function autoPlay () {
		if(++index >= pic.length) index = 0;
		changePic(index);
	}
	
	function changePic (curIndex) {
	 for (var i = 0; i < pic.length; ++i) {
	 pic[i].style.display = "none";
	 list[i].className = "";
	 }
	 pic[curIndex].style.display = "block";
	 list[curIndex].className = "swiper_on";
	 }
}