<!-- 随机banner-image -->
window.onload = loadBanner;
const banner_size = 13;
function loadBanner() {
    document.getElementById("banner-box").style = "background-image: url('images/banner/banner(" + Math.floor(Math.random() * banner_size + 1) + ").jpg')";
}

<!-- 单击回顶部 -->
$('#lolijump').click(function() {
    $('html, body').animate({
        scrollTop: 0
    },500);
});

const canvas = document.getElementById("live2d");
if (window.matchMedia("(max-width: 768px)").matches) {
    canvas.width = "140";
    canvas.height = "125";
}else{
    canvas.width = "280";
    canvas.height = "250";
}