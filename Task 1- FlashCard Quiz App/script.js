let flashcards = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "What is the largest ocean?",
        options: ["Indian", "Arctic", "Atlantic", "Pacific"],
        answer: "Pacific"
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Shakespeare", "Tolstoy", "Hemingway", "Fitzgerald"],
        answer: "Shakespeare"
    },
    {
        question: "What planet is known as the Red Planet?",
        options: ["Earth", "Venus", "Mars", "Jupiter"],
        answer: "Mars"
    },
    {
        question: "What is the square root of 64?",
        options: ["6", "7", "8", "9"],
        answer: "8"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"],
        answer: "Da Vinci"
    },
    {
        question: "What gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Carbon Dioxide"
    },
    {
        question: "Which is the longest river in the world?",
        options: ["Amazon", "Yangtze", "Nile", "Mississippi"],
        answer: "Nile"
    },
    {
        question: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        answer: "7"
    },
    {
        question: "What is the boiling point of water in Celsius?",
        options: ["90°C", "100°C", "110°C", "120°C"],
        answer: "100°C"
    },
    {
        question: "What is the currency of Japan?",
        options: ["Dollar", "Rupee", "Yen", "Euro"],
        answer: "Yen"
    },
    {
        question: "Who discovered gravity?",
        options: ["Einstein", "Newton", "Galileo", "Tesla"],
        answer: "Newton"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Quartz"],
        answer: "Diamond"
    },
    {
        question: "Which organ pumps blood in the human body?",
        options: ["Liver", "Lungs", "Brain", "Heart"],
        answer: "Heart"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("quizSection").style.display = "block";
    showQuestion();
}

function showQuestion() {
    let flashcardContainer = document.getElementById("flashcard-container");

    if (currentQuestionIndex < flashcards.length) {
        let currentQuestion = flashcards[currentQuestionIndex];

        let optionsHTML = currentQuestion.options.map(option =>
            `<button class="option-btn" onclick="checkAnswer(this, '${option}')">${option}</button>`
        ).join("");

        flashcardContainer.innerHTML = `
            <div class="flashcard">
                <p>${currentQuestion.question}</p>
                ${optionsHTML}
            </div>
        `;
    } else {
        showScore();
    }
}

function checkAnswer(button, selectedOption) {
    let correctAnswer = flashcards[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }

    setTimeout(() => {
        currentQuestionIndex++;
        showQuestion();
    }, 1000);
}

function showScore() {
    document.getElementById("flashcard-container").innerHTML = `
        <h3>Quiz Completed!</h3>
        <p>Your Score: ${score} / ${flashcards.length}</p>
        <button class="btn" onclick="restartQuiz()">Restart Quiz</button>
    `;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function addNewFlashcard() {
    let newQuestion = document.getElementById("newQuestion").value;
    let option1 = document.getElementById("option1").value;
    let option2 = document.getElementById("option2").value;
    let option3 = document.getElementById("option3").value;
    let option4 = document.getElementById("option4").value;
    let correctAnswer = document.getElementById("correctAnswer").value;

    if (newQuestion && option1 && option2 && option3 && option4 && correctAnswer) {
        let newFlashcard = {
            question: newQuestion,
            options: [option1, option2, option3, option4],
            answer: correctAnswer
        };

        flashcards.push(newFlashcard);
        alert("New question added!");
        document.getElementById("newQuestion").value = "";
        document.getElementById("option1").value = "";
        document.getElementById("option2").value = "";
        document.getElementById("option3").value = "";
        document.getElementById("option4").value = "";
        document.getElementById("correctAnswer").value = "";
    } else {
        alert("Please fill all fields!");
    }
}