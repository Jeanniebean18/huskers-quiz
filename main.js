
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
    
    score+=3;
    next_submit();
    // answer101.checked=false;
   
  }
  var process_answer_submission3 = function() {
    
     score+=2;
     next_submit();
     // answer101.checked=false;
   
   }
   var process_answer_submission4 = function() {
    
      score+=1;
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
answer102.onclick = process_answer_submission2;
answer103.onclick = process_answer_submission3;
answer104.onclick = process_answer_submission4;
answer105.onclick = process_answer_submission1;
answer106.onclick = process_answer_submission2;
answer107.onclick = process_answer_submission3;
answer108.onclick = process_answer_submission4;
answer109.onclick = process_answer_submission1;
answer1010.onclick = process_answer_submission2;
answer1011.onclick = process_answer_submission3;
answer1012.onclick = process_answer_submission4;
answer1013.onclick = process_answer_submission1;
answer1014.onclick = process_answer_submission2;
answer1015.onclick = process_answer_submission3;
answer1016.onclick = process_answer_submission4;
answer1017.onclick = process_answer_submission1;
answer1018.onclick = process_answer_submission2;
answer1019.onclick = process_answer_submission3;
answer1020.onclick = process_answer_submission4;


// when next button click start next_submit // stores function process. doesn't run function now.

var final_total = function() {
  
  

  result.innerHTML = "You're a bad" + score ;
   }


