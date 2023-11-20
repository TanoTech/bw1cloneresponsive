const questions = [
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does CPU stand for?",
        correct_answer: "Central Processing Unit",
        incorrect_answers: [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
        correct_answer: "Final",
        incorrect_answers: ["Static", "Private", "Public"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "The logo for Snapchat is a Bell.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question:
            "Pointers were not used in the original C programming language; they were added later on in C++.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "What is the most preferred image format used for logos in the Wikimedia database?",
        correct_answer: ".svg",
        incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "In web design, what does CSS stand for?",
        correct_answer: "Cascading Style Sheet",
        incorrect_answers: [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "What is the code name for the mobile operating system Android 7.0?",
        correct_answer: "Nougat",
        incorrect_answers: [
            "Ice Cream Sandwich",
            "Jelly Bean",
            "Marshmallow",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "On Twitter, what is the character limit for a Tweet?",
        correct_answer: "140",
        incorrect_answers: ["120", "160", "100"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "Linux was first created as an alternative to Windows XP.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C", "Jakarta"],
    },
];

let questionIndex = 0
let correctAnswer = []

const showSection = function (sectionId) {
    let allSection = document.querySelectorAll('main > section')
    for (let i = 0; i < allSection.length; i++) {
        allSection[i].style.display = 'none'
    }

    let section = document.getElementById(sectionId)
    if (section) {
        section.style.display = 'block'
    }
}

showSection('welcome')

const checkBox = document.querySelector('#showBenchmark')
const toolTip = document.querySelector('.tooltip')
const proceedButton = document.getElementById('proceed');

proceedButton.addEventListener('mouseover', function () {
    if (!checkBox.checked) {
        toolTip.style.display = 'block'
        proceedButton.style.cursor = 'not-allowed'
    } else {
        proceedButton.style.cursor = 'pointer'
    }
})

checkBox.addEventListener('click', function (event) {
    if (checkBox.checked) {
        toolTip.style.display = 'none'
        proceedButton.style.backgroundColor = '#00FFFF'
        proceedButton.addEventListener('click', function () {
            showSection('benchmark')
            showQuestions()
        })
    } else {
        proceedButton.style.cursor = 'not-allowed'
        proceedButton.style.backgroundColor = 'grey'
        proceedButton.addEventListener('click', function () {
            toolTip.style.display = 'block'

        })
    }
})

const answersContainer = document.getElementById('answersContainer')
answersContainer.addEventListener('change', function () {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        const currentQuestion = questions[questionIndex - 1]
        const userAnswer = selectedAnswer.value

        if (userAnswer === currentQuestion.correct_answer) {
            correctAnswer.push(currentQuestion)
        }

        if (questionIndex < questions.length) {
            showQuestions()
        } else {
            showSection('result')
            showResult()
        }
    }
})

const rateUsButton = document.getElementById('rateUs')
rateUsButton.addEventListener('click', function () {
    showSection('feedback')
})

const submitBtn = document.getElementById('submitRating')
submitBtn.addEventListener('click', function () {

})

const showQuestions = function () {
    timer()

    if (questionIndex < questions.length) {
        const currentQuestion = questions[questionIndex]
        const answers = [currentQuestion.correct_answer, ...currentQuestion.incorrect_answers]
        const randomAnswer = answers.sort(() => Math.random() - 0.5)

        const questionContainer = document.getElementById('currentQuestion')
        const answersContainer = document.getElementById('answersContainer')

        answersContainer.innerHTML = '';
        questionContainer.innerHTML = currentQuestion.question

        for (let i = 0; i < randomAnswer.length; i++) {
            const answer = randomAnswer[i]

            const answerInput = document.createElement('input')
            answerInput.type = 'radio'
            answerInput.name = 'answer'
            answerInput.value = answer
            answerInput.id = 'answer' + [i]
            answerInput.style.display = 'none'

            const answerLabel = document.createElement('label')
            answerInput.setAttribute('for', 'answer' + [i])
            answerLabel.innerHTML = answer

            answerLabel.appendChild(answerInput)
            answersContainer.appendChild(answerLabel)
        }

        const questionCounter = document.querySelector('#questionCounter');
        questionCounter.innerHTML = `QUESTIONS ${questionIndex + 1}<span class="pinkText">/${questions.length}</span>`

        questionIndex++
        
        setTimeout(() => {
            showQuestions()
        }, 3000) 
    } else {
        showSection('result')
    }
}

const showResult = function () {
    const totalQuestions = questions.length
    const correctQuestionsNum = correctAnswer.length
    const correctAnswerIndex = document.getElementById('correctAnswersIndex')
    correctAnswerIndex.textContent = `${correctQuestionsNum}/${totalQuestions} questions`
    const wrongAnswerIndex = document.getElementById('wrongAnswersIndex')
    wrongAnswerIndex.textContent = `${totalQuestions - correctQuestionsNum}/${totalQuestions} questions`
    const correctAnswersPercentage = document.getElementById('correctAnswersPercentage')
    correctAnswersPercentage.textContent = `${correctQuestionsNum * 10}%`
    const wrongAnswersPercentage = document.getElementById('wrongAnswersPercentage')
    wrongAnswersPercentage.textContent = `${(totalQuestions - correctQuestionsNum) * 10}%`

    const resultBenchmark = document.getElementById('resultBenchmark')
    const subResultBenchmark = document.getElementById('subResultBenchmark')
    const emailResultBenchmark = document.getElementById('emailResultBenchmark')

    const rotateCircle = document.getElementById('circle')

    
    let startValue = 0
    let finalValue = (totalQuestions - correctQuestionsNum) * 10
    let speedProgress = 20

    let progress = setInterval(() => {
        startValue++
        rotateCircle.style.background = `conic-gradient(
      #B22B8A ${startValue * 3.6}deg,
      #75FBFD ${startValue * 3.6}deg)`

        if (startValue === finalValue) {
            clearInterval(progress)
        }

    }, speedProgress)

    if (correctQuestionsNum >= 0.6 * totalQuestions) {
        resultBenchmark.textContent = 'Congratulations!'
        subResultBenchmark.textContent = 'You passed the exam.'
        emailResultBenchmark.textContent = "We'll send you the certificate in few minutes. Check your email (including promotion/spam folder"
    } else {
        resultBenchmark.textContent = "Failed!"
        subResultBenchmark.textContent = "You didn't pass the exam."
    }
}

let timerInterval

const timer = function () {
    const progressBar = document.getElementById('timerCircle')
    const valueContainer = document.getElementById('timerNumber')

    let progressValue = 30
    const progressEndValue = 0
    const duration = 30000
    const interval = 100

    const steps = duration / interval
    const step = 360 / steps
    let currentStep = 0

    updateProgressBar()

    const startTime = Date.now()

    clearInterval(timerInterval)

    timerInterval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        progressValue = Math.max(0, 30 - Math.floor(elapsedTime / 1000))

        updateProgressBar()

        if (progressValue === progressEndValue) {
            clearInterval(timerInterval)
        }
    }, interval)

    function updateProgressBar() {
        const formattedValue = progressValue < 10 ? `0${progressValue}` : `${progressValue}`
        valueContainer.textContent = formattedValue
        progressBar.style.background = `conic-gradient(
        transparent ${currentStep}deg,
        #75FBFD ${currentStep - step}deg)`
        currentStep += step
    }
}
