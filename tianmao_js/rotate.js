$(document).ready(function(){

	var index=0,
		i,
		lens=$(".body-rotation-img a").length,
		timer,
		wid=$("#body-rotation-img a").width();

	function rotate(){

		clearInterval(timer);

		timer=setInterval(function(){
			if(index<lens-1){
				index++;
			}else{
				index=0;
			}
			moving();
		},3500)
	}
	rotate();

	$(".body-rotation").mouseover(function(){
			clearInterval(timer);
	})
	$(".body-rotation").mouseout(function(){
			rotate();
	})	

	$("#body-rotation-dots li").click(function(){
		index=$(this).index();
		moving();
	})

	$(".rotation-btn-left").hover(function(){
		$(this).addClass('rotation-btn-active');
	},function(){
		$(this).removeClass('rotation-btn-active');
	})
	$(".rotation-btn-right").hover(function(){
		$(this).addClass('rotation-btn-active');
	},function(){
		$(this).removeClass('rotation-btn-active');
	})

	$(".rotation-btn-left").click(function(){
		index--;
		if(index<0){
			index=lens-1;
		}
		moving();
	})
	$(".rotation-btn-right").click(function(){
		index++;
		if(index>=lens){
			index=0;
		}
		moving();
	})


	function moving(){
		$("#body-rotation-dots li").removeClass('active');
		$("#body-rotation-dots li").eq(index).addClass('active');
		$("#body-rotation-img").stop().animate({left:-index*wid},500);
	}	
})



