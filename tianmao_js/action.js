$(document).ready(function(){

	// 动起来部分鼠标滑过图片变大
	$("#action-img1").hover(function(){
		$(this).stop().animate({width:220,
						 height:119,
						 left:103,
						 top:59},500);
	},function(){
		$(this).stop().animate({width:180,
						 height:98,
						 left:123,
						 top:70},500)
	})

	// 动起来部分鼠标滑过图片椭圆
	$("#action-img2").hover(function(){
		$(this).stop().animate({borderTopLeftRadius:50,
								borderTopRightRadius:50,
								borderBottomLeftRadius:50,
								borderBottomRightRadius:50},500)
	},function(){
		$(this).stop().animate({borderTopLeftRadius:0,
								borderTopRightRadius:0,
								borderBottomLeftRadius:0,
								borderBottomRightRadius:0},500)
	})

	// // 动起来部分鼠标滑过图片旋转一周
	$("#action-li-img3").hover(function(){
		$("#action-img3").rotate({animateTo:360});
	},function(){
		$("#action-img3").rotate({animateTo:0});
	})



})

