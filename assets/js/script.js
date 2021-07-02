const startButton = document.getElementById('start-btn');

const homeButton = document.getElementById('homePage-btn');
const questionContainerElement = document.getElementById('question-container');

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestion, currentQuestionIndex

startButton.addEventListener('click', startGame);
 






function startGame() {

    
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    shuffledQuestion = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    setNextQuestion();
    
      
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestion[currentQuestionIndex]);


}

function showQuestion(question) {
    questionElement.innerText = question.question ;
    question.answers.forEach((answer) => {
        const button = document.createElement('button');
        button.innerText = answer.text 
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button)
    });

}
function resetState() {
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}



function selectAnswer(e) {
    disableAnswerButtons()

    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct ;
    setStatusClass(document.body , correct);

    Array.from(answerButtonsElement.children).forEach((button) => {
        setStatusClass(button, button.dataset.correct);
    });

}
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct');   
    } else {
        element.classList.add('wrong');
    }

}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
// list of questions

const questions = [
    {
        question : 'Which is the smallest planet?',
        answer : [ 
            {text : 'Mercury', correct : true },
            {text : 'Earth', correct : false},
            {text : 'Venus', correct : false}
        ]
    }
]

