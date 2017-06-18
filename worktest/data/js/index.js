
//段子
//		var ur="http://m.neihanshequ.com/?skip_guidence=1&is_json=1&app_name=neihanshequ_web&min_time=&csrfmiddlewaretoken=247453b2cb224957ea640466766003b8";
//评论
//		var ur="http://m.neihanshequ.com/api/get_essay_comments/?app_name=neihanshequ_web&group_id=62063218738&offset=0&csrfmiddlewaretoken=247453b2cb224957ea640466766003b8";
//		图片
//		var ur="http://m.neihanshequ.com/pic/?is_json=1&app_name=neihanshequ_web&min_time=1497578838&csrfmiddlewaretoken=247453b2cb224957ea640466766003b8";
//		视频
//var ur="http://m.neihanshequ.com/video/?is_json=1&app_name=neihanshequ_web&min_time=1497584308&csrfmiddlewaretoken=247453b2cb224957ea640466766003b8";
document.documentElement.style.fontSize=innerWidth/16+"px";
$(function(){
	var ur="http://m.neihanshequ.com/?skip_guidence=1&is_json=1&app_name=neihanshequ_web&min_time=&csrfmiddlewaretoken=247453b2cb224957ea640466766003b8";
	var arr=[];
	var str="";
	$.ajax({
		type:"get",
		url:ur,
		dataType:"jsonp",
		success:function(data){
			arr=data.data.data;
			console.log(arr);
			for(var i=0;i<arr.length;i++){
				str+="<li><div class='uesrname'><img src='"+arr[i].group.user.avatar_url+"'></img><span>"+arr[i].group.user.name+"</span></div>"
				str+="<div class='text'><p>"+arr[i].group.text+"</p></div></li>"
			}
			$(".listtxt").html(str);
		}
	})
})
