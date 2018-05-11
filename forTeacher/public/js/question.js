!function (e, t) { function n() { var n = l.getBoundingClientRect().width; t = t || 540, n > t && (n = t); var i = 100 * n / e; r.innerHTML = "html{font-size:" + i + "px;}" } var i, d = document, o = window, l = d.documentElement, r = document.createElement("style"); if (l.firstElementChild) l.firstElementChild.appendChild(r); else { var a = d.createElement("div"); a.appendChild(r), d.write(a.innerHTML), a = null } n(), o.addEventListener("resize", function () { clearTimeout(i), i = setTimeout(n, 300), d }, !1), o.addEventListener("pageshow", function (e) { e.persisted && (clearTimeout(i), i = setTimeout(n, 300)) }, !1), "complete" === d.readyState ? d.body.style.fontSize = "16px" : d.addEventListener("DOMContentLoaded", function (e) { d.body.style.fontSize = "16px" }, !1) }(750, 1920);


import $ from 'jquery'
import qList from './question-list';

$(document).on('click', '#showStuScore', function () {
    if ($('#popup').hasClass('popup-hide')) {
        $('#popup').removeClass('popup-hide').addClass('fadeInDown animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('fadeInDown animated');
        });
    } else {
        $('#popup').addClass('fadeOutDown animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('fadeOutDown animated');
            $('#popup').addClass('popup-hide');
        });
    }
})


let nowAnswer = 0;

// window.loadQuestion = function (course, no) {
window.loadQuestion = function (course) {
    // $('.control').append('5454554545454545454545454545');
    $('.control').append(course);
    $('#nextSection').focus();
    $('audio').remove();
    const no = 0;
    const nowQuestion = qList[course][no];
    nowAnswer = nowQuestion.answer;
    let qcont = '';
    qcont += '<div class="q-title">';
    qcont += '<h4>' + nowQuestion.title + '</h4>';
    qcont += '</div>';
    qcont += '<div class="q-options">';
    nowQuestion.options.forEach(item => {
        qcont += '<div class="items">' + item + '</div>';
    });
    qcont += '</div>';

    $('#qContent').html(qcont);

    let qaAudio = document.createElement('audio');
    qaAudio.src = nowQuestion.audio;
    console.log(nowQuestion.audio);
    qaAudio.addEventListener('canplaythrough', function () {
        console.log('success');
        $('#playAudio').removeAttr('disabled');
    }, false);
    qaAudio.addEventListener('ended', function () {
        $('#playAudio').text('重新播放');
    })

    $(document).on('click', '#playAudio', function () {
        if (qaAudio.paused) {
            qaAudio.play();
            $(this).text('暂停播放');
        } else {
            qaAudio.pause();
            $(this).text('继续播放');
        }
    })
}

// loadQuestion('416');

window.addStuScore = function (answer) {
    const r = answer.split('=');
    let stuitem = '';
    stuitem += '<div class="stu-item">' + r[0];
    stuitem += parseInt(nowAnswer) == parseInt(r[1]) ? '<i class="q-icon q-icon-dui"></i></div>' : '<i class="q-icon q-icon-cuo"></i></div>';
    
    $('#stuResult').append(stuitem);
}

$(document).on('click', '#nextSection', function() {
    window.android.nextCourse();
})
$(document).on('click', '#nextQuestion', function() {
    window.android.nextQuestion();
})

//