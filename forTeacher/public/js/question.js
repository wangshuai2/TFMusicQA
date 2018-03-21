!function (e, t) { function n() { var n = l.getBoundingClientRect().width; t = t || 540, n > t && (n = t); var i = 100 * n / e; r.innerHTML = "html{font-size:" + i + "px;}" } var i, d = document, o = window, l = d.documentElement, r = document.createElement("style"); if (l.firstElementChild) l.firstElementChild.appendChild(r); else { var a = d.createElement("div"); a.appendChild(r), d.write(a.innerHTML), a = null } n(), o.addEventListener("resize", function () { clearTimeout(i), i = setTimeout(n, 300), d }, !1), o.addEventListener("pageshow", function (e) { e.persisted && (clearTimeout(i), i = setTimeout(n, 300)) }, !1), "complete" === d.readyState ? d.body.style.fontSize = "16px" : d.addEventListener("DOMContentLoaded", function (e) { d.body.style.fontSize = "16px" }, !1) }(750, 1920);


var data = [
    {
        question: "请选择正确答案:",
        img: "./img/do.png",
        answer: ["Do", "Mi", "Sol"],
        suc: "a"
    },
    {
        question: "请选择正确答案:",
        img: "./img/re.png",
        answer: ["Re", "Fa", "La"],
        suc: "a"
    },
    {
        question: "请选择正确答案:",
        img: "./img/mi.png",
        answer: ["La", "Mi", "Re"],
        suc: "b"
    },
    {
        question: "请选择正确答案:",
        img: "./img/sol.png",
        answer: ["Do", "La", "Sol"],
        suc: "c"
    },
    {
        question: "请选择正确答案:",
        img: "./img/fa.png",
        answer: ["Fa", "Sol", "Do"],
        suc: "a"
    },
    {
        question: "请选择正确答案:",
        img: "./img/la.png",
        answer: ["Fa", "Mi", "La"],
        suc: "c"
    },
    {
        question: "这些是几分音符你认识吗？",
        img: "./img/4fa.png",
        answer: ["Mi", "Fa", "四分音符", "二分音符"],
        suc: "c"
    },
    {
        question: "这些是几分音符你认识吗？",
        img: "./img/2fa.png",
        answer: ["Fa", "四分音符", "二分音符", "Mi"],
        suc: "c"
    },
    {
        question: "下面的第几个乐句划分是错误的？",
        img: "./img/twinklestar.png",
        answer: ["第一行", "第二行", "第三行"],
        suc: "c"
    }
];

(function() {
    let cont = '';
    cont += ''
})()