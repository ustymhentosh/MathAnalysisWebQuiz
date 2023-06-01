
// get&set variables
var question_num = 0
forma = document.getElementById('forma');

var question_counter = document.getElementById('question_num')
var question = Object.keys(tests)[0]

question_counter.innerHTML = 'Question ' + (question_num + 1) + '/' + 4

var right_answ = 0
// set board
function setBoard(question, variants) {
    q_img_in_html = document.getElementById('ques')
    if (typ == 'integrals') {
        q_img_in_html.src = '/static/images/integrals/start_' + question + '.png'
    } else if (typ == 'series') {
        q_img_in_html.src = '/static/images/series/start_' + question + '.png'
        if (question_num == 3) {
            console.log('question', question)
            q_img_in_html.src = '/static/images/series/taylor/start_' + (question - 10) + '.png'
        }
    } else if (typ == 'trig') {
        q_img_in_html.src = '/static/images/trig/q' + question + '/' + 'q.png'
    }

    count = 1
    for (var variant of variants) {
        v_in_html = document.getElementById('option' + count)
        v_img_in_html = document.getElementById('option' + count + 'img')

        // v_img_in_html.src = '/static/images/integrals/end_' + variant + '.png'

        if (typ == 'integrals') {
            v_img_in_html.src = '/static/images/integrals/end_' + variant + '.png'
        } else if (typ == 'series') {
            v_img_in_html.src = '/static/images/series/end_' + variant + '.png'
        }
        else if (typ == 'trig') {
            v_img_in_html.src = '/static/images/trig/q' + question + '/' + variant + '.png'
        }
        if (question_num == 3 && typ == 'series') {
            console.log(11)
            v_img_in_html.src = '/static/images/series/taylor/end_' + variant + '.png'
        }

        if ((variant == 'r') | (question == variant) | ((question - 10) == variant)) {
            v_in_html.value = 'True'
        } else {
            v_in_html.value = 'False'
        }
        count += 1
    }
}


setBoard(question, tests[question])

// submit
forma.addEventListener("submit", (event) => {
    event.preventDefault();

    function getAnsw() {
        var answ = document.querySelector('input[name="option"]:checked').value;
        return answ
    }
    answ = getAnsw()
    if (answ == 'True') {
        right_answ += 1
    }
    if (question_num < 3) {
        question_num += 1
        question = Object.keys(tests)[question_num]
        question_counter.innerHTML = 'Question ' + (question_num + 1) + '/' + 4
        setBoard(question, tests[question])
        forma.reset()
    } else {
        modal.style.display = "block";
        document.getElementById('results').innerHTML = 'Result  ' + right_answ + '/' + 4
    }

});


// modal
var modal = document.getElementById("modal");
var closeBtn = document.getElementsByClassName("close")[0];

// closeBtn.addEventListener("click", function () {
//     modal.style.display = "none";
// });


var reloadBtn = document.getElementById("reloadBtn");
var redirectBtn = document.getElementById("redirectBtn");

reloadBtn.addEventListener("click", function () {
    location.reload();
});

redirectBtn.addEventListener("click", function () {
    window.location.href = "./";
});