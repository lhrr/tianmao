// 登录按钮提示动画
$(function(){
	var onloadShow=$("#landing-show");
	// var timer;
	// timer = setInterval(function(){
	// 	onloadShow.animate({top:46},500,function(){
	// 		onloadShow.animate({top:33},500)
	// 	})
	// },1000)
	var tick=function(){
		onloadShow.animate({top:46},500,function(){
			onloadShow.animate({top:33},500,tick);
		})
	}
	tick();
})

// 点击登录按钮弹出登录窗口
$(function(){
	var alertLoad=$("#alertLoad");
	alertLoad.click(function(){
		$(".landing-window").css('display','block');
		// 登录窗口左上角logo的动画。
		$("#loading-image1").animate({top:-25},1800);
	})

	var delAlert=$("#loading-del");
	// 登录窗口关闭按钮
	delAlert.click(function(){
		$(".landing-window").css('display','none');
		// 点击关闭按钮后登陆窗口的内容初始化
		$("#loading-image1").animate({top:0},100);            //左上角的图片恢复原位；
		userNum.val('');                                      //清除输入框的值；
		password.val('');
		reset1.css('display','none');                         //隐藏清除按钮；
		reset2.css('display','none');
		$(".loading-window-bottom p").text("");               //清除输入提示的内容。
	})
})


var userNum=$("#userNum"),
	reset1=$("#reset1"),
	reset2=$("#reset2"),
	password=$("#password"),
	loadbtn=$(".loading-button");
// 为输入框后面的重置按钮绑定事件，当输入了值后显示出来，当按下去的时候会清除输入的值然后隐藏
$(function(){
	
	userNum.bind('input propertychange',function(){
		if(this.value){
			reset1.css('display','block');
		}else{
			reset1.css('display','none');
		}
	})
	password.bind('input propertychange',function(){
		if(this.value){
			reset2.css('display','block');
		}else{
			reset2.css('display','none');
		}
	})
	
	
	reset1.click(function(){
		userNum.val('');
		$(this).css('display','none');
	})
	reset2.click(function(){
		password.val('');
		$(this).css('display','none');
	})

	userNum.focus(function(){
		$(".loading-userNum").addClass("textShadow");
	})
	userNum.blur(function(){
		$(".loading-userNum").removeClass("textShadow");
		if($(this).val()==''){
			reset1.css('display','none');
		}
	})
	password.focus(function(){
		$(".loading-password").addClass("textShadow");
	})
	password.blur(function(){
		$(".loading-password").removeClass("textShadow");
		if($(this).val()==''){
			reset2.css('display','none');
		}
	})

})

// 点击登录按钮后如果用户名或者密码没有输入会出现提示，输入正确会弹出对话框说暂时不支持注册。
$(function(){
	loadbtn.on('click',function(){
		if(userNum.val()=='' && password.val()==''){
			$(".loading-window-bottom p").text("请输入用户名和密码。");
		}else if(userNum.val()==''){
			$(".loading-window-bottom p").text("请输入用户名。");
		}else if(password.val()==''){
			$(".loading-window-bottom p").text("请输入用密码。");
		}else{
			$(".loading-window-bottom p").text("");                 //当用户和密码都存在时清除提示；
			alert("目前并不支持登陆！");
			$(".landing-window").css('display','none'); 
			//登陆窗口关闭后里面的样式初始化。
			userNum.val('');
			password.val('');
			reset1.css('display','none');
			reset2.css('display','none');
			$("#loading-image1").animate({top:0},100);
		}
	})
})
