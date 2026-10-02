/* ================= MOBILE MENU ================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});


/* ================= NAVBAR ================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 40) {
    navbar.style.boxShadow = "0 8px 30px rgba(0,0,0,.06)";
  } else {
    navbar.style.boxShadow = "none";
  }

});


/* ================= DIAGNOSTIC ================= */

const questions = [

  {
    question:
      "What best describes your current career situation?",

    answers: [
      "I am considering a career transition",
      "I want greater growth or responsibility",
      "My experience is strong but market visibility is limited",
      "I am moving toward senior leadership"
    ]
  },

  {
    question:
      "How clearly can you explain the value you bring to the market?",

    answers: [
      "Very clearly",
      "Somewhat clearly",
      "It depends on the opportunity",
      "I struggle to articulate it"
    ]
  },

  {
    question:
      "How visible are you to the people who influence your next opportunity?",

    answers: [
      "Highly visible",
      "Moderately visible",
      "Visible mainly within my current network",
      "Not very visible"
    ]
  },

  {
    question:
      "How predictable does your next career move feel?",

    answers: [
      "Very predictable",
      "Fairly clear",
      "I have several possibilities",
      "I am unsure what the next move should be"
    ]
  }

];


let currentQuestion = 0;
let selectedAnswer = null;

const questionText = document.getElementById("questionText");
const questionNumber = document.getElementById("questionNumber");
const answersContainer = document.getElementById("answers");
const progressBar = document.getElementById("progressBar");
const nextButton = document.getElementById("nextQuestion");


function loadQuestion() {

  const question = questions[currentQuestion];

  questionText.textContent = question.question;

  questionNumber.textContent =
    `QUESTION ${String(currentQuestion + 1).padStart(2, "0")}`;

  progressBar.style.width =
    `${((currentQuestion + 1) / questions.length) * 100}%`;

  answersContainer.innerHTML = "";

  selectedAnswer = null;

  question.answers.forEach(answer => {

    const button = document.createElement("button");

    button.textContent = answer;

    button.addEventListener("click", () => {

      document
        .querySelectorAll(".answers button")
        .forEach(btn => btn.classList.remove("selected"));

      button.classList.add("selected");

      selectedAnswer = answer;

    });

    answersContainer.appendChild(button);

  });

}


nextButton.addEventListener("click", () => {

  if (!selectedAnswer) {

    alert("Please select an option to continue.");

    return;

  }

  if (currentQuestion < questions.length - 1) {

    currentQuestion++;

    loadQuestion();

  } else {

    questionNumber.textContent = "DIAGNOSTIC COMPLETE";

    questionText.innerHTML =
      "Your career market is ready for a deeper diagnosis.";

    answersContainer.innerHTML = `
      <p style="
        color:#aaa69d;
        line-height:1.8;
        margin-bottom:20px;
      ">
        The OPPARC Diagnostic is designed to identify the
        dominant constraint between positioning, perception,
        professional equity, visibility and opportunity access.
      </p>

      <p style="
        color:#aaa69d;
        line-height:1.8;
      ">
        A meaningful assessment should lead to a strategic
        conversation — not a meaningless score.
      </p>
    `;

    nextButton.textContent = "Start a Conversation →";

    nextButton.onclick = () => {

      window.location.href = "tel:+918052591155";

    };

  }

});


loadQuestion();


/* ================= SCROLL REVEAL ================= */

const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

      }

    });

  },
  {
    threshold: 0.12
  }
);


document
  .querySelectorAll(".movement, .solution-card, .evidence, .lab-grid article")
  .forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity .7s ease, transform .7s ease";

    observer.observe(element);

  });
/* =====================================================
   OPPARC LOADER
   ===================================================== */

window.addEventListener("load", () => {

  const loader = document.getElementById("opparcLoader");

  setTimeout(() => {

    loader.classList.add("hide");

    setTimeout(() => {
      loader.remove();
    }, 900);

  }, 2500);

});
