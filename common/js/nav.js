

$(document).ready(function(){

    window.addEventListener('scroll', function() {
        var fixedDiv = document.getElementById('admin_nav_body');
        var scrollHeight = window.scrollY;

        // 指定滚动高度，例如 200px
        var targetScrollHeight = 80;

        if (scrollHeight >= targetScrollHeight) {
            // 显示固定的nav
            $("#admin_nav_ul").attr("class","float-nav");
        } else {
            // 隐藏固定的nav
            $("#admin_nav_ul").attr("class","");
        }
    });
});

function getMenu() {

    let _blankTag = 'target="_blank"';
    let item = localStorage.getItem("autoBlankPage");
    if(!item || item == 2){
        localStorage.setItem("autoBlankPage",2)
        _blankTag = '';
    }

    let params = '{}'
    $.ajax({
        url:gatewayUri+"/atlas-menu/get-menus?type="+1
        ,type: 'POST'
        ,headers: {
            token: localStorage.getItem("token")
        }
        ,contentType: 'application/json;charset=utf-8'
        ,dataType: 'json'
        ,data: params
        ,async:false,
        success: function(resut){

            let data = resut.data;

            let html = '';

            for(let titleIndex  = 0 ; titleIndex < data.length; titleIndex ++){

                let title = data[titleIndex];

                let isChoose = '';
                let isTitleChoose = '';

                let isUp = '<span class="fa fa-chevron-up rt fs_10 nav-up-icon"></span>';
                // let isUp = '';

                let lastChoose = localStorage.getItem("checkedMenu");

                if(!lastChoose){
                    //上次点过
                    isChoose = '';
                }

                if(lastChoose == title.id){
                    isTitleChoose = 'nav_top_title_chois';
                }

                let childStart = '<ul class="fs_13">';
                let childEnd = '</ul>';
                let navChildren = '';

                if(title.child){
                    if(title.child.length > 0){

                        for(let childIndex = 0; childIndex < title.child.length; childIndex ++){
                            let child = title.child[childIndex];

                            if(lastChoose == child.id){
                                isChoose = 'nav_top_title_chois';
                                isTitleChoose = 'nav_top_title_chois';
                            }else{
                                isChoose = '';
                            }

                            navChildren = navChildren + '<a href="'+child.link+'" '+_blankTag+' onclick="nav_checked(\''+child.id+'\')">\n' +
                                '                <li class="nav_top_li nav_tow_li '+isChoose+' jzy_mg_top_10">\n' +
                                '                    <span class="'+child.icon+'"></span>\n' +
                                '                    <span class="theme_text_color">'+child.name+'</span>\n' +
                                '                </li>\n' +
                                '            </a>';

                        }

                    }else{
                        isUp = '';
                    }
                }

                let navTitle = '<a  href="'+title.link+'" id="NAV_'+title.id+'" onclick="nav_up_down(\'NAV_'+title.id+'\');" class="clayun_nav_tag">\n' +
                    '            <span class="nav_top_title '+isTitleChoose+' jzy_h_30" style="border: none">\n' +
                    '                <i class="'+title.icon+'" style="width: 15px;text-align: center"></i>\n' +
                    '                <span class="theme_text_color">'+title.name+'</span>\n' +
                    '                '+isUp+'\n' +
                    '            </span>\n' +
                    '        </a>';

                let childBody = childStart + navChildren + childEnd;


                html = html + navTitle + childBody;

            }

            $("#admin_nav_ul").html(html);

            let allTag = document.getElementsByClassName("clayun_nav_tag");
            // 关闭全部下拉
            for(var i = 0;i < allTag.length; i++){

                let targetDiv = allTag[i];

                // 获取第一个子元素
                var firstChild = targetDiv.firstElementChild;

                // 检查第一个子元素是否包含指定的 class
                if (firstChild.classList.contains('nav_top_title_chois')) {
                    // 第一个子元素包含指定的 class
                    console.log('第一个子元素包含 nav_top_title_chois 类');
                } else {
                    close_nav(allTag[i]);
                }

            }
        }
    });

}

function nav_checked(id) {
    console.log(id)
    localStorage.setItem("checkedMenu",id);
    getMenu()
}

function nav_up_down(id) {

    let domElement = document.getElementById(id);

    let brother = $(domElement).next();

    // let allTag = document.getElementsByClassName("clayun_nav_tag");
    // // 关闭全部下拉
    // for(var i = 0;i < allTag.length; i++){
    //     close_nav(allTag[i])
    // }

    if(brother.css("display") == "none"){
        $(domElement).children('.nav_top_title').children('.fa-chevron-down').attr("class","fa fa-chevron-up rt fs_10 nav-up-icon");
        $(brother).fadeIn(0);

    }else{
        $(domElement).children('.nav_top_title').children('.fa-chevron-up').attr("class","fa fa-chevron-down rt fs_10 nav-down-icon");
        $(brother).fadeOut(0);
    }

}

function close_nav(domElement) {

    let brother = $(domElement).next();

    if(brother.css("display") == 'none'){
        $(domElement).children('.nav_top_title').children('.fa-chevron-down').attr("class","fa fa-chevron-up rt fs_10 nav-up-icon");
        $(brother).fadeOut(0)
    }else{
        $(domElement).children('.nav_top_title').children('.fa-chevron-up').attr("class","fa fa-chevron-down rt fs_10 nav-down-icon");
        $(brother).fadeOut(0)
    }
}