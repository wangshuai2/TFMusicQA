!function (e, t) { function n() { var n = l.getBoundingClientRect().width; t = t || 540, n > t && (n = t); var i = 100 * n / e; r.innerHTML = "html{font-size:" + i + "px;}" } var i, d = document, o = window, l = d.documentElement, r = document.createElement("style"); if (l.firstElementChild) l.firstElementChild.appendChild(r); else { var a = d.createElement("div"); a.appendChild(r), d.write(a.innerHTML), a = null } n(), o.addEventListener("resize", function () { clearTimeout(i), i = setTimeout(n, 300), d }, !1), o.addEventListener("pageshow", function (e) { e.persisted && (clearTimeout(i), i = setTimeout(n, 300)) }, !1), "complete" === d.readyState ? d.body.style.fontSize = "16px" : d.addEventListener("DOMContentLoaded", function (e) { d.body.style.fontSize = "16px" }, !1) }(750, 1920);

import $ from 'jquery'
import qList from './question-list-s'

let nowAnswer = 0;
let nowQuestion = '';
let course = '';
let no = 0;

window.loadQuestion = function(course) {

    $('#container').append(course);
    nowQuestion = qList[course][no];
    nowAnswer = nowQuestion.answer;
    let qcont = '';
    qcont += '<div class="q-title">';
    qcont += '<h4>' + nowQuestion.title + '</h4>';
    qcont += '</div>';
    qcont += '<div class="q-options" id="qOptions">';
    nowQuestion.options.forEach(item => {
        qcont += '<div class="items">' + item + '</div>';
    });
    qcont += '</div>';
    qcont += '<div class="q-footer">';
    qcont += '<button id="submitAnswer">提交答案</button>';
    qcont += '</div>';

    $('#qContent').html(qcont);
}

// loadQuestion('q29.mp4');

$(document).on('click', '#qOptions .items', function() {
    $(this).addClass('on').siblings('.items').removeClass('on');
})

$(document).on('click', '#submitAnswer', function() {
    $(this).attr('disabled', true);
    console.log($('#qOptions .on').index());
    const stuAnswer = $('#qOptions .on').index();
    duiOrCuo(nowAnswer == stuAnswer);
    window.android.submitAnd(stuAnswer);
})

const duiOrCuo = function (a) {
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

window.nextQuestionJs = function() {
    no++;
    loadQuestion(course);
}

// submitAnd