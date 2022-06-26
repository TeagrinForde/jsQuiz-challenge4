//countdown timer from 90sec
var time = document.querySelector(".timer");
var start_time = document.getElementById('num');
var seconds = 5;

function startTimer() {
  var interval = setInterval(function () {
    seconds--;
    time.textContent = seconds;
    if (seconds >= 0) {
      //start questions loop
    }
    if (seconds === 0) {
      clearInterval(seconds);
      var end = prompt("Time's up!", "Enter your initials HERE");
      var input = document.getElementById(end); //collect input
      //send initials to champion.html

      window.open("champion.html"); //MVP page
    }
  }, 1000);
}

//clears button after clicked
var button = document.getElementById('start'); button.addEventListener('click', hideStartQuiz, false)

//function to hide the start button
function hideStartQuiz() {
  document.getElementById('start').style.display = 'block';
  this.style.display = 'none';
}

//function to tally and display score
let questionNumber = 1
let score = 0

//shuffling questions
function shuffleQuestions() {
  while (shuffledQuestions.length) {
    const random = questions[Math.floor(Math.random() * questions.length)]
    if (!shuffledQuestions.includes(random)) {
      shuffledQuestions.push(random)
    }
  }
}

//move to the next question
function nextQuestion(index) {
  shuffleQuestions()
  var currentQuestion = shuffledQuestions[index]
  document.getElementById('questionNumber').innerHTML = questionNumber
  document.getElementById('totalScore').innerHTML = score
  document.getElementById("displayQuestion").innerHTML = currentQuestion.question;
  document.getElementById("oneLabel").innerHTML = currentQuestion.optionA;
  document.getElementById("twoLabel").innerHTML = currentQuestion.optionB;
  document.getElementById("threeLabel").innerHTML = currentQuestion.optionC;
  document.getElementById("fourLabel").innerHTML = currentQuestion.optionD;
}

//check answer function
function checkForAnswer() {
  const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
  const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
  const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
  let correctOption = null

  options.forEach((option) => {
      if (option.value === currentQuestionAnswer) {
          //get's correct's radio input with correct answer
          correctOption = option.labels[0].id
      }
  })

  //checking to make sure a radio input has been checked or an option being chosen
  if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
      document.getElementById('option-modal').style.display = "flex"
  }

  //checking if checked radio button is same as answer
  options.forEach((option) => {
      if (option.checked === true && option.value === currentQuestionAnswer) {
          score++ //adding to player's score
          indexNumber++ //adding 1 to index so has to display next question..
          setTimeout(() => {
              questionNumber++
          }, 1000)
      }

      else if (option.checked && option.value !== currentQuestionAnswer) {
          const wrongLabelId = option.labels[0].id
          seconds-- * 10 //takes 10 seconds from time 
          indexNumber++
          setTimeout(() => {
              questionNumber++
          }, 1000)
      }
  })
}

//Questions below