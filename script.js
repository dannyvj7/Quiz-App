const questions = [
  {
    question: "What year was the first ever World Cup held?",
    options: [1960, 1943, 1930, 1955],
    answer: 1930,
  },
  {
    question: "Which country won the World Cup in 2010?",
    options: ["Argentina", "Spain", "France", "Germany"],
    answer: "Spain",
  },
  {
    question: "Who has scored the most World Cup goals?",
    options: [
      "Cristiano Ronaldo",
      "Lionel Messi",
      "Miroslav Klose",
      "Kylian Mbappe",
    ],
    answer: "Miroslav Klose",
  },
];

let currentIndex = 0;
let score = 0;
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const finalScore = document.getElementById("finalScore");

function loadQuestion() {
  const currentQuestion = questions[currentIndex];
  questionEl.textContent = currentQuestion.question;

  optionsEl.innerHTML = "";

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", function () {
      checkAnswer(option);
    });
    optionsEl.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentIndex];

  if (selectedOption === currentQuestion.answer) {
    feedbackEl.textContent = "✅ Correct";
    score++;
  } else {
    feedbackEl.textContent = "❌ Wrong";
  }

  currentIndex++;

  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    finalScore.style.display = "block";
    finalScore.textContent = `Quiz Over! Your score is ${score}/${questions.length}`;

    const resBtn = document.createElement("button");
    resBtn.textContent = "Restart 🔄";
    resBtn.addEventListener("click", function () {
      currentIndex = 0;
      score = 0;
      feedbackEl.textContent = "";
      finalScore.style.display = "none";
      finalScore.innerHTML = "";
      loadQuestion();
    });

    finalScore.appendChild(resBtn);
  }
}

loadQuestion();
