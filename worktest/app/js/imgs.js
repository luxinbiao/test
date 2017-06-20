document.documentElement.style.fontSize = innerWidth / 16 + "px";
$(function(){
	function getimg(){
		var ur="http://m.neihanshequ.com/pic/?is_json=1&app_name=neihanshequ_web&min_time=1497578838&csrfmiddlewaretoken=247453b2cb224957ea640466766003b8";
		var arr = [];
		var str = "";
		$.ajax({
			type: "get",
			url: ur,
			dataType: "jsonp",
			success: function(data) {
				arr = data.data.data;
				console.log(arr);
				for(var i=0;i<arr.length;i++){
					str+="<li><div class='uesrname'><img src='" + arr[i].group.user.avatar_url + "'></img><span>" + arr[i].group.user.name + "</span></div>";
					str+="<div class='text'><p>" + arr[i].group.text + "</p></div>";
					str+="<div class='tupian'><img src='"+arr[i].group.large_image.url_list[0].url+"'></img></div>";
					str += "<div class='foot'><div class='zan'><span></span><i>" + 50 * (i + 1) + "</i></div><div class='cai'><span></span><i>" + 20 * (i + 1) + "</i></div>";
								str += "<div class='pinlun'><span></span><i>" + 5 * (i + 1) + "</i></div><div class='zhuanzai'><span></span><i>" + 10 * (i + 1) + "</i></div></div></li>";
				}
				$(".listimg").html(str);
			}
		})
		var sy, dir, flag = false,
			ulsh, listh = 0,
			st = 0,
			divr1 = "";
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
			if(dir < 0 && ulsh <= (st + listh)) {
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
			
			if(dir < -150 && ulsh <= (st + listh)) {
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
							$(".listimg").html(str);
						}
					}
				})
				flag=false;
			}
			
		})
	}
	getimg();
})
