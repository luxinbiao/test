$(function() {
	function alertshow(){
		var index=0;
		var timer=null;
		clearInterval(timer);
		$("#show").css({"display":"block"});
		timer=setInterval(function(){
			index++;
			if(index>2){
				index=0;
				clearInterval(timer);
				$("#show").css({"display":"none"});
			}
		},500);
	}
	$(".list").on("tap", "li .foot .zan", function() {
		if(!$(this).parent().is(".lis")) {
			$(this).find("span").addClass("backzan");
			$(this).find("i").html(parseInt($(this).find("i").html()) + 1);
			$(this).parent().addClass("lis");
			$("#show").html("您已顶过了");
		}
		else{
			alertshow();
		}
	})
	$(".list").on("tap", "li .foot .cai", function() {
		if(!$(this).parent().is(".lis")) {
			$(this).find("span").addClass("backcai");
			$(this).find("i").html(parseInt($(this).find("i").html()) + 1);
			$(this).parent().addClass("lis");
			$("#show").html("您已踩过了");
		}
		else{
			alertshow();
		}
	})
	var soh;
	var timer=null;
	var listh = $(".list").height();
	$(".list").scroll(function(){
		soh=$(this).scrollTop();
			if(soh>listh){
				$(".gotop").stop().animate({"right":"0.8rem"},100);
			}
			else{
				$(".gotop").stop().animate({"right":"-1.8rem"},100);
			}
	})
	$(".gotop").on("tap",function(ev){
		$(".list").animate({scrollTop:0},1000);
		$(".nav").stop().animate({"top":"2rem"},300);
	})
	$(".list").on("tap","li .foot .zhuanzai",function(){
		$(".share").animate({"bottom":"0"},300);
		$(".yiny").show();
	})
	$(".cancel").on("tap",function(){
		$(".share").animate({"bottom":"-9rem"},300);
		$(".yiny").hide();
	})
	$(".yiny").on("tap",function(){
		$(".share").animate({"bottom":"-9rem"},300);
		$(this).hide();
	})
})