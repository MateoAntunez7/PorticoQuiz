const questions = [
    {
      question: "¿Qué característica te define mejor?",
      answers: [
        { text: "Ser diciplinado", side: "Luz" },
        { text: "Ser justo", side: "Oscuridad" },
        { text: "Ser astuto", side: "Oscuridad" }
      ]
    },
    {
      question: "¿Qué cualidad consideras más importante en un líder?",
      answers: [
        { text: "Conocerse a sí mismo", side: "Luz" },
        { text: "Imponer respeto y dejar claro quien está al mando", side: "Oscuridad" },
        { text: "Evaluar riesgos y beneficios rápidamente", side: "Oscuridad" }
      ]
    },
    {
      question: "¿Qué opinas del trabajo en equipo?",
      answers: [
        { text: "Mientras más gente apoyando la misma causa mejor", side: "Luz" },
        { text: "Prefiero resolver el trabajo yo solo", side: "Oscuridad" },
        { text: "Me siento cómodo en grupos reducidos", side: "Oscuridad" }
      ]
    },
    {
      question: "¿Qué tan frecuente sientes ganas de lastimar o humillar a alguien que te causó un problema?",
      answers: [
        { text: "Siempre", side: "Oscuridad" },
        { text: "Frecuentemente", side: "Oscuridad" },
        { text: "A veces", side: "Oscuridad" },
        { text: "Nunca", side: "Luz" }
      ]
    },
    {
      question: "¿Por qué causa lucharías?",
      answers: [
        { text: "Por nada a menos que obtenga algo a cambio", side: "Oscuridad" },
        { text: "Por la de mi nación, sea cual sea su posición", side: "Luz" },
        { text: "Por la libertad y la justicia", side: "Luz" }
      ]
    },
    {
      question: "¿Qué tan frecuente imaginas vengarte o conseguir revancha de alguien?",
      answers: [
        { text: "Siempre", side: "Oscuridad" },
        { text: "Frecuentemente", side: "Oscuridad" },
        { text: "A veces", side: "Oscuridad" },
        { text: "Nunca", side: "Luz" }

      ]
    },
    {
      question: "¿A qué es lo que más aspiras en la vida?",
      answers: [
        { text: "Tatooine", side: "Luz" },
        { text: "Coruscant", side: "Oscuridad" },
        { text: "Coruscant", side: "Oscuridad" }
      ]
    },
    {
      question: "¿Cuál es el nombre del planeta de origen de Luke Skywalker?",
      answers: [
        { text: "Admiración y poder", side: "Oscuridad" },
        { text: "Dinero y amor", side: "Luz" },
        { text: "Paz y estabilidad", side: "Luz" }
      ]
    },
    {
      question: "¿Cuál es el nombre del planeta de origen de Luke Skywalker?",
      answers: [
        { text: "Tatooine", side: "Luz" },
        { text: "Coruscant", side: "Oscuridad" },
        { text: "Coruscant", side: "Oscuridad" }
      ]
    },
    {
      question: "¿Dónde tendrías la casa de tus sueños?",
      answers: [
        { text: "En un lugar solitario", side: "Oscuridad" },
        { text: "En un pueblo agrícola, con gente amistosa", side: "Luz" },
        { text: "En una ciudad con lugares para divertirme", side: "Luz" }
      ]
    },
    {
      question: "¿Como reaccionas si debes trabajar en un proyecto en grupo con gente incompetente?",
      answers: [
        { text: "Me concentro en mi parte del trabajo y ya", side: "Oscuridad" },
        { text: "Hago lo mejor que puedo y procuro guiarlos para hacer mejor su trabajo", side: "Luz" },
        { text: "Me molesta su ineptitud", side: "Oscuridad" }
      ]
    },
    {
      question: "Finalmente, Si debes sacrificar tu trabajo y poner en riesgo tu vida ¿Cuál sería una causa válida?",
      answers: [
        { text: "El amor de mi vida", side: "Luz" },
        { text: "La justicia y libertad de un mayor grupo de personas", side: "Luz" },
        { text: "Una gran suma de dinero que me garantice no preocuparme por trabajar jamás", side: "Oscuridad" }
      ]
    }
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
  
  function showResult() {
    quizContainer.classList.add('d-none');
    resultContainer.classList.remove('d-none');
    
    let resultMessage = '';
    
    if (score >= 5) {
      resultMessage = '¡Eres un Jedi de la luz!';
      window.location.href = '../LadoLuminoso.html';
    } else {
      resultMessage = 'Has sido tentado por el lado oscuro...';
      window.location.href = 'starwars/LadoOscuro.html';
    }
    
    
    resultText.textContent = resultMessage;
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