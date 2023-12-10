$(document).ready(function () {

    // getCoins();
});

function sendCode(){
    let user_account = $("#user_account").val();
    if(!user_account){
        alert("邮箱为空！")
        return;
    }
    let params = '{"email":"'+user_account+'"}';

    $.ajax({
        url:gatewayUri+"/api/miner/miner-member/send-verification-code",
        dataType:"json",
        type:"POST",
        contentType: 'application/json;charset=utf-8',//防止乱码
        data: params,
        crossDomain: true,
        success:function(data){

            if(data.code === 0){

                alert("验证码发送成功！")
            }else{
                alert("账户或密码错误！")
            }

        }
    });

}

function register() {

    let user_account = $("#user_account").val();
    let password = $("#password").val();
    let password_repeat = $("#password_repeat").val();
    let user_name = $("#user_name").val();
    let verfiy_code = $("#verfiy_code").val();

    if(!user_name){
        alert("用户名为空！")
        return;
    }

    if(!password){
        alert("密码为空！")
        return;
    }

    if(!password_repeat){
        alert("重复密码为空！")
        return;
    }

    if(!user_account){
        alert("邮箱为空！")
        return;
    }

    if(!verfiy_code){
        alert("验证码为空！")
        return;
    }

    let params = '{"email":"'+user_account+'","nickName":"'+user_name+'","password":"'+password+'","repeatPassword":"'+password_repeat+'","verificationCode":"'+verfiy_code+'"}';

    $.ajax({
        url:gatewayUri+"/api/miner/miner-member/register",
        dataType:"json",
        type:"POST",
        contentType: 'application/json;charset=utf-8',//防止乱码
        data: params,
        crossDomain: true,
        success:function(data){

            if(data.code === 0){

                localStorage.setItem("minerToken",data.data)
                window.location.href = '../dashboard/dashboard.html';
            }else{
                alert("账户或密码错误！")
            }

        }
    });

}