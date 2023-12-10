

$(document).ready(function(){

    getMemberInfo();

});

function getMemberInfo(){
    $.ajax({
        url:gatewayUri+"/atlas-admin/get-login-info",
        dataType:"json",
        type:"POST",
        headers: {
            token: localStorage.getItem("token")
        },
        contentType: 'application/json;charset=utf-8',//防止乱码
        crossDomain: true,
        success:function(data){

            if(data.code === 0){

                localStorage.setItem("LOGINED_MEMBER_ID",data.data.id);
                $("#myUserName").html(getGreeting() + ""+data.data.username)
                localStorage.setItem("myUserName",data.data.username)
                $("#index_login_box").html('<div class="start_nav_btn" onclick="window.location.href=\'module/dashboard/dashboard.html\'">API文档</div>')
            }else{
                console.log("jumping...")
                window.location.href='../login/login.html';
            }

        }
    });
}

function getGreeting() {
    // 获取当前时间
    var currentTime = new Date();

    // 获取当前小时
    var currentHour = currentTime.getHours();

    // 初始化问候信息
    var greeting = "";

    // 根据当前小时和分钟判断时间段并设置问候语
    if (currentHour < 5) {
        greeting = "凌晨好，";
    } else if (currentHour < 12) {
        greeting = "早上好，";
    } else if (currentHour < 14) {
        greeting = "中午好，";
    } else if (currentHour < 18) {
        greeting = "下午好，";
    } else {
        greeting = "晚上好，";
    }

    return greeting;
}
function logout(){

    $.ajax({
        url:gatewayUri+"/atlas-admin/logout",
        dataType:"json",
        type:"POST",
        headers: {
            token: localStorage.getItem("token")
        },
        contentType: 'application/json;charset=utf-8',//防止乱码
        crossDomain: true,
        success:function(data){
            console.log("jumping...")
            window.location.href='../login/login.html';

        }
    });
}
