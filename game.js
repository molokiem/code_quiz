const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
console.log(choices);

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    {
        question: "What is the answer to Question 1?",
        choice1: "this one",
        choice2: "not this one",
        choice3: "not this one",
        choice4: "not this one",
        answer: 1
    },
    
    {
        question: "What is the answer to Question 2?",
        choice1: "not this one",
        choice2: "not this one",
        choice3: "this one",
        choice4: "not this one",
        answer: 3
    },
    {
        question: "What is the answer to Question 3?",
        choice1: "not this one",
        choice2: "not this one",
        choice3: "not this one",
        choice4: "this one",
        answer: 4
    },
    {
        question: "What is the answer to Question 4?",
        choice1: "not this one",
        choice2: "this one",
        choice3: "not this one",
        choice4: "not this one",
        answer: 2
    }
]

// constants

const CORRECT_BONUS = 25;
const MAX_QUESTIONS = 4;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
        currentQuestion = availableQuesions[questionIndex];
        question.innerText = currentQuestion.quetsion;
};

startGame();