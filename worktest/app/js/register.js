
function $(id) {
	return document.getElementById(id);
}
var uername=$("uername");
var passone=$("passone");
var passtwo=$("passtwo");
var btn=$("btn");
var login=$("login");
var Register=$("Register");
var register=$("register");
var fanhui=$("fanhui");
var btn1=$("btn1");
var username=$("username");
var pass=$("pass");
var db = null;


register.onclick=function(){
	Register.style.display="block";
	login.style.display="none";
}
fanhui.onclick=function(){
	Register.style.display="none";
	login.style.display="block";
}
if(!db) {
	db = openDatabase("app", "2.0", "test a command", "4*1024*1024");
}
db.transaction(function(tx) {
	tx.executeSql("create table if not exists appname (name unique,pass integer)");
})

btn.onclick = function(){
	if(uername.value != "" && passone.value!= "" && passtwo.value!="") {
		if(passone.value==passtwo.value){
			db.transaction(function(tx) {
				tx.executeSql("insert into appname (name,pass) values(?,?)", [uername.value,passone.value], function() {
					alert("注册成功");
				})
			})
		}
		else{
			alert("两次输入的密码不一致！");
		}
	} 
	else {
		alert("请输入注册信息！");
	}
}

btn1.onclick=function(){
	if(username.value !="" && pass.value !=""){
		db.transaction(function(tx){
			tx.executeSql("select * from appname where name=?", [username.value], function(tx,rs){
				if(rs.rows.length>0){
					tx.executeSql("select * from appname where pass=?", [pass.value], function(tx,rs){
						if(rs.rows.length>0){
							alert("登录成功");
							window.location.href="text.html"
						}
						else{
							alert("您的密码有误");
						}
					})
				}
				else{
					alert("帐号有误");
				}
			})
		})
	}
	else {
		alert("请输入您的登录信息！")
	}
}
