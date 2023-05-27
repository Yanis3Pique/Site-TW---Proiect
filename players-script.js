document.addEventListener('DOMContentLoaded', function() {
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
        {
            question: "Which player holds the record for the most appearances in official matches for FC Barcelona?",
            answers: {
                a: "Lionel Messi",
                b: "Xavi Hernandez",
                c: "Andres Iniesta",
                d: "Sergio Busquets"
            },
            correctAnswer: "a"
        },
        {
            question: "Who is FC Barcelona's all-time leading goalscorer?",
            answers: {
                a: "Luis Suarez",
                b: "Cesar Rodriguez",
                c: "Lionel Messi",
                d: "Johan Cruyff"
            },
            correctAnswer: "c"
        },
        {
            question: "In which year did FC Barcelona win their first European Cup/Champions League title?",
            answers: {
                a: "1990",
                b: "2006",
                c: "2011",
                d: "1992"
            },
            correctAnswer: "d"
        },
        {
            question: "Who is the current president of FC Barcelona as of 2023?",
            answers: {
                a: "Joan Laporta",
                b: "Josep Maria Bartomeu",
                c: "Sandro Rosell",
                d: "Florentino Perez"
            },
            correctAnswer: "a"
        },
        {
            question: "Which coach led FC Barcelona to their historic sextuple (six trophies) in 2009?",
            answers: {
                a: "Frank Rijkaard",
                b: "Pep Guardiola",
                c: "Louis van Gaal",
                d: "Johan Cruyff"
            },
            correctAnswer: "b"
        },
        {
            question: "Which player has won the most Ballon d'Or awards while playing for FC Barcelona?",
            answers: {
                a: "Maradona",
                b: "Johan Cruyff",
                c: "Ronaldinho",
                d: "Lionel Messi"
            },
            correctAnswer: "d"
        },
        {
            question: "Which stadium is FC Barcelona's home ground?",
            answers: {
                a: "Santiago Bernabeu",
                b: "Camp Nou",
                c: "Wanda Metropolitano",
                d: "Estadio de la Ceramica"
            },
            correctAnswer: "b"
        },
        {
            question: "Who is the youngest debutant in FC Barcelona's history?",
            answers: {
                a: "Ansu Fati",
                b: "Lionel Messi",
                c: "Gavi",
                d: "Lamine Yamal"
            },
            correctAnswer: "d"
        },
        {
            question: "Which former player is considered the greatest captain in FC Barcelona's history?",
            answers: {
                a: "Carles Puyol",
                b: "Josep Guardiola",
                c: "Xavi Hernandez",
                d: "Gerard Pique"
            },
            correctAnswer: "a"
        },
        {
            question: "Which club did FC Barcelona defeat to win their second European Cup/Champions League title?",
            answers: {
                a: "Manchester United",
                b: "Arsenal",
                c: "Chelsea",
                d: "Juventus"
            },
            correctAnswer: "b"
        },
        {
            question: "Who is the current manager of FC Barcelona as of 2023?",
            answers: {
                a: "Ronald Koeman",
                b: "Quique Setien",
                c: "Pep Guardiola",
                d: "Xavi Hernandez"
            },
            correctAnswer: "d"
        },
        {
            question: "Which former player is known as 'The Atomic Flea' for his speed and agility on the field?",
            answers: {
                a: "Andres Iniesta",
                b: "Lionel Messi",
                c: "Ronaldinho",
                d: "Romario"
            },
            correctAnswer: "b"
        },
        {
            question: "Which current player is known as 'The Wall' for his defensive skills?",
            answers: {
                a: "Gerard Pique",
                b: "Sergio Busquets",
                c: "Marc-Andre ter Stegen",
                d: "Ronald Araujo"
            },
            correctAnswer: "a"
        },
        {
            question: "Who scored the winning goal for FC Barcelona in the 2006 UEFA Champions League final?",
            answers: {
                a: "Samuel Eto'o",
                b: "Juliano Belletti",
                c: "Ronaldinho",
                d: "Lionel Messi"
            },
            correctAnswer: "b"
        },
        {
            question: "Which player is known as 'The Maestro' for his exceptional playmaking abilities?",
            answers: {
                a: "Andres Iniesta",
                b: "Xavi Hernandez",
                c: "Sergio Busquets",
                d: "Pedri"
            },
            correctAnswer: "b"
        },
        {
            question: "Who is the current captain of FC Barcelona as of 2023?",
            answers: {
                a: "Lionel Messi",
                b: "Gerard Pique",
                c: "Sergio Busquets",
                d: "Marc Andre ter Stegen"
            },
            correctAnswer: "c"
        }
        ]

    function buildQuiz() {
        // Output HTML
        const output = [];
      
        myQuestions.forEach((currentQuestion, questionNumber) => {
          // Variable to store the list of possible answers
          const answers = [];
      
          // For each answer option
          for (letter in currentQuestion.answers) {
            // Add a radio button for the answer option
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
      
          // Add the question and its answers to the output
          output.push(
            `<div class="slide">
              <div class="question">${currentQuestion.question}</div>
              <div class="answers">${answers.join('')}</div>
            </div>`
          );
        });
      
        // Combine the HTML output into a string and display it on the page
        quizContainer.innerHTML = output.join('');
      }
  
    function showResults(){
  
      // Luam raspunsurile paginii
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // Tinem cont de raspunsurile user-ului
      let numCorrect = 0;

      myQuestions.forEach( (currentQuestion, questionNumber) => {

        // Gaseste raspunsul selectat
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // Daca e raspuns corect
        if(userAnswer === currentQuestion.correctAnswer){
          // Crestem nr de raspunsuri corecte
          numCorrect++;
  
          // Coloram raspunsurile cu verde
          answerContainers[questionNumber].style.color = 'lightgreen';
          answerContainers[questionNumber].style.backgroundColor = 'black';
          answerContainers[questionNumber].style.fontWeight = 'bold';
        }
        // Daca e raspuns gresit sau gol
        else{
          // Coloram raspunsurile cu rosu
          answerContainers[questionNumber].style.color = 'red';
          answerContainers[questionNumber].style.backgroundColor = 'darkblue';
          answerContainers[questionNumber].style.fontWeight = 'normal';
        }
      });
  
      // Aratam cate raspunsuri corecte din total avem
      resultsContainer.innerHTML = `${numCorrect} / ${myQuestions.length}`;
      submitButton.remove();
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length - 1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }

    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }

    function handleKeyDown(event) {
        // Gestionează evenimentul keydown
        const key = event.key;
        if (key === 'ArrowLeft') {
          // Verifică dacă există un diapozitiv anterior
          if (currentSlide > 0) {
            // Treci la diapozitivul anterior
            showSlide(currentSlide - 1);
          }
        } else if (key === 'ArrowRight') {
          // Verifică dacă există un diapozitiv următor
          if (currentSlide < slides.length - 1) {
            // Treci la diapozitivul următor
            showSlide(currentSlide + 1);
          }
        }
      }      
  
    // Generam Quiz-ul
    buildQuiz();
  
    // Butoanele
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // Aratam primul slide
    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
    document.addEventListener('keydown', handleKeyDown);

    const subscribeButton = document.getElementById('player-form');
    subscribeButton.addEventListener('submit', function(event) {
      event.preventDefault();
      const successMessage = document.getElementById('success-message');
      
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const phoneInput = document.getElementById('phone');

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        successMessage.innerHTML = 'Please enter a valid email address.';
        return;
      }

      sessionStorage.setItem('name', nameInput.value);
      sessionStorage.setItem('email', emailInput.value);
      sessionStorage.setItem('phone', phoneInput.value);
  
      const name = sessionStorage.getItem('name');
      const email = sessionStorage.getItem('email');
      const phone = sessionStorage.getItem('phone');
      const titlu_form = document.getElementById('titlu-form')
      var randomNumber = Math.floor(Math.random() * 100001);

      successMessage.innerHTML = 'Subscription successful! Your ID is ' + randomNumber + '.' 
                                  + '<br>' + `Name: ${name}<br>Email: ${email}<br>Phone: ${phone}`;
      titlu_form.innerText = 'Informații despre dumneavoastră:';

      setTimeout(function() {
        subscribeButton.remove();
      }, 2000); //delay 2 secunde
    });
    
    // Titlul face glow la fiecare 7 secunde
    setInterval(function() {
        const quizTitle = document.querySelector('h1');
        quizTitle.classList.toggle('glow');
      }, 7000);

      // Data de azi
      var currentDate = new Date();

      var day = currentDate.getDate();
      var month = currentDate.getMonth() + 1;
      var year = currentDate.getFullYear();
      var formattedDate = day + '/' + month + '/' + year;

      document.getElementById('id_caseta').value = formattedDate;

  }); 

/*-------------------------------------------------------------------------------------------------------------------------------------*/

var timer;
var marginTop = 360;
var velocity = -55; 
var gravity = 5; 

function updateBallPosition() {
  var ball = document.getElementById("ball");
  marginTop += velocity;
  velocity += gravity;

  if (marginTop >= 360) {
    if (Math.abs(velocity) < 1) {
      clearInterval(timer);
      var btn = document.getElementById("start-btn");
      btn.innerHTML = 'Start';
      return;
    }

    velocity *= -0.6;

    if (Math.abs(velocity) < 11) {
      velocity *= 0.6;
    }
  }

  ball.style.marginTop = marginTop + "px";
}

function start() {
  var btn = document.getElementById("start-btn");
  
  if (btn.innerHTML.trim() === 'Start') {
    clearInterval(timer);
    
    marginTop = 360;
    velocity = -55;
    
    timer = setInterval(updateBallPosition, 75);
    
    btn.innerHTML = 'Stop';
  } else {
    clearInterval(timer);
    btn.innerHTML = 'Start';
  }
}
