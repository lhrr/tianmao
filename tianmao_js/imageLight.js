$(document).ready(function(){

	// 鼠标移动到图片内部时图片放大实现聚焦效果
	var width=$(".light-img1").width();
	var height=$(".light-img1").height();
	var goLeft=(width*1.2-width)/2;
	var goTop=(height*1.2-height)/2;
	$(".light-img1").hover(function(){
		$(this).stop().animate({width:width*1.2,
								height:height*1.2,
								top:-goTop,
								left:-goLeft},200)
	},function(){
		$(this).stop().animate({width:width,
								height:height,
								top:0,
								left:0},200)
	})


	// 鼠标移动到图片上时图片出现高亮
	$(".light-img2-bg").hover(function(){
		$(".light-img2-bg").css('opacity','0.2');
	},function(){
		$(".light-img2-bg").css('opacity','0');
	})

	// 鼠标移动到图片上时字体会滑出
	$(".light-img3").hover(function(){
		$(".body-light-same p").stop().slideDown(1000);
	},function(){
		$(".body-light-same p").stop().slideUp(1000);
	})
})