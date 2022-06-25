//countdown timer from 90sec
var time = document.querySelector(".timer")
var start_time = document.getElementById('num');
var seconds = 5;


function startTimer() {
    var interval = setInterval(function() {
    seconds--;
    time.textContent = seconds;
    if (seconds >= 0) {
      //start questions loop
    }
    if (seconds === 0) {
        clearInterval(interval);
        prompt("Time's up!", "Enter your initials HERE");
        //take to champion page      
    }
  }, 1000);
}

