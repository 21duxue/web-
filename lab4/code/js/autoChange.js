window.onload = function(){
	var img = document.getElementsByTagName('img');
	var picScroll = document.getElementById('picScroll');
	var picScroll1 = document.getElementById('picScroll1');
	var picScroll2 = document.getElementById('picScroll2');
	
	picScroll2.innerHTML = picScroll1.innerHTML;
	var change = setInterval(changeToLeft,10);
	picScroll.onmouseover = function(){
		clearInterval(change);
	} 
	picScroll.onmouseout = function(){
		change = setInterval(changeToLeft,10);
	}
	function changeToLeft(){
		if (picScroll.scrollLeft>=picScroll1.offsetWidth) 
			{
				picScroll.scrollLeft = 0;
			}
		else
			{
				picScroll.scrollLeft +=1;
			}
	}
}
