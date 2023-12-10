$(document).ready(function () {
    $("#login-with-wc").click(function () {
            $("#login-with-pw").css("display", "none");
            $("#login-box").css("margin-top", "-400px");
            $("#program-code-img").css("opacity", "1");
            $("#program-code-img").css("display", "flex");
            $("#login-with-wc").css("opacity", "0");
            $("#login-with-pw").css("opacity", "0");
        }
    );
    $("#return").click(function () {
        $("#program-code-img").css("display", "none");
        $("#program-code-img").css("opacity", "0");
        $("#login-with-pw").css("opacity", "1");
        $("#login-with-pw").css("display", "flex");
        $("#login-with-wc").css("opacity", "1");
        $("#login-box").css("margin-top", "0px");
    })
});