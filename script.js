// ============================================
// DIWILL MIND LAB - IQ TEST
// ============================================

const questions = [

    {
        category: "NUMBER LOGIC",
        question: "What number comes next? 2, 4, 8, 16, ?",
        answers: ["20", "24", "32", "36"],
        correct: 2
    },

    {
        category: "PATTERN",
        question: "What number should replace the question mark? 3, 6, 11, 18, 27, ?",
        answers: ["36", "38", "40", "42"],
        correct: 1
    },

    {
        category: "LOGIC",
        question: "All cats are animals. Some animals are black. Which statement must be true?",
        answers: [
            "All cats are black",
            "Some cats are black",
            "Cats are animals",
            "No cats are black"
        ],
        correct: 2
    },

    {
        category: "MATHEMATICS",
        question: "If 5 machines make 5 items in 5 minutes, how long would 100 machines take to make 100 items?",
        answers: [
            "5 minutes",
            "20 minutes",
            "100 minutes",
            "500 minutes"
        ],
        correct: 0
    },

    {
        category: "SEQUENCE",
        question: "Find the missing number: 1, 1, 2, 3, 5, 8, ?",
        answers: ["11", "12", "13", "15"],
        correct: 2
    },

    {
        category: "WORD LOGIC",
        question: "Which word does NOT belong?",
        answers: [
            "Apple",
            "Banana",
            "Carrot",
            "Mango"
        ],
        correct: 2
    },

    {
        category: "MATHEMATICS",
        question: "A clock shows 3:00. What is the angle between the hour and minute hands?",
        answers: [
            "45°",
            "60°",
            "90°",
            "180°"
        ],
        correct: 2
    },

    {
        category: "PATTERN",
        question: "If each letter is moved one position forward in the alphabet, what does GREEN become?",
        answers: [
            "HSFFO",
            "HSFFM",
            "HSGFO",
            "GSFFO"
        ],
        correct: 0
    },

    {
        category: "LOGIC",
        question: "A farmer has 17 sheep. All but 9 run away. How many sheep remain?",
        answers: [
            "8",
            "9",
            "17",
            "0"
        ],
        correct: 1
    },

    {
        category: "NUMBER LOGIC",
        question: "What is the next number? 100, 50, 25, 12.5, ?",
        answers: [
            "10",
            "8.25",
            "6.25",
            "5"
        ],
        correct: 2
    },

    {
        category: "ANALOGY",
        question: "Book is to Reading as Fork is to...",
        answers: [
            "Cooking",
            "Eating",
            "Writing",
            "Drawing"
        ],
        correct: 1
    },

    {
        category: "LOGIC",
        question: "If yesterday was Monday, what day will it be the day after tomorrow?",
        answers: [
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        correct: 2
    },

    {
        category: "MATHEMATICS",
        question: "What is 15% of 200?",
        answers: [
            "15",
            "20",
            "30",
            "35"
        ],
        correct: 2
    },

    {
        category: "PATTERN",
        question: "Which number is missing? 4, 9, 16, 25, ?",
        answers: [
            "30",
            "32",
            "36",
            "49"
        ],
        correct: 2
    },

    {
        category: "FINAL CHALLENGE",
        question: "A bat and ball cost $1.10 together. The bat costs $1 more than the ball. How much does the ball cost?",
        answers: [
            "$0.05",
            "$0.10",
            "$0.15",
            "$0.20"
        ],
        correct: 0
    }

];


// ============================================
// VARIABLES
// ============================================

let currentQuestion = 0;

let score = 0;

let answered = false;

let timeLeft = 600;


// ============================================
// GET HTML ELEMENTS
// ============================================

const questionElement =
    document.getElementById("question");

const answersElement =
    document.getElementById("answers");

const questionNumberElement =
    document.getElementById("questionNumber");

const smallQuestionNumber =
    document.getElementById("smallQuestionNumber");

const categoryElement =
    document.getElementById("category");

const progressBar =
    document.getElementById("progressBar");

const nextButton =
    document.getElementById("nextButton");

const scoreElement =
    document.getElementById("currentScore");

const timerElement =
    document.getElementById("timer");


// ============================================
// LOAD QUESTION
// ============================================

function loadQuestion() {

    answered = false;

    nextButton.disabled = true;

    const currentQuestionData =
        questions[currentQuestion];


    // Show question

    questionElement.textContent =
        currentQuestionData.question;


    // Show category

    categoryElement.textContent =
        currentQuestionData.category;


    // Show question number

    questionNumberElement.textContent =
        currentQuestion + 1;


    smallQuestionNumber.textContent =
        String(currentQuestion + 1).padStart(2, "0");


    // Show score

    scoreElement.textContent =
        score;


    // Update progress

    const progress =
        ((currentQuestion + 1) /
        questions.length) * 100;

    progressBar.style.width =
        progress + "%";


    // Remove previous answers

    answersElement.innerHTML = "";


    // Create answer buttons

    currentQuestionData.answers.forEach(
        function(answer, index) {

            const button =
                document.createElement("button");


            button.type = "button";

            button.className =
                "answer-button";


            button.innerHTML = `

                <span class="answer-letter">
                    ${String.fromCharCode(65 + index)}
                </span>

                <span>
                    ${answer}
                </span>

            `;


            button.addEventListener(
                "click",
                function() {

                    selectAnswer(
                        index,
                        button
                    );

                }
            );


            answersElement.appendChild(button);

        }
    );

}


// ============================================
// SELECT ANSWER
// ============================================

function selectAnswer(
    selectedIndex,
    selectedButton
) {

    if (answered) {
        return;
    }


    answered = true;


    const current =
        questions[currentQuestion];


    const buttons =
        document.querySelectorAll(
            ".answer-button"
        );


    // Disable all buttons

    buttons.forEach(
        function(button) {

            button.disabled = true;

        }
    );


    // Correct answer

    if (
        selectedIndex ===
        current.correct
    ) {

        selectedButton.classList.add(
            "correct"
        );

        score++;

        scoreElement.textContent =
            score;

    }

    // Wrong answer

    else {

        selectedButton.classList.add(
            "wrong"
        );


        // Show correct answer

        buttons[
            current.correct
        ].classList.add(
            "correct"
        );

    }


    // Enable next button

    nextButton.disabled = false;


    // Change button text on final question

    if (
        currentQuestion ===
        questions.length - 1
    ) {

        nextButton.innerHTML =
            'SEE RESULTS <span>→</span>';

    }

}


// ============================================
// NEXT QUESTION
// ============================================

function nextQuestion() {

    if (!answered) {
        return;
    }


    currentQuestion++;


    // Finished

    if (
        currentQuestion >=
        questions.length
    ) {

        finishTest();

        return;

    }


    loadQuestion();

}


// ============================================
// FINISH TEST
// ============================================

function finishTest() {

    localStorage.setItem(
        "diwillScore",
        score
    );


    localStorage.setItem(
        "diwillCorrect",
        score
    );


    window.location.href =
        "result.html";

}


// ============================================
// TIMER
// ============================================

function updateTimer() {

    let minutes =
        Math.floor(
            timeLeft / 60
        );


    let seconds =
        timeLeft % 60;


    minutes =
        String(minutes).padStart(
            2,
            "0"
        );


    seconds =
        String(seconds).padStart(
            2,
            "0"
        );


    timerElement.textContent =
        minutes + ":" + seconds;


    // Last minute warning

    if (timeLeft <= 60) {

        timerElement.classList.add(
            "timer-warning"
        );

    }


    // Time finished

    if (timeLeft <= 0) {

        finishTest();

        return;

    }


    timeLeft--;

}


// Start timer

setInterval(
    updateTimer,
    1000
);


// ============================================
// START TEST
// ============================================

loadQuestion();

updateTimer();