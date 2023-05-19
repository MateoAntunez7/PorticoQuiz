const questions = [
    {
      question: "¿Cuál es el nombre del planeta de origen de Luke Skywalker?",
      answers: [
        { text: "Tatooine", side: "Luz" },
        { text: "Coruscant", side: "Oscuridad" }
      ]
    },
    {
      question: "¿Cuál es el nombre del planeta de origen de Luke Skywalker?",
      answers: [
        { text: "Tatooine", side: "Luz" },
        { text: "Coruscant", side: "Oscuridad" }
      ]
    },
    {
      question: "¿Cuál es el nombre del planeta de origen de Luke Skywalker?",
      answers: [
        { text: "Tatooine", side: "Luz" },
        { text: "Coruscant", side: "Oscuridad" }
      ]
    },
    {
      question: "¿Cuál es el nombre del planeta de origen de Luke Skywalker?",
      answers: [
        { text: "Tatooine", side: "Luz" },
        { text: "Coruscant", side: "Oscuridad" }
      ]
    },
    {
      question: "¿Cuál es el nombre del planeta de origen de Luke Skywalker?",
      answers: [
        { text: "Tatooine", side: "Luz" },
        { text: "Coruscant", side: "Oscuridad" }
      ]
    },
    {
      question: "¿Cuál es el nombre del planeta de origen de Luke Skywalker?",
      answers: [
        { text: "Tatooine", side: "Luz" },
        { text: "Coruscant", side: "Oscuridad" }
      ]
    },
    {
      question: "¿Cuál es el nombre del planeta de origen de Luke Skywalker?",
      answers: [
        { text: "Tatooine", side: "Luz" },
        { text: "Coruscant", side: "Oscuridad" }
      ]
    },
    {
      question: "¿Cuál es el nombre del planeta de origen de Luke Skywalker?",
      answers: [
        { text: "Tatooine", side: "Luz" },
        { text: "Coruscant", side: "Oscuridad" }
      ]
    },
    {
      question: "¿Cuál es el nombre del planeta de origen de Luke Skywalker?",
      answers: [
        { text: "Tatooine", side: "Luz" },
        { text: "Coruscant", side: "Oscuridad" }
      ]
    },
    {
      question: "¿Cuál es el nombre del planeta de origen de Luke Skywalker?",
      answers: [
        { text: "Tatooine", side: "Luz" },
        { text: "Coruscant", side: "Oscuridad" }
      ]
    },
    // Agrega más preguntas aquí...
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const quizContainer = document.getElementById('quiz-container');
  const questionText = document.getElementById('question-text');
  const answersContainer = document.getElementById('answers-container');
  const nextBtn = document.getElementById('next-btn');
  const resultContainer = document.getElementById('result-container');
  const resultText = document.getElementById('result-text');
  
  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
  
    answersContainer.innerHTML = '';
    currentQuestion.answers.forEach((answer) => {
      const answerElement = document.createElement('div');
      answerElement.innerHTML = `
        <label>
          <input type="radio" name="answer" value="${answer.side}">
          ${answer.text}
        </label>
      `;
      answersContainer.appendChild(answerElement);
    });
  }
  
  function calculateScore() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
      const selectedSide = selectedAnswer.value;
      if (selectedSide === 'Luz') {
        score++;
      }
    }
  }
  
  function showResult() {
    quizContainer.classList.add('d-none');
    resultContainer.classList.remove('d-none');
    resultText.textContent = (score >= 5) ? '¡Eres un Jedi!' : 'El lado oscuro te llama...';
  }
  
  function handleNextBtnClick() {
    calculateScore();
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  nextBtn.addEventListener('click', handleNextBtnClick);
  
  showQuestion();
  