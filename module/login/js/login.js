
$(document).ready(function () {

    // getCoins();

});

function login() {

    let username = $("#username").val();
    let password = $("#password").val();

    if(!username){
        alert("用户名为空！")
    }

    if(!password){
        alert("密码为空！")
    }

    let params = '{"account":"'+username+'","password":"'+password+'"}';

    $.ajax({
        url:gatewayUri+"/atlas-admin/login",
        dataType:"json",
        type:"POST",
        contentType: 'application/json;charset=utf-8',//防止乱码
        data: params,
        crossDomain: true,
        success:function(data){

            if(data.code === 0){
                localStorage.setItem("token",data.data)
                window.location.href = '../index/index.html';
            }else{
                alert(data.msg)
            }

        }
    });

}