startPage = function() {
    // declare variables
    var quizTitleEl = document.createElement("h1");
    var quizInstructionsEl = document.createElement("h2");
    var startBtnEl = document.createElement("button");
    // create page content
    quizTitleEl.textContent = "Coding Quiz Challenge";
    quizInstructionsEl.textContent = "Try to answer the following code-related questions withing the time limit. Keep in mind that incorrect answers will penalize your score and reduce your time by ten seconds.";
    startBtnEl.className = "btn";
    startBtnEl.id = "startQuiz";
    startBtnEl.type = "submit";
    startBtnEl.textContent = "Start Quiz";
    // append content to page
    div1.appendChild(quizTitleEl);
    div2.appendChild(quizInstructionsEl);
    div3.appendChild(startBtnEl);
    // add event listener to button
    var startQuizEl = document.querySelector("#startQuiz");
    startQuizEl.addEventListener("click", q1Page);
};
q1Page = function() {
    // declare variables
    var quizTitleEl = document.querySelector("h1");
    var quizInstructionsEl = document.querySelector("h2");
    var startBtnEl = document.querySelector("button");
    var qEl = document.createElement("h1");
    var liEl = document.querySelector("li");
    var a1El = document.createElement("li");
    var a2El = document.createElement("li");
    var a3El = document.createElement("li");
    var a4El = document.createElement("li");
    // remove previous content
    quizTitleEl.parentElement.removeChild(quizTitleEl);
    quizInstructionsEl.parentElement.removeChild(quizInstructionsEl);
    startBtnEl.parentElement.removeChild(startBtnEl);
    // create page content
    qEl.textContent = "What is your name?";
    // answer option a
    a1El.className = "btn";
    a1El.id = "a";
    a1El.type ="submit";
    a1El.textContent = "Matt";
    // answer option b
    a2El.className = "btn";
    a2El.id = "b";
    a2El.type ="submit";
    a2El.textContent = "Mark";
    // answer option c
    a3El.className = "btn";
    a3El.id = "c";
    a3El.type ="submit";
    a3El.textContent = "Luke";
    // answer option d
    a4El.className = "btn";
    a4El.id = "d";
    a4El.type ="submit";
    a4El.textContent = "John";
    // append content to page
    div1.appendChild(qEl);
    liEl.appendChild(a1El);
    liEl.appendChild(a2El);
    liEl.appendChild(a3El);
    liEl.appendChild(a4El);
    // event listeners for answers
    var aBtn1El = document.querySelector("#a");
    aBtn1El.addEventListener("click", q2Page);
};
q2Page = function() {
    var qEl = document.querySelector("h1");
    var a1El = document.querySelector("li");
    var a2El = document.querySelector("li");
    var a3El = document.querySelector("li");
    var a4El = document.querySelector("li");
    qEl.textContent = "How old are you?";
    a1El.textContent = "< 20";
    a2El.textContent = "21-40";
    a3El.textContent = "41-60";
    a4El.textContent = "> 60";
};
startPage();