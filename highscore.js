function displayScores () {
    var highScores = document.getElementById('playerInitials');
    for (var i = 0, len = winnerLength(); i < len; i++) {
        var item = document.createElement('li');
        item.innerText = `${highScoreList[i].initial} - ${highScoreList[i].score}`;
        highScores.appendChild(item);
    }
};

function winnerLength() {
  
  highScoreList = JSON.parse(localStorage.getItem('highScoreList'));
  if(highScoreList.length <= 10) {
    return highScoreList.length
  } else {
    return 10
  }
};