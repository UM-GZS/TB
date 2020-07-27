window.onload = function() {
	var swiper = document.getElementById('swiper'),
	pic = document.getElementById('swiper_ul').getElementsByTagName("li"),
	list = document.getElementById('swiper_ol').getElementsByTagName("li"),
	swiper_two = document.getElementById('swiper_two'),
	pic_two = document.getElementById('swiper_ul_two').getElementsByTagName("li"),
	list_two = document.getElementById('swiper_ol_two').getElementsByTagName("li"),
	swiper_span = document.getElementById('swiper_span'),
	index = 0,
	index_two = 0,
	timer = null,
	timer_two = null;
	
	timer = setInterval(autoPlay, 4000);
	timer_two = setInterval(autoPlayTwo, 4000);
	
	swiper.onmouseover = function () {
		clearInterval(timer);
	}
	swiper_two.onmouseover = function () {
		clearInterval(timer_two);
	}
	
	swiper.onmouseout = function () {
		timer = setInterval(autoPlay, 4000);
	}
	swiper_two.onmouseout = function () {
		timer = setInterval(changePicTwo, 4000);
	}
	
	for(var i = 0;i < list.length;i++) {
		list[i].onmouseover = function () {
			index = this.getAttribute("data") - 1;
			clearInterval(timer);
			changePic(index);
		}
	}
	for(var i = 0;i < list_two.length;i++) {
		list_two[i].onmouseover = function () {
			index_two = this.getAttribute("data") - 1;
			console.log("data is :"+index_two);
			clearInterval(timer_two);
			changePicTwo(index_two);
		}
	}
	
	function autoPlay () {
		if(++index >= pic.length) index = 0;
		changePic(index);
	}
	function autoPlayTwo () {
		if(++index_two >= pic_two.length) index_two = 0;
		changePicTwo(index_two);
	}
	
	function changePic (curIndex) {
	 for (var i = 0; i < pic.length; ++i) {
	 pic[i].style.display = "none";
	 list[i].className = "";
	 }
	 pic[curIndex].style.display = "block";
	 list[curIndex].className = "swiper_on";
	 }
	 function changePicTwo (curIndex) {
		 
	  for (var i = 0; i < pic_two.length; ++i) {
	  pic_two[i].style.display = "none";
	  list_two[i].className = "";
	  }
	  pic_two[curIndex].style.display = "block";
	  list_two[curIndex].className = "s_on";
	  swiper_span.innerHTML = curIndex+1;
	  }
}