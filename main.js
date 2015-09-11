
var counter = 0;
var score = 0;
var home = document.getElementById("home");
var answer101 = document.getElementById("answer101");
var answer102 = document.getElementById("answer102");
var answer103 = document.getElementById("answer103");
var answer104 = document.getElementById("answer104");
var question0 = document.getElementById("question0");
var question1 = document.getElementById("question1");
var question2 = document.getElementById("question2");
var question3 = document.getElementById("question3");
var question4 = document.getElementById("question5");





var result = document.getElementById("result");


var questions = [question0, question1, question2, question3, question4, question5]





var next_question = function() {

  questions[counter].style.display = "block";
 
}


var clear_question_result = function() {
  questions[counter].style.display = "none";
  
}


var process_answer_submission = function() {
 if (answer101.checked==true){
   score+=5;
   next_submit();
 } else if (answer102.checked==true){
   score+=3;
   next_submit();
 } else if (answer103.checked==true){
    score+=2;
    next_submit();
  } else if (answer104.checked==true){
      score+=1;
      next_submit();
    }
}



var game_over = function() {
  if (counter < 6) {
    return false;  
  } else {
    return true;
  }
}

var next_submit = function() {
 
  clear_question_result();
  counter++;
  if (game_over() === true) {
    final_total();
  } else {
    next_question();
  }
}

home.onclick = process_answer_submission; // when next button click start next_submit // stores function process. doesn't run function now.

var final_total = function() {

  if (score > 28) {
    result.innerHTML = "You're a die hard fan";
  } else if (score < 28 && score > 10) {
    result.innerHTML = "You're a mediocure";
  } else if (score < 10 ) {
        result.innerHTML = "You're a bad";
    }
    
    }



