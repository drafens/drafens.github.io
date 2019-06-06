$(document).ready(function() {
    // load header/footer
    $("header.header-global").load("./header.html");$("footer.footer-global").load("./footer.html");
    // 随机banner-image
    const banner_size = 13;
    document.getElementById("banner-box").style = "background-image: url('images/banner/banner(" + Math.floor(Math.random() * banner_size + 1) + ").jpg')";
    // open/close search
    $('a[href="#search"]').on('click',
        function () {
            $('#search').addClass('open');
            $('#search-form > label > input[type="search"]').focus();
        });
    $('#search, #search button.close').on('click keyup',
        function (event) {
            if (event.target === this || event.target.className === 'close' || event.keyCode === 27) {
                $(this).removeClass('open');
            }
        });
    // Headroom - show/hide navbar on scroll
    if ($('.headroom')[0]) {
        const headroom = new Headroom(document.querySelector("#navbar-main"), {
            offset: 300,
            tolerance: {
                up: 30,
                down: 30
            },
        });
        headroom.init();
    }
    // hover显示tip
    $('[data-toggle="tooltip"]').tooltip();
    // When in viewport
    const on_screen = $('[data-toggle="on-screen"]');
    on_screen[0] && on_screen.onScreen({
        container: window,
        direction: 'vertical',
        doIn: function () {
            //alert();
        },
        doOut: function () {
            // Do something to the matched elements as they get off scren
        },
        tolerance: 200,
        throttle: 50,
        toggleClass: 'on-screen',
        debug: false
    });
});

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
