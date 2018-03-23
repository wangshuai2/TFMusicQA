!function (e, t) { function n() { var n = l.getBoundingClientRect().width; t = t || 540, n > t && (n = t); var i = 100 * n / e; r.innerHTML = "html{font-size:" + i + "px;}" } var i, d = document, o = window, l = d.documentElement, r = document.createElement("style"); if (l.firstElementChild) l.firstElementChild.appendChild(r); else { var a = d.createElement("div"); a.appendChild(r), d.write(a.innerHTML), a = null } n(), o.addEventListener("resize", function () { clearTimeout(i), i = setTimeout(n, 300), d }, !1), o.addEventListener("pageshow", function (e) { e.persisted && (clearTimeout(i), i = setTimeout(n, 300)) }, !1), "complete" === d.readyState ? d.body.style.fontSize = "16px" : d.addEventListener("DOMContentLoaded", function (e) { d.body.style.fontSize = "16px" }, !1) }(750, 1920);

import $ from 'jquery'


window.duiOrCuo = function (a) {
    if (a) {
        $('#popup .popup-cont').addClass('popup-dui').removeClass('popup-cuo');
    } else {
        $('#popup .popup-cont').addClass('popup-cuo').removeClass('popup-dui');
    }
    $('#popup').removeClass('popup-hide').addClass('fadeInDown animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass('fadeInDown animated');
        setTimeout(function(){
            $('#popup').addClass('fadeOutDown animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $(this).removeClass('fadeOutDown animated');
                $('#popup').addClass('popup-hide');
            });
        }, 1000);
    });
}