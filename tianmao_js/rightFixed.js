$(document).ready(function(){

	// 鼠标移动到相应位置弹出个人基本情况介绍
	$(".R-fixed-self").hover(function(){
		$(this).css('background','#f20e33');
		$(".selfInfo").show();
		$(".selfInfo").stop().animate({right:35,opacity:1},500);
	},function(){
		$(this).css('background','#000');
		$(".selfInfo").stop().animate({right:200,opacity:0},500,function(){
			$(".selfInfo").hide();
		});
	})

	// 鼠标移动到相关位置弹出个人技能菜单
	$(".R-fixed-skill").hover(function(){
		$(this).css('background','#04b2e0');
		$(".skillInfo").css('width','0');
		$(".skillInfo").css('display','block');
		$(".skillInfo").stop().animate({width:500},1000);
	},function(){
		$(this).css('background','#000');
		$(".skillInfo").stop().animate({width:0},1000,function(){
			$(".skillInfo").css('display','none');
		})
	})

	// 鼠标移动到相关位置，弹出个人微信二维码
	$(".R-fixed-weixin").hover(function(){
		$(this).css('background-color','#34e208');
		$(".weixin-img").stop().slideDown();
	},function(){
		$(this).css('background-color','#000');
		$(".weixin-img").stop().slideUp();
	})

	// 当页面下滑到一定的距离时，返回顶部按钮出现，按下按钮后返回顶部
	$(window).scroll(function(){
		if($(window).scrollTop()>200){
			$(".R-fixed-totop").show();
		}else{
			$(".R-fixed-totop").hide();
		}
	})
	$(".R-fixed-totop").click(function(){
		$("body,html").animate({scrollTop:0},500);
	})


})