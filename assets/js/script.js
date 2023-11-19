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

const proceedButton = document.getElementById('proceed')
proceedButton.addEventListener('click', function () {
    showSection('benchmark')
    showQuestions()
})

const answersContainer = document.getElementById('answersContainer');
answersContainer.addEventListener('change', function () {
    if (questionIndex < questions.length) {
        showQuestions()
    } else {
        showSection('result')
    }
})

const showQuestions = function () {
   
    if (questionIndex < questions.length) {
        const currentQuestion = questions[questionIndex]
        const answers = [currentQuestion.correct_answer, ...currentQuestion.incorrect_answers]
        const randomAnswer = answers.sort(() => Math.random() - 0.5)
    
        const questionContainer = document.getElementById('currentQuestion')
        const answersContainer = document.getElementById('answersContainer')
    
        answersContainer.innerHTML = ''
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
            answerLabel.innerHTML = answer;
    
            answerLabel.appendChild(answerInput)
            answersContainer.appendChild(answerLabel)
        }

        const questionCounter = document.querySelector('#questionCounter')
        questionCounter.innerHTML = `${questionIndex + 1} <span class:'pinkText> /${questions.length}</span>`
    
        questionIndex++
    } else {
        showSection('result')
    }
}

const showResult = function () {

}
   
