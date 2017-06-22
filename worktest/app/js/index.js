//段子
//		var ur="http://m.neihanshequ.com/?skip_guidence=1&is_json=1&app_name=neihanshequ_web&min_time=&csrfmiddlewaretoken=247453b2cb224957ea640466766003b8";
//评论
//		var ur="http://m.neihanshequ.com/api/get_essay_comments/?app_name=neihanshequ_web&group_id=62063218738&offset=0&csrfmiddlewaretoken=247453b2cb224957ea640466766003b8";
//		图片
//		var ur="http://m.neihanshequ.com/pic/?is_json=1&app_name=neihanshequ_web&min_time=1497578838&csrfmiddlewaretoken=247453b2cb224957ea640466766003b8";
//		视频
//var ur="http://m.neihanshequ.com/video/?is_json=1&app_name=neihanshequ_web&min_time=1497584308&csrfmiddlewaretoken=247453b2cb224957ea640466766003b8";
document.documentElement.style.fontSize = innerWidth / 16 + "px";
$(function() {
	function gettext(){
		var flag=false;
		var str = "";
		if($(".listtxt").html()==""){
			if(!flag){
				divr = "<div class='load'><span></span></div>";
				$(".list").append(divr);
				flag = true;
			}
		}
		var ur = "http://m.neihanshequ.com/?skip_guidence=1&is_json=1&app_name=neihanshequ_video&min_time=1497699938&csrfmiddlewaretoken=70faddc0d620ee6ba01b2e0627593360";
		var arr = [];
		
		$.ajax({
			type: "get",
			url: ur,
			dataType: "jsonp",
			success: function(data) {
				arr = data.data.data;
				console.log(arr);
				for(var i = 0; i < arr.length; i++) {
					str += "<li><div class='uesrname'><img src='" + arr[i].group.user.avatar_url + "'></img><span>" + arr[i].group.user.name + "</span></div>";
					str += "<div class='text'><p>" + arr[i].group.text + "</p></div>";
					str += "<div class='foot'><div class='zan'><span></span><i>" + 50 * (i + 1) + "</i></div><div class='cai'><span></span><i>" + 20 * (i + 1) + "</i></div>";
					str += "<div class='pinlun'><span></span><i>" + 5 * (i + 1) + "</i></div><div class='zhuanzai'><span></span><i>" + 10 * (i + 1) + "</i></div></div></li>";
				}
				$(".load").remove();
				$(".listtxt").html(str);
				flag=false;
			}
		})
		var sy, dir,ulsh, listh = 0,st = 0,divr ="";
		$(".list").on("touchstart", function(ev) {
			ulsh = 0;
			sy = ev.touches[0].pageY;
			for(var j = 0; j < $("li").length; j++) {
				ulsh += $("li").eq(j).height();
			}
			listh = $(".list").height();
		})
		$(".list").on("touchmove", function(ev) {
			st = $(this).scrollTop();
			dir = ev.touches[0].pageY - sy;
//			console.log(st, listh, ulsh);
			if(dir < -200 && ulsh <= (st + listh)) {
				if(!flag) {
					divr = "<div class='load'><span></span></div>";
					$(".list").append(divr);
					flag = true;
				}
			}
			if(dir<0){
				$(".nav").stop().animate({"top":"0px"},300);
			}
			else{
				$(".nav").stop().animate({"top":"2rem"},300);
			}
		})
		$(".list").on("touchend", function(ev) {
			if(dir < -200 && ulsh <= (st + listh)) {
				$.ajax({
					type: "get",
					url: ur,
					dataType: "jsonp",
					success: function(data) {
						arr = data.data.data;
						if(arr.length <= 20) {
							for(var i = 0; i < arr.length; i++) {
								str += "<li><div class='uesrname'><img src='" + arr[i].group.user.avatar_url + "'></img><span>" + arr[i].group.user.name + "</span></div>";
								str += "<div class='text'><p>" + arr[i].group.text + "</p></div>";
								str += "<div class='foot'><div class='zan'><span></span><i>" + 50 * (i + 1) + "</i></div><div class='cai'><span></span><i>" + 20 * (i + 1) + "</i></div>";
								str += "<div class='pinlun'><span></span><i>" + 5 * (i + 1) + "</i></div><div class='zhuanzai'><span></span><i>" + 10 * (i + 1) + "</i></div></div></li>";
							}
							$(".load").remove();
							$(".listtxt").html(str);
							flag=false;
						}
					}
				})
			}
		})
	}
	function getvideo() {
		var flag=false;
		var str = "";
		if($(".listtxt").html()==""){
			if(!flag){
				divr = "<div class='load'><span></span></div>";
				$(".list").append(divr);
				flag = true;
			}
		}
		var ur="http://m.neihanshequ.com/video/?skip_guidence=1&is_json=1&app_name=neihanshequ_web&min_time=1497584308&csrfmiddlewaretoken=247453b2cb224957ea640466766003b8";
		var arr = [];
		
		$.ajax({
			type: "get",
			url: ur,
			dataType: "jsonp",
			success: function(data) {
				arr = data.data.data;
				console.log(arr);
				for(var i = 0; i < arr.length; i++) {
					str += "<li><div class='uesrname'><img src='" + arr[i].group.user.avatar_url + "'></img><span>" + arr[i].group.user.name + "</span></div>";
					str+="<div class='text'><p>" + arr[i].group.text + "</p></div>";
					str += "<div class='shiping'><img src='"+arr[i].group.large_cover.url_list[0].url+"'></img><span></span></div>";
					str += "<div class='foot'><div class='zan'><span></span><i>" + 50 * (i + 1) + "</i></div><div class='cai'><span></span><i>" + 20 * (i + 1) + "</i></div>";
					str += "<div class='pinlun'><span></span><i>" + 5 * (i + 1) + "</i></div><div class='zhuanzai'><span></span><i>" + 10 * (i + 1) + "</i></div></div></li>";
				}
				$(".load").remove();
				$(".listtxt").html(str);
				flag=false;
			}
		})
		var sy, dir,ulsh, listh = 0,st = 0,divr ="";
		$(".list").on("touchstart", function(ev) {
			ulsh = 0;
			sy = ev.touches[0].pageY;
			for(var j = 0; j < $("li").length; j++) {
				ulsh += $("li").eq(j).height();
			}
			listh = $(".list").height();
		})
		$(".list").on("touchmove", function(ev) {
			st = $(this).scrollTop();
			dir = ev.touches[0].pageY - sy;
//			console.log(st, listh, ulsh);
			if(dir < -200 && ulsh <= (st + listh)) {
				if(!flag) {
					divr = "<div class='load'><span></span></div>";
					$(".list").append(divr);
					flag = true;
				}
			}
			if(dir<0){
				$(".nav").stop().animate({"top":"0px"},300);
			}
			else{
				$(".nav").stop().animate({"top":"2rem"},300);
			}
		})
		$(".list").on("touchend", function(ev) {
			if(dir < -200 && ulsh <= (st + listh)) {
				$.ajax({
					type: "get",
					url: ur,
					dataType: "jsonp",
					success: function(data) {
						arr = data.data.data;
						if(arr.length <= 20) {
							for(var i = 0; i < arr.length; i++) {
								str += "<li><div class='uesrname'><img src='" + arr[i].group.user.avatar_url + "'></img><span>" + arr[i].group.user.name + "</span></div>";
					str+="<div class='text'><p>" + arr[i].group.text + "</p></div>";
					str += "<div class='shiping'><img src='"+arr[i].group.large_cover.url_list[0].url+"'></img><span></span></div>";
					str += "<div class='foot'><div class='zan'><span></span><i>" + 50 * (i + 1) + "</i></div><div class='cai'><span></span><i>" + 20 * (i + 1) + "</i></div>";
					str += "<div class='pinlun'><span></span><i>" + 5 * (i + 1) + "</i></div><div class='zhuanzai'><span></span><i>" + 10 * (i + 1) + "</i></div></div></li>";
							}
							$(".load").remove();
							$(".listtxt").html(str);
							flag=false;
						}
					}
				})
			}
		})
		
	}
	function getimg(){
		var flag=false;
		var str = "";
		if($(".listtxt").html()==""){
			if(!flag){
				divr = "<div class='load'><span></span></div>";
				$(".list").append(divr);
				flag = true;
			}
		}
		var ur="http://m.neihanshequ.com/pic/?skip_guidence=1&is_json=1&app_name=neihanshequ_web&min_time=1497578838&csrfmiddlewaretoken=247453b2cb224957ea640466766003b8";
		var arr = [];
		
		$.ajax({
			type: "get",
			url: ur,
			dataType: "jsonp",
			success: function(data) {
				arr = data.data.data;
				console.log(arr);
				for(var i=0;i<arr.length;i++){
					str+="<li><div class='uesrname'><img class='lazy' src='" + arr[i].group.user.avatar_url + "'></img><span>" + arr[i].group.user.name + "</span></div>";
					str+="<div class='text'><p>" + arr[i].group.text + "</p></div>";
					str+="<div class='tupian'><img src='"+arr[i].group.large_image.url_list[0].url+"'></img></div>";
					str += "<div class='foot'><div class='zan'><span></span><i>" + 50 * (i + 1) + "</i></div><div class='cai'><span></span><i>" + 20 * (i + 1) + "</i></div>";
								str += "<div class='pinlun'><span></span><i>" + 5 * (i + 1) + "</i></div><div class='zhuanzai'><span></span><i>" + 10 * (i + 1) + "</i></div></div></li>";
				}
				$(".load").remove();
				$(".listtxt").html(str);
				flag=false;
			}
		})
		var sy, dir,ulsh, listh = 0,st = 0,divr1 = "";
		$(".list").on("touchstart", function(ev) {
			ulsh = 0;
			sy = ev.touches[0].pageY;
			for(var j = 0; j < $("li").length; j++) {
				ulsh += $("li").eq(j).height();
			}
			listh = $(".list").height();
		})
		$(".list").on("touchmove", function(ev) {
			st = $(this).scrollTop();
			dir = ev.touches[0].pageY - sy;
//			console.log(st, listh, ulsh);
			if(dir < -200 && ulsh <= (st + listh)) {
				if(!flag) {
					divr1 = "<div class='load'><span></span></div>";
					$(".list").append(divr1);
					flag = true;
				}
			}
			if(dir<0){
				$(".nav").stop().animate({"top":"0px"},300);
			}
			else{
				$(".nav").stop().animate({"top":"2rem"},300);
			}
		})
		$(".list").on("touchend",function(ev){
			if(dir < -200 && ulsh <= (st + listh)) {
				$.ajax({
					type: "get",
					url: ur,
					dataType: "jsonp",
					success: function(data) {
						arr = data.data.data;
						if(arr.length <= 20) {
							for(var i = 0; i < arr.length; i++) {
								str+="<li><div class='uesrname'><img src='" + arr[i].group.user.avatar_url + "'></img><span>" + arr[i].group.user.name + "</span></div>";
					str+="<div class='text'><p>" + arr[i].group.text + "</p></div>";
					str+="<div class='tupian'><img src='"+arr[i].group.large_image.url_list[0].url+"'></img></div>";
					str += "<div class='foot'><div class='zan'><span></span><i>" + 50 * (i + 1) + "</i></div><div class='cai'><span></span><i>" + 20 * (i + 1) + "</i></div>";
								str += "<div class='pinlun'><span></span><i>" + 5 * (i + 1) + "</i></div><div class='zhuanzai'><span></span><i>" + 10 * (i + 1) + "</i></div></div></li>";
							}
							$(".load").remove();
							$(".listtxt").html(str);
							flag=false;
						}
					}
				})
			}
		})
		var h=$("body").outerHeight();
	$(".list").on("tap",".tupian img",function(ev){
		$(".bigimg img").removeClass("big")
		var srcc=$(this).attr("src");
		$(".bigimg").show();
		$(".bigimg img").attr("src",srcc);
		$(".bigimg img").on("load",function(){
			var hh=$(this).height();
			if(hh>=h){
				$(this).addClass("big");
			}
		})
	})
	$(".bigimg").on("tap",function(){
		$(".bigimg img").attr("src","");
		$(".bigimg").hide();
	})
	}
	gettext();
	
	$(".abtn").on("tap",function(){
		$(this).addClass("bac").siblings().removeClass("bac");
		$(".listtxt").html("");
		$(".load").remove();
		var index=$(this).index();
		if(index==0){
			gettext();
		}
		else if(index==1){
			getimg()
		}
		else if(index==2){
			getvideo()
		}
	})
})