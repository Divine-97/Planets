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
            answers: [{
                text: 'Earth',
                correct: false
            },
            {
                text: 'Mercury',
                correct: true
            },
            {
                text: 'Venus',
                correct: false
            }

        ]
    },
    {
        question: 'What is the Great Red Spot on Jupiter? ',
        answers: [{
                text: 'A Storm',
                correct: true
            },
            {
                text: 'A Volcano',
                correct: false
            },
            {
                text: 'A Lake',
                correct: true
            }

        ]
    },
    {
        question: 'How many Moons does Mars have? ',
        answers: [{
                text: '13',
                correct: false
            },
            {
                text: '2',
                correct: true
            },
            {
                text: '1',
                correct: false
            }

        ]
    },
    {
        question: 'What is the sun mainly made from? ',
        answers: [{
                text: 'Gas',
                correct: true
            },
            {
                text: 'Rock',
                correct: false
            },
            {
                text: 'Liquid lava',
                correct: false
            }

        ]
    },
    {
        question: 'What is the closest planet to the sun? ',
        answers: [{
                text: 'Neptune',
                correct: false
            },
            {
                text: 'Mercury',
                correct: true
            },
            {
                text: 'Venus',
                correct: false
            }

        ]
    },
    {
        question: 'How many planets are there in the Solar System?',
        answers: [{
                text: '8',
                correct: true
            },
            {
                text: '9',
                correct: false
            },
            {
                text: '13',
                correct: false
            }

        ]
    },
    {
        question: 'Which planet has the hottest temperature?',
        answers: [{
                text: 'Earth',
                correct: false
            },
            {
                text: 'Jupiter',
                correct: false
            },
            {
                text: 'Venus',
                correct: true
            }

        ]
    },
    {
        question: 'Which of the following best describes the atmosphere surrounding Venus?',
        answers: [{
                text: 'Bright and Sunny',
                correct: false
            },
            {
                text: 'Hot and Poisonus',
                correct: true
            },
            {
                text: 'Cold and Wet',
                correct: true
            }

        ]
    },
    {
        question: 'Which is the coldest planet?',
        answers: [{
                text: 'Neptune',
                correct: true
            },
            {
                text: 'Uranus',
                correct: false
            },
            {
                text: 'Saturn',
                correct: false
            }

        ]
    },
    {
        question: 'Which planet has the most Moons?',
        answers: [{
                text: 'Saturn',
                correct: false
            },
            {
                text: 'Jupiter',
                correct: false
            },
            {
                text: 'Uranus',
                correct: true
            }

        ]
    },
]

