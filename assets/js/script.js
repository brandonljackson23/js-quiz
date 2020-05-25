// track score and question number
var quiz = function(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionNum = 0;
}
// record the current question number
quiz.prototype.getQuestionNum = function() {
    return this.questions[this.questionNum];
}
// check if user selcted the correct answer
quiz.prototype.guess = function(answer) {
    if (this.getQuestionNum().isCorrectAnswer(answer)) {
        this.score++;
        showCorrect();
    } else {
        showWrong();
    }
    this.questionNum++;
}
// check if end of quiz has been reached
quiz.prototype.isEnded = function() {
    return this.questionNum === this.questions.length;
}
// track user's answers
var question = function(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
// record user's answer
question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
// function for running the quiz
var startQuiz = function() {
    if(quiz.isEnded()) {
        showResults();
    } else {
        // start timer
        var timeleft = 30;
        var countdownTimer = setInterval(function(){
        timeleft--;
        document.getElementById("timer").textContent = timeleft;
            if(timeleft <= 0) {
                clearInterval(countdownTimer);
                showResults()
            };
        },1000);
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionNum().text;
        // show options
        var choices = quiz.getQuestionNum().choices;
        // loop through all questions
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
};
// track which option the user chose
var guess = function(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        startQuiz();
    }
};
// display correct in footer
var showCorrect = function() {
    var element = document.getElementById("correct");
    element.innerHTML = "<font color='green'>Correct!</font>";
}
// display wrong in footer
var showWrong = function() {
    var element = document.getElementById("correct");
    element.innerHTML = "<font color='red'>Wrong!</font>";
}
// display quiz progress in footer
var showProgress = function() {
    var currentQuestionNumber = quiz.questionNum + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
// display quiz results and record intials for high score
var showResults = function() {
    var quizResults = "<h1>All done!</h1>";
    quizResults += "<p id='score'> Your final score is " + quiz.score + ".</p>";
    quizResults += "<div><form id='form'><label> Enter initials: </label><input type='text'id='initials'><a id='store-score' href='./high-scores.html'>Submit</a></form></div>";
    var element = document.getElementById("quiz");
    element.innerHTML = quizResults;
    //store score to local storage
    var submitScore = document.querySelector("#store-score");
    submitScore.addEventListener('click', function(){
        var initials = document.querySelector("#initials");
        var score = document.querySelector("#score");
        var scoreArray = []
        scoreArray.push(initials.value)
        scoreArray.push(quiz.score)
        localStorage.setItem("score", JSON.stringify(scoreArray))
        const data = JSON.parse(localStorage.getItem('initials'))
    });
};
// array of questions and answers
var questions = [
    new question("Commonly used data types do NOT include:", ["A. strings", "B. alerts","C. CSS", "D. numbers"], "B. alerts"),
    new question("The condition in an if/else statement is enclosed with _______.", ["A. quotes", "B. curly brackets", "C. parenthesis", "D. square brackets"], "B. curly brackets"),
    new question("Arrays in JavaScript can be used to store _______.", ["A. numbers and strings", "B. other arrays", "C. booleans", "D. all of the above"], "D. all of the above"),
    new question("String values must be enclosed within _______ when being assigned to variables.", ["A. commas", "B. curly brackets", "C. quotes", "D. parenthesis"], "C. quotes"),
    new question("A very useful tool used during development and debugging for printing content to the debugger is:", ["A. JavaScript", "B. terminal/bash", "C. for loops", "D. console.log"], "D. console.log")
];
// create the quiz
var quiz = new quiz(questions);
// display the home page
startQuiz();