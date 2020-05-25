var showHighScores = function() {
  var highScores = localStorage.getItem("score");

  if(!highScores) {
      return false;
  }
  highScores = JSON.parse(highScores);
  for (var i = 0; i < highScores.length; i++) {
      createHighScoreEl(highScores[i]);
  }
};

var createHighScoreEl = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "high-score";
    var scoreInfoEl = document.createElement("div");
    scoreInfoEl.innerHTML = "<h3>" + localStorage('score' [0]) + " - " + localStorage('score' [1]);
    listItemEl.appendChild(ul);
}

const ul = document.querySelector('ul')
var clearStorage = document.querySelector("btn6");
clearStorage.addEventListener('click', function() {
    localStorage.clear()
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild)
    }
})

showHighScores;