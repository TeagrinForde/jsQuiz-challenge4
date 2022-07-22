//countdown timer from 90sec
var time = document.querySelector(".timer");

var highScoreList = [];
//Questions below
const questions = [
  {
    question: "Which of the following represents a built-in data type for storing key-value pairs?",
    answers: ['a: array', 'b: string', 'c: number', 'd: object'],
    correctOption: "d: object"
  },
  {
    question: "Which function returns the largest integer?",
    answers: ['a: Math.random()','b: Math.max()', 'c: Number.max()', 'd: Math.floor()'],
    correctOption: "d: Math.floor()"
  },
  {
    question: "Which of the following words does not belong?",
    answers: ['a: conditional statement', 'b: loop', 'c: iterate', 'd: stopping condition'],
    correctOption: 'a: conditional statement'
  },
  {
    question: "[1, 2, 3, 4] represents a(n):",
    answers: ["a: string", "b: function", "c: array", "d: list"],
    correctOption: "c: array"
  },
  {
    question: "Which number description is FALSE?",
    answers: ["a: includes variables", "b: primitive data type", "c: includes integers", "d: includes floating point numbers"],
    correctOption: "a: includes variables"
  },
  {
    question: "Where should the JavaScript link be located in the HTML file?",
    answers: ["a: bottom of head", "b: bottom of header", "c: top of body", "d: bottom of body"],
    correctOption: "d: bottom of body"
  },
  {
    question: "Which of the following symbols represents the word 'AND' for conditional statements?",
    answers: ["a: ==", "b: ===", "c: &&", "d: ||"],
    correctOption: "c:&&"
  },
  {
    question: "The three types of methods do not include which of the following?",
    answers: ["a: Parameter Methods", "b: String Methods", "c: Array Methods", "d: Number Methods"],
    correctOption: "a: Parameter Methods"
  },
  {
    question: "Which of the following is NOT a type of scope?",
    answers: ["a: Global", "b: Folder", "c: Code block", "d: Function"],
    correctOption: "b: Folder"
  },
  {
    question: "What do we call a primitive JavaScript value that represents lack of defined value?",
    answers: ["a: Null", "b: Empty", "c: 0", "d: Undefined"],
    correctOption: "d: Undefined"
  },
  {
    question: "A JavaScript object literal is enclosed in _______?",
    answers: ["a: {}", "b: []", "c: ()", "d: ' '"],
    correctOption: "a: {}"
  },
  {
    question: "Which method removes the last element from an array and returns that element?",
    answers: ["a: .delete()", "b: .remove()", "c: .pop()", "d: .push()"],
    correctOption: "c: .pop()"
  },
  {
    question: "Which of the following represents a method's calling object?",
    answers: ["a: img", "b: href", "c: let", "d: this"],
    correctOption: "d: this"
  },
  {
    question: "Which line of code displays the correct use of the Null data type?",
    answers: ["a: let weight = null", "b: let height = 9", "c: let area = 40", "d: let volume = 14"],
    correctOption: "a: let weight = null"
  },
  {
    question: "Select the correct syntax to call a run() method of JavaScript object program with the argument 'init'.",
    answers: ["a: program.run", "b: program.run()", "c: run('init')", "d: program.run('init')"],
    correctOption: "d: program.run('init')"
  },
  {
    question: "Which of the following cannot be reassigned?",
    answers:  ["a: var", "b: const", "c: let", "d: function"],
    correctOption: "b: const"
  },
  {
    question: "Which of the following is NOT a primitive type of data?",
    answers:  ["a: null", "b: strings", "c: objects", "d: boolean"],
    correctOption: "c:objects"
  }
]

var index = 0;
var displayQuestion = document.querySelector('#displayQuestion')
var labelA = document.querySelector('#labelA');
var labelB = document.querySelector('#labelB');
var labelC = document.querySelector('#labelC');
var labelD = document.querySelector('#labelD');
var option = document.querySelectorAll('.option');
var correctAnswer = document.querySelector('#correctness');

function generateQuiz() {
  correctAnswer.textContent = '';
  displayQuestion.textContent = questions[index].question;
  labelA.textContent = questions[index].answers[0];
  labelB.textContent = questions[index].answers[1];
  labelC.textContent = questions[index].answers[2];
  labelD.textContent = questions[index].answers[3];
}

for(var i = 0; i < option.length; i++) {  //makes all buttosn clickable
  option[i].addEventListener('click', nextQuestion)
}

function nextQuestion() {
  var buttonText = this.textContent;
  if(buttonText===questions[index].correctOption) {
    correctAnswer.textContent = 'Correct!'
  } else {
    correctAnswer.textContent = 'Incorrect';
    seconds -= 15;
  }
  index++;
  setTimeout(generateQuiz, 500); //pauses to see correctness, then uses function for next question
}

var seconds = questions.length*15;
//clears start & shows next btn after clicked
var button = document.getElementById('start');
button.addEventListener('click', () => {
  button.style.display = 'none';
  startTimer();
  generateQuiz();
})

function scoreQuiz(initialsInput) { //last part
  highScoreList.push({
    initial: initialsInput,
    score: seconds
  }) 
  localStorage.setItem('highScoreList', JSON.stringify(highScoreList));  
};

function startTimer() {
  var interval = setInterval(function () {
    seconds--;
    time.textContent = seconds;
    if (seconds > 0) {
      console.log('Questions appear!')//start questions
    }
    if (seconds <= 0 || index >= questions.length) { 
      clearInterval(interval);
      var end = prompt("QUIZ HAS ENDED!", "Enter your initials HERE");
      scoreQuiz(end);
      location.replace("champion.html"); //MVP page
    }
  }, 1000);
}

