

$(document).ready(function(){
    getBasicWebConfig();
    getNav();
    getFooter();
    // 自动更新
    getThisYear();
});

function getThisYear(){
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    $("#this-year").html(currentYear);
}

function getBasicWebConfig(){
    $.ajax({
        url:gatewayUri+"/atlas-config/get-config",
        dataType:"json",
        type:"GET",
        contentType: 'application/json;charset=utf-8',//防止乱码
        crossDomain: true,
        success:function(data){

            if(data.code == 0){

                let remoteTitle = data.data.headerTitle.value;
                webTitle = remoteTitle;
                $("#header_title").html(webTitle)
            }

        }
    });
}

function getFooter(){
    $.ajax({
        url:gatewayUri+"/atlas-config/get-config-by-code?code=WEBSITE_FOOTER",
        dataType:"json",
        type:"GET",
        contentType: 'application/json;charset=utf-8',//防止乱码
        crossDomain: true,
        success:function(data){

            let footer = data.value;
            $("#website_footer").html(footer)

        }
    });
}

function getNav(){
    $.ajax({
        url:gatewayUri+"/atlas-config/get-config-by-code?code=WEBSITE_NAV",
        dataType:"json",
        type:"GET",
        contentType: 'application/json;charset=utf-8',//防止乱码
        crossDomain: true,
        success:function(data){

            let footer = data.value;
            $("#website_nav").html(footer)

        }
    });
}