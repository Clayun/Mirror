
// let gatewayUri = "https://atlas.cn-sq-01.smgoro.com";
let gatewayUri = "http://s.imc.re:29022";

let webTitle = '';

$(document).ready(function(){

    $("#head").load("../../common/html/header.html");
    $("#message_panel").load("../../common/html/notice.html");

    let queryString = getQueryString("theme");
    if(queryString){
        if(queryString === "dark"){
            localStorage.setItem("darkThemeStyles","true");
        }else if(queryString === "light"){
            localStorage.setItem("darkThemeStyles","false");
        }
    }

    $("#footer").load("../../common/html/footer.html");
    // getWebConfig();
    $("#latest_notice").load("../../common/html/notice.html");

    let title = "Mikesam's Mirror";

    $("title").html(title);

    // 获取存储的布尔值
    var darkThemeStyles = localStorage.getItem("darkThemeStyles");

    // 如果存储的值为字符串 "true"，加载自定义样式
    if (darkThemeStyles === "true") {
        changeDark();
        changeDarkPageBtn();
    }else{
        changeLight();
        changeLightPageBtn();
    }

    $(".header_title").html(title)
    $("#header_title").html(title)
    // $("#system_logo").attr("src",remoteLogo);
    $("#message_panel").css("display","block")
    // $("#site_message").html(notice)
    $("#message_date").html("            ")


});

function toggleTheme(){
    let darkThemeStyles = localStorage.getItem("darkThemeStyles");
    if(darkThemeStyles){
        if(darkThemeStyles === "true"){
            localStorage.setItem("darkThemeStyles","false");
        }else{
            localStorage.setItem("darkThemeStyles","true");
        }
    }else{
        localStorage.setItem("darkThemeStyles","true");
    }

    window.location.reload();
}

function getTheme(){
    let darkThemeStyles = localStorage.getItem("darkThemeStyles");
    if(darkThemeStyles){
        if(darkThemeStyles === "true"){
            return 'dark'
        }else{
            return ''
        }
    }else{
        return ''
    }
}

function changeDark(){
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "../../common/css/dark.css";
    document.head.appendChild(link);
    $("#system_logo").attr("src","../../common/images/logo-w.png");
    $("#toggleTheme").html('<svg t="1692449591752" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1770" width="16" height="16"><path d="M512.000213 733.353497c-122.06857 0-221.353283-99.284713-221.353283-221.353284S389.931643 290.64693 512.000213 290.64693 733.353497 389.931643 733.353497 512.000213 634.026117 733.353497 512.000213 733.353497z m0-357.373767A136.148482 136.148482 0 0 0 375.97973 512.000213 136.148482 136.148482 0 0 0 512.000213 648.020697 136.148482 136.148482 0 0 0 648.020697 512.000213 136.148482 136.148482 0 0 0 512.000213 375.97973zM554.666613 171.735673A42.154403 42.154403 0 0 1 512.000213 213.335413c-23.551853 0-42.6664-18.645217-42.6664-41.59974V41.603153A42.154403 42.154403 0 0 1 512.000213 0.003413c23.551853 0 42.6664 18.645217 42.6664 41.59974v130.13252zM554.666613 982.397273A42.154403 42.154403 0 0 1 512.000213 1023.997013c-23.594519 0-42.6664-18.687883-42.6664-41.59974v-130.175186A42.111737 42.111737 0 0 1 512.000213 810.665013c23.551853 0 42.6664 18.60255 42.6664 41.59974v130.13252zM171.735673 469.333813c22.954523 0 41.59974 19.114547 41.59974 42.6664 0 23.594519-18.645217 42.6664-41.59974 42.6664H41.603153A42.154403 42.154403 0 0 1 0.003413 512.000213c0-23.551853 18.645217-42.6664 41.59974-42.6664h130.13252zM982.397273 469.333813c22.954523 0 41.59974 19.114547 41.59974 42.6664 0 23.594519-18.687883 42.6664-41.59974 42.6664h-130.175186A42.111737 42.111737 0 0 1 810.665013 512.000213c0-23.551853 18.60255-42.6664 41.59974-42.6664h130.13252zM241.239239 722.430898a42.06907 42.06907 0 0 1 59.562294 0.767995 42.111737 42.111737 0 0 1 0.767996 59.562295l-92.031425 92.074091a42.154403 42.154403 0 0 1-59.562295-0.853328 42.154403 42.154403 0 0 1-0.767995-59.562294l92.031425-91.988759zM814.462323 149.207814a42.154403 42.154403 0 0 1 59.562294 0.767995 42.154403 42.154403 0 0 1 0.767996 59.562295l-92.031425 92.031425a42.06907 42.06907 0 0 1-59.562295-0.767996 42.111737 42.111737 0 0 1-0.810661-59.562294l92.074091-92.031425zM241.239239 301.526862a42.19707 42.19707 0 0 0 59.604961-0.725329 42.111737 42.111737 0 0 0 0.767995-59.562294L209.538104 149.122481a42.154403 42.154403 0 0 0-59.562295 0.853328 42.111737 42.111737 0 0 0-0.767995 59.562295l92.031425 91.988758zM814.462323 874.792613a42.111737 42.111737 0 0 0 59.562294-0.810662 42.154403 42.154403 0 0 0 0.767996-59.562294l-92.031425-92.031425a42.06907 42.06907 0 0 0-59.562295 0.767995 42.111737 42.111737 0 0 0-0.810661 59.562294l92.074091 92.074092z" fill="#ffffff" p-id="1771"></path></svg>');
}

function changeDarkPageBtn() {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "../../common/css/darkPageNav.css";
    document.head.appendChild(link);
}

function changeLight(){
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "../../common/css/light.css";
    document.head.appendChild(link);
    $("#system_logo").attr("src","../../common/images/logo.png");
    $("#toggleTheme").html('<svg t="1692449902780" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3341" width="16" height="16"><path d="M618.496 111.616c9.216 34.304 14.336 70.656 14.336 108.032 0 228.352-184.832 413.184-413.184 413.184-37.376 0-73.728-5.12-108.544-14.336 47.616 175.616 207.872 305.152 398.848 305.152 228.352 0 413.184-184.832 413.184-413.184 0-190.976-129.024-351.232-304.64-398.848z" fill="#2c2c2c" p-id="3342"></path></svg>')
}

function changeLightPageBtn(){
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "../../common/css/pageNav.css";
    document.head.appendChild(link);
}


function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r != null){
        //解决中文乱码
        return decodeURI(r[2]);
    }
    return null;
}

function getWebConfig(){
    $.ajax({
        url:gatewayUri+"/atlas-config/get-config",
        dataType:"json",
        type:"GET",
        headers: {
            token: localStorage.getItem("token")
        },
        contentType: 'application/json;charset=utf-8',//防止乱码
        crossDomain: true,
        success:function(data){

            if(data.code == 0){

                let title = $("title").text();

                let remoteTitle = data.data.headerTitle.value;
                let remoteLogo = data.data.logo.value;
                let notice = data.data.notice.value;

                $("title").html(title + ' - '+ remoteTitle);

                webTitle = remoteTitle;

                // 获取存储的布尔值
                var darkThemeStyles = localStorage.getItem("darkThemeStyles");

                // 如果存储的值为字符串 "true"，加载自定义样式
                if (darkThemeStyles === "true") {
                    changeDark();
                    changeDarkPageBtn();
                }else{
                    changeLight();
                    changeLightPageBtn();
                }

                $(".header_title").html(webTitle)
                $("#header_title").html(webTitle)
                // $("#system_logo").attr("src",remoteLogo);
                $("#message_panel").css("display","block")
                $("#site_message").html(notice)
                $("#message_date").html("            ")

            }

        }
    });
}

function checkResponseData(data){

    if(data.code === 1000
        || data.code === 1009
    ){
        console.log("not login")
        window.location.href =  '../../module/login/login.html'
    }
}

function isMobile() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        //跳转移动端页面
        return true;
    } else {
        //跳转pc端页面
        return false;
    }
}

