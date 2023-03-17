// CODE QUIZ

// WHEN I click the start button
// a timer starts and I am presented with a question

// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// WHEN the game is over
// THEN I can save my initials and score


var gameDisplay = document.querySelector('game-display');
var timerDisplay = document.querySelector('#timer-display');


var game;
var count = 60;
var currentQuestionIndex;

window.onload = function () {
    console.log('test');
    startTimer();
    gameDisplayFunc();
}

// WHEN I click the start button
// a timer starts and I am presented with a question
function gameDisplayFunc() {
    if (currentQuestionIndex == null) {
        currentQuestionIndex = 0;
    }
    else {
        currentQuestionIndex++;
    }
    document.getElementById("questionDisplay").textContent = questions[currentQuestionIndex].question;
    document.getElementById("btnA").textContent = questions[currentQuestionIndex].choices[0];
    document.getElementById("btnB").textContent = questions[currentQuestionIndex].choices[1];
    document.getElementById("btnC").textContent = questions[currentQuestionIndex].choices[2];
    document.getElementById("btnD").textContent = questions[currentQuestionIndex].choices[3];
}

function endquizPage() {
    document.location.href = "./gameover.html";
}

function checkAnswer(index) {
    var selectedAnswer = questions[currentQuestionIndex].choices[index];
    if (selectedAnswer == questions[currentQuestionIndex].answer) {
        if (questions.count <= currentQuestionIndex + 1) {
            endQuizPage();
        }
        else {
            gameDisplayFunc();
        }
    }
    else {
        count = count - 5;
        document.getElementById("timer-display").innerText = "Time Remaining: " + count;
    }

}


// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// TIMER
function startTimer() {
    timerDisplay.classList.remove('hide');
    var timer = setInterval(function () {
        document.getElementById("timer-display").innerText = "Time Remaining: " + count;
        count--;
        if (count === 0) {
            clearInterval(timer);
            endQuizPage();
        }
    }, 1000);
}


var questions = [
    {
        question: 'What does the acronym DOM stand for?',
        choices: ['Document Object Model', 'Document Original Model', 'Document Object Mode', 'None of the Above'],
        answer: 'Document Object Model'
    },
    {
        question: 'Which syntax is used to call a function?',
        choices: ['()', '{}', '[]', '{()}'],
        answer: '()'
    },
    {
        question: 'What are some primative values?',
        choices: ['Number', 'Boolean', 'Undefined', 'All of the above'],
        answer: 'All of the above'
    },
    {
        question: 'What would you see in JavaScript file?',
        choices: ['HTML', 'margin', 'console.log', 'All of the above'],
        answer: 'console.log'
    },
]