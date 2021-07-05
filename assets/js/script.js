const startButton = document.getElementById('start-btn');
startButton.addEventListener('click', startGame);

const homeButton = document.getElementById('homePage-btn');
homeButton.classList.add('hide');

const introHeading = document.getElementById('intro');

const correctAnswersLabel = document.getElementById('correct');
const incorrectAnswersLabel = document.getElementById('incorrect');


const questionContainerElement = document.getElementById('question-container');

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');



let shuffledQuestion, currentQuestionIndex, correctAnswers, incorrectAnswers;






function startGame() {
    // hide start btn when clicked
    startButton.classList.add('hide');
    //hide the paragraph when start button is clicked
    document. getElementById("p"). style. display = "none"; //hide.
    
    questionContainerElement.classList.remove('hide');
    answerButtonsElement.classList.remove('hide');

    //shuffles the questions
    shuffledQuestion = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    resetStatistics()
    setNextQuestion();
    
    
      
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestion[currentQuestionIndex]);


}
 /**
 * 
 * @param {*} question 
 */

function showQuestion(question) {
    questionElement.innerText = question.question ;
    question.answers.forEach((answer) => {
        const button = document.createElement('button');
        button.innerText = answer.text; 
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button)
    });

}

//Resets questions
function resetState() {
    
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function disableAnswerButtons() {
    answerButtonsElement.childNodes.forEach((button) => {
        button.disabled = true;
    });
}

function selectAnswer(e) {
    disableAnswerButtons()

    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct ;
    setStatusClass(document.body , correct);

    Array.from(answerButtonsElement.children).forEach((button) => {
        setStatusClass(button, button.dataset.correct);
    });
    

    updateStatistics(correct)

    setTimeout(() => {
        if (shuffledQuestion.length > currentQuestionIndex + 1) {
            currentQuestionIndex++;
            setNextQuestion();
        } else {
            //end of game
            startButton.innerHTML = ('Restart');
            startButton.classList.remove('hide');
            homeButton.classList.remove('hide');
            answerButtonsElement.classList.add('hide');
            document.querySelector('#question').innerHTML = 'Here is your score!';
        }
    }, 1000 * 2);
}

document.querySelector('#homePage-btn').addEventListener('click', () => {
    window.location.href = 'index.html';
});



// updates correct and incorrect answers
function updateStatistics(isCorrectAnswer) {
    if (isCorrectAnswer) {
        correctAnswers++;
        correctAnswersLabel.innerText = correctAnswers;
    } else {
        incorrectAnswers++;
        incorrectAnswersLabel.innerText = incorrectAnswers;
    }
}

function resetStatistics() {
    correctAnswers = 0;
    incorrectAnswers = 0;
    correctAnswersLabel.innerText = correctAnswers;
    incorrectAnswersLabel.innerText = incorrectAnswers;
}



function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}

// list of questions

const questions = [{
        question : 'Which one of these is the smallest planet?', 
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
                correct: false
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
        question: 'What is the Sun mainly made from? ',
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
        question: 'What is the closest planet to the Sun? ',
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
                correct: false
            }

        ]
    },
    {
        question: 'Which one of these is the coldest planet?',
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
                correct: true
            },
            {
                text: 'Jupiter',
                correct: false
            },
            {
                text: 'Uranus',
                correct: false
            }

        ]
    }
]
