//countdown timer from 90sec
var time = document.querySelector(".timer");
var seconds = 90;

//Questions below
const questions = [
  {
    question: "Which of the following represents a built-in data type for storing key-value pairs?",
    optionA: "array",
    optionB: "string",
    optionC: "number",
    optionD: "object",
    correctOption: "optionD"
  },
  {
    question: "Which of the following is false, regarding function declarations?",
    optionA: "Create named functions",
    optionB: "Parameters are within []",
    optionC: "The body is within {}",
    optionD: "Parameters are optional",
    correctOption: "optionB"
  },
  {
    question: "A loop is used for what purpose?",
    optionA: "To perform different sets of instructions based on some condition",
    optionB: "Used to execute a set of instructions exactly once",
    optionC: "Used to repeat a set of instructions forever",
    optionD: "To repeat a set of instructions until a stopping condition is met.",
    correctOption: "optionD"
  },
  {
    question: "Which option represents a single line comment in JavaScript?",
    optionA: "# this is a single line comment",
    optionB: "/*this is a single line ccomment",
    optionC: "//This is a single line comment",
    optionD: "<!--this is a single line comment-->",
    correctOption: "optionC"
  },
  {
    question: "Which function returns the largest integer?",
    optionA: "Math.random()",
    optionB: "Math.max()",
    optionC: "Number.max()",
    optionD: "Math.floor()",
    correctOption: "optionD"
  },
  {
    question: "Which of the following words does not belong?",
    optionA: "conditional statement",
    optionB: "loop",
    optionC: "iterate",
    optionD: "stopping condition",
    correctOption: "optionA"
  },
  {
    question: "[1, 2, 3, 4] represents a(n):",
    optionA: "string",
    optionB: "function",
    optionC: "array",
    optionD: "list",
    correctOption: "optionC"
  },
  {
    question: "Which number description is FALSE?",
    optionA: "includes variables",
    optionB: "primitive data type",
    optionC: "includes integers",
    optionD: "includes floating point numbers",
    correctOption: "optionA"
  },
  {
    question: "Where should the JavaScript link be located in the HTML file?",
    optionA: "bottom of the head",
    optionB: "bottom of the header",
    optionC: "top of the body",
    optionD: "bottom of the body",
    correctOption: "optionD"
  },
  {
    question: `"You Can't see me" is a popular saying by`,
    optionA: "Eminem",
    optionB: "Bill Gates",
    optionC: "Chris Brown",
    optionD: "John Cena",
    correctOption: "optionD"
  },
  {
    question: "Which of the following symbols represents the word 'AND' for conditional statements?",
    optionA: "==",
    optionB: "===",
    optionC: "&&",
    optionD: "||",
    correctOption: "optionC"
  },
  {
    question: "The three types of methods do not include which of the following?",
    optionA: "Parameter Methods",
    optionB: "String Methods",
    optionC: "Array Methods",
    optionD: "Number Methods",
    correctOption: "optionA"
  },
  {
    question: "Which of the following is NOT a type of scope?",
    optionA: "Global",
    optionB: "Folder",
    optionC: "Code block",
    optionD: "Function",
    correctOption: "optionB"
  },
  {
    question: "What do we call a primitive JavaScript value that represents lack of defined value?",
    optionA: "Null",
    optionB: "Empty",
    optionC: "0",
    optionD: "Undefined",
    correctOption: "optionD"
  },
  {
    question: "A JavaScript object literal is enclosed in _______?",
    optionA: "{}",
    optionB: "[]",
    optionC: "()",
    optionD: "' '",
    correctOption: "optionA"
  },
  {
    question: "Which of the following is FALSE, concerning the logical NOT operator?",
    optionA: "The symbol is !",
    optionB: "It inverts boolean values",
    optionC: "Shows you are excited about coding.",
    optionD: "Inverts the truthiness of non-boolean values",
    correctOption: "optionC"
  },
  {
    question: "Which is true regarding anonymous functions?",
    optionA: "They can be defined using the function keyword",
    optionB: "They have a name property",
    optionC: "They call a function",
    optionD: "They happen randomly",
    correctOption: "optionA"
  },
  {
    question: "Which method removes the last element from an array and returns that element?",
    optionA: ".delete()",
    optionB: ".remove()",
    optionC: ".pop()",
    optionD: ".push()",
    correctOption: "optionC"
  },
  {
    question: "Which of the following represents a method's calling object?",
    optionA: "img",
    optionB: "href",
    optionC: "let",
    optionD: "this",
    correctOption: "optionD"
  },
  {
    question: "Which line of code displays the correct use of the Null data type?",
    optionA: "let weight = null;",
    optionB: "let height = 9;",
    optionC: "let area = 40;",
    optionD: "let volume = 14;",
    correctOption: "optionA"
  },
  {
    question: "Select the correct syntax to call a run() method of JavaScript object program with the argument 'init'.",
    optionA: "program.run",
    optionB: "program.run()",
    optionC: "run('init')",
    optionD: "program.run('init')",
    correctOption: "optionD"
  },
  {
    question: "How would you round 9.99 down to an integer?",
    optionA: "Math.roundDown(9.99);",
    optionB: "Math.floor(9.99);",
    optionC: "Math(9.99.floor);",
    optionD: "floor(9.99);",
    correctOption: "optionB"
  },
  {
    question: "Which of the following cannot be reassigned?",
    optionA: "var",
    optionB: "const",
    optionC: "let",
    optionD: "function",
    correctOption: "optionB"
  },
  {
    question: "Where does a call-back function go?",
    optionA: "Inside of the function",
    optionB: "Inside of the parameters",
    optionC: "Outside of the function",
    optionD: "Inside of a loop",
    correctOption: "optionC"
  },
  {
    question: "Which of the following is NOT a primitive type of data?",
    optionA: "null",
    optionB: "strings",
    optionC: "objects",
    optionD: "boolean",
    correctOption: "optionC"
  }
]

//clears start and shows next btn after clicked
var button = document.getElementById('start');
button.addEventListener('click', () => {
  button.style.display = 'none';
  startTimer();
  const box = document.getElementById('box');
  box.style.display = 'block';
})

function startTimer() {
  var interval = setInterval(function () {
    seconds--;
    time.textContent = seconds;
    if (seconds >= 0) {
      console.log('Questions appear!')
      // nextQuestion()//start questions
    }
    if (seconds === 0) {
      clearInterval(seconds);
      var end = prompt("Time's up!", "Enter your initials HERE");
      var initialsInput = document.getElementById(end); //collect input
      //send inititals and score to champion.html
      // var sendInitials = document.querySelector
      window.open("champion.html"); //MVP page
    }
  }, 1000);
}


let shuffledQuestionsEl = []; //hold shuffled questions
let questionNumberEl = 1; //# questns opened
let scoreEl = 0;
let indexNumberEl = 0; //which question

//shuffling questions
// function handleQuestions() {
//   while (seconds > 0) {
//     const random = questions[Math.floor(Math.random() * questions.length)]
//     if (!shuffledQuestionsEl.includes(random)) {
//       shuffledQuestionsEl.push(random)
//     }
//   }
// }

//move to the next question
function nextQuestion(index) {
  handleQuestions()
  var currentQuestion = shuffledQuestions[index]
  document.getElementById('questionNumber').innerHTML = questionNumberEl
  document.getElementById('totalScore').innerHTML = scoreEl
  document.getElementById("displayQuestion").innerHTML = currentQuestion.question;
  document.getElementById("oneLabel").innerHTML = currentQuestion.optionA;
  document.getElementById("twoLabel").innerHTML = currentQuestion.optionB;
  document.getElementById("threeLabel").innerHTML = currentQuestion.optionC;
  document.getElementById("fourLabel").innerHTML = currentQuestion.optionD;
}

// //check answer function
// function checkForAnswer() {
//   const currentQuestion = shuffledQuestions[indexNumber] //gets current Question
//   const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
//   const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
//   let correctOption = null

//   options.forEach((option) => {
//     if (option.value === currentQuestionAnswer) {
//       correctOption = option.labels[0].id //gathers answer info
//     }
//   })

//   //answer must be chosen
//   if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
//     alert('You must choose an answer!')
//   }

//   //checking if checked button matches answer
//   options.forEach((option) => {
//     if (option.checked === true && option.value === currentQuestionAnswer) {
//       document.getElementById(totalScore)
//       score++ //adding to player's score
//       indexNumber++ //adding 1 to index so has to display next question..
//       setTimeout(() => {
//         questionNumber++
//       }, 1000)
//     }
//     else if (option.checked && option.value !== currentQuestionAnswer) {
//       seconds-- * 10 //takes 10 seconds from time
//       indexNumber++
//       setTimeout(() => {
//         questionNumber++
//       }, 1000)
//     }
//   })
// }

// function handleNextQuestions() { //moves between questions
//   checkForAnswer()
//   setTimeout(() => {
//     if (seconds === 0) { //displays questions until timer runs out
//       nextQuestion(indexNumber)
//     }
//     else {
//       handleEndGame()//ends game and tallies score
//     }
//   }, 1000);
// }

// function handleEndGame() {
//   const totalScore = (score * 10)

//   //send total score to array, sort array, and display score
//   //NEED display initials
// }