
var counter = 0;
var score = 0;
var home = document.getElementById("home");
var answer101 = document.getElementById("answer101");
var answer102 = document.getElementById("answer102");
var answer103 = document.getElementById("answer103");
var answer104 = document.getElementById("answer104");
var answer105 = document.getElementById("answer105");
var answer106 = document.getElementById("answer106");
var answer107 = document.getElementById("answer107");
var answer108 = document.getElementById("answer108");
var answer109 = document.getElementById("answer109");
var answer1010 = document.getElementById("answer1010");
var answer1011 = document.getElementById("answer1011");
var answer1012 = document.getElementById("answer1012");
var answer1013 = document.getElementById("answer1013");
var answer1014 = document.getElementById("answer1014");
var answer1015 = document.getElementById("answer1015");
var answer1016 = document.getElementById("answer1016");
var answer1017 = document.getElementById("answer1017");
var answer1018 = document.getElementById("answer1018");
var answer1019 = document.getElementById("answer1019");
var answer1020 = document.getElementById("answer1020");



var question0 = document.getElementById("question0");
var question1 = document.getElementById("question1");
var question2 = document.getElementById("question2");
var question3 = document.getElementById("question3");







var result = document.getElementById("result");


var questions = [question0, question1, question2, question3]





var next_question = function() {

  questions[counter].style.display = "block";
  
 
}


var clear_question_result = function() {
  questions[counter].style.display = "none";
  
}


var process_answer_submission1 = function() {
   
   score+=4;
   next_submit();
   // answer101.checked=false;
   
 }
 
 var process_answer_submission2 = function() {
    
    score+=4;
    next_submit();
    // answer101.checked=false;
   
  }
 
 

    
    
 
   




var game_over = function() {
  if (counter < 4) {
    return false;  
  } else {
    return true;
  }
}

var next_submit = function() {
  clear_question_result();
  counter = counter + 1;
  
  if (game_over() === true) {
    final_total();
  } 
  else {
    
    next_question();
  }
}

answer101.onclick = process_answer_submission1;
answer102.onclick = next_submit;
answer103.onclick = next_submit;
answer104.onclick = next_submit;
answer105.onclick = process_answer_submission2;
answer106.onclick = next_submit;
answer107.onclick = next_submit;
answer108.onclick = next_submit;
answer109.onclick = next_submit;
answer1010.onclick = next_submit;
answer1011.onclick = next_submit;
answer1012.onclick = next_submit;
answer1013.onclick = next_submit;
answer1014.onclick = next_submit;
answer1015.onclick = next_submit;
answer1016.onclick = next_submit;
answer1017.onclick = next_submit;
answer1018.onclick = next_submit;
answer1019.onclick = next_submit;
answer1020.onclick = next_submit;


// when next button click start next_submit // stores function process. doesn't run function now.

var final_total = function() {
  
  

  result.innerHTML = "You're a bad" + score ;
   }


