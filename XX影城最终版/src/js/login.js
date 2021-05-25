var flag = false;
$("body").on("click","#login_button_login",function(){
    var str = localStorage.getItem("users");
    console.log(str)
    var data = JSON.parse(str);
    console.log(data);
    var username = $("#username").val();
    var password = $("#password").val();
    for(var i=0;i<data.length;i++){
        if(username == data[i].name && password == data[i].pass){
            flag=true; 
        }
    }
    if(flag){
        alert("登录成功");
        location.assign("movie-center.html")
    }else{
        alert("用户名或密码输入错误");     
    }
   
})