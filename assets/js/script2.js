var showHome = function() {
    var quizStart = "<h1>JavaScript Quiz Challenge</h1>";
    quizStart += "<p>Try to answer the following code-related questions within the time limit.  Keep in mind that incorrect answers will penalize your score and subtract 10 seconds from your remaining time.</p>";
    quizStart += "<div><a href='./index.html'><button id='btn5' type='button'>Start Quiz</button></a></div>";
    var element = document.getElementById("quiz");
    element.innerHTML = quizStart;
};

showHome();