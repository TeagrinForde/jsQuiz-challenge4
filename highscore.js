function displayScores () {
    var highScores = document.getElementById('playerInitials');
    for (var i = 0, len = winnerLength(); i < len; i++) {
        var key = localStorage.key(i);
        var value = localStorage[key];
        var item = document.createElement('li');
        item.innerText = `${key}: ${value}`;
        highScores.appendChild(item);
    }
};

function winnerLength() {
  if(localStorage.length <= 10) {
    return localStorage.length
  } else {
    return 10
  }
};