// 注册存储
$("body").on("click","#register_button_register",function(){
    var username = $("#username").val();
    var password = $("#password").val();
    var user={
        "name":username,
        "pass":password
    }
    var str = localStorage.getItem("users");
    var users;
    if(str==null){
        users=[]
    }else{
        users = JSON.parse(str);
    }
    users.push(user);
    var str =JSON.stringify(users);
    localStorage.setItem("users",str);
    alert("注册成功")
    location.assign("login.html")
})