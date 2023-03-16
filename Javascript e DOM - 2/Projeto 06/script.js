let currentQuestion = 0;
var questions;
var points = 0;

start()
async function start() {
    questions = await getQuestions()

    if (questions) { console.log(questions); showQuestion(questions); }

}

function showQuestion(questions) {

    document.querySelector('.progress--bar').style.width = `${currentQuestion * 10}%`;

    if (currentQuestion < 10) {
        let q = questions[currentQuestion];



        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';

        document.querySelector('.question').innerHTML = q.question;

        let optionsHtml = '';

        let trueAnswer = Math.floor(Math.random() * 4);
        let truein = 0;
        for (let i = 0; i < 4; ++i) {

            if (i == trueAnswer) {
                optionsHtml += `<div data-op="${q.correct_answer}" class="option"><span>${i + 1}</span>${q.correct_answer}</div>`; truein = 1
            }
            else {
                optionsHtml += `<div data-op="${q.incorrect_answers[i - truein]}" class="option"><span>${i + 1}</span>${q.incorrect_answers[i - truein]}</div>`;
            }
        }

        optionsHtml +=
            document.querySelector('.options').innerHTML = optionsHtml;


        document.querySelectorAll('.options .option').forEach(item => {
            item.addEventListener('click', optionClickevent);
        })
    }
    else {
        finish();
    }
}

function finish() {

    document.querySelector('.scoreArea').style.display = 'block';
    document.querySelector('.questionArea').style.display = 'none';


    document.querySelector('.scorePct').innerHTML = ` ${points} out 10`;
    document.querySelector('.scoreText2').innerHTML = `${points * 10}%`;

}
function optionClickevent(e) {
    let clickedOption = e.target.getAttribute('data-op');

    if (clickedOption == questions[currentQuestion].correct_answer) {

        points++

    }

    currentQuestion++;
    showQuestion(questions)

}

document.querySelector('.scoreArea button').addEventListener('click', playAgain)
function playAgain() {
    currentQuestion = 0;
    points = 0;
    start()
}