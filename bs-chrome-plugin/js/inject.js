console.log(document.getElementById("header123456"));
//inject 的js可以供页面使用

document.getElementById("header123456").onclick=function () {
    alert("执行inject的js");
}

function injectJsClick() {
    alert("inject click");
}