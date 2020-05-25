var createItemEl = function() {
    var ul = document.querySelector('ul');
    var listItemEl = document.createElement("li");
    listItemEl.textContent = "1. " + scoresArray[0] + " - " + scoresArray[1];
    ul.appendChild(listItemEl);
}

var scoresArray = [];
var initials = localStorage.getItem("score")[2] + localStorage.getItem("score")[3]
scoresArray.push(initials);
var scores = localStorage.getItem("score")[6]
scoresArray.push(scores);

var clearStorage = document.getElementById("btn6")
    clearStorage.onclick = function() {
        localStorage.clear()
        location.reload();
        return false;
}

createItemEl();