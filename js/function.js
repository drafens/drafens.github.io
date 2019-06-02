// 随机banner-image
window.onload = loadBanner;
const banner_size = 13;
function loadBanner() {
    document.getElementById("banner-box").style = "background-image: url('images/banner/banner(" + Math.floor(Math.random() * banner_size + 1) + ").jpg')";
}

// 单击回顶部
$('#lolijump').click(function() {
    $('html, body').animate({
        scrollTop: 0
    },500);
});

// 调整live2D大小
const canvas = document.getElementById("live2d");
if (window.matchMedia("(max-width: 768px)").matches) {
    canvas.width = "112";
    canvas.height = "100";
}else{
    canvas.width = "280";
    canvas.height = "250";
}

//切换主界面div
const divs = ["home", "about-me", "thanks"];
function switchDivs(tag) {
    let div;
    for (i of divs) {
        div = document.getElementById(i);
        if (tag === i)
            div.style.display = "block";
        else
            div.style.display = "none";
    }
}
	