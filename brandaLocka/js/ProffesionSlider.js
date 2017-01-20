 
 (function ($) {
var hwSlideSpeed = 700;
var hwTimeOut = 3000;
var hwNeedLinks = true;

$(document).ready(function(e) {
	$('.slideProf').css(
		{"position" : "absolute",
		 "top":'0', "left": '0'}).hide().eq(0).show();
	var slideNum = 0;
	var slideTime;
	slideCount = $("#sliderProff .slideProf").size();
	var animSlide = function(arrow){
		clearTimeout(slideTime);
		$('.slideProf').eq(slideNum).fadeOut(hwSlideSpeed);
		if(arrow == "next"){
			if(slideNum == (slideCount-1)){slideNum=0;}
			else{slideNum++}
			}
		else if(arrow == "prew")
		{
			if(slideNum == 0){slideNum=slideCount-1;}
			else{slideNum-=1}
		}
		else{
			slideNum = arrow;
			}
		$('.slideProf').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
		 
		}
if(hwNeedLinks){
var $linkArrow = $('<a id="prewbuttonProff" href="#">&lt;</a><a id="nextbuttonProff" href="#">&gt;</a>')
	.prependTo('#sliderProff');		
	$('#nextbuttonProff').click(function(){
		animSlide("next");
		return false;
		})
	$('#prewbuttonProff').click(function(){
		animSlide("prew");
		return false;
		})
}
	var $adderSpan = '';
	 
 
	 
	var pause = false;
	var rotator = function(){
			if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);}
			}
	$('#sliderProff-wrap').hover(	
		function(){clearTimeout(slideTime); pause = true;},
		function(){pause = false; rotator();
		});
	rotator();
});
})(jQuery);
/*Slider END code*/