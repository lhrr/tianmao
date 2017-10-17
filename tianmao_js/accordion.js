$(document).ready(function(){

	
	$(".accordion h3").click(function(){
		var j=$(this).index();

		// 点击h3后相应的图片弹出
		$(".accordion-img img").eq(j/2).css('display','block').siblings("img").css('display','none');

		// h3标签的小图标实现旋转
		$(this).children("span").rotate({animateTo:90,duration:200});
		$(this).siblings("h3").children("span").rotate({animateTo:0,duration:200});

		// 点击h3后相对应得p滑出，其余的p滑上消失
		$(".accordion p").eq(j/2).slideDown(400).siblings("p").slideUp(400);
	})


})