var quizTitleEl = document.createElement("h1");
var quizInstructionsEl = document.createElement("h2");
var startBtnEl = document.createElement("button");

quizTitleEl.textContent = "Coding Quiz Challenge";
quizTitleEl;
div1.appendChild(quizTitleEl);

quizInstructionsEl.textContent = "Try to answer the following code-related questions withing the time limit. Keep in mind that incorrect answers will penalize your score and reduce your time by ten seconds.";
quizInstructionsEl;
div2.appendChild(quizInstructionsEl);

startBtnEl.className = "btn";
startBtnEl.id = "start-quiz";
startBtnEl.type = "submit";
startBtnEl.textContent = "Start Quiz";
startBtnEl;
div3.appendChild(startBtnEl);


