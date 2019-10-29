var score = 0;
var nice = ["Wow, wow, wow", "Great Job!", "I knew you could do it!", "Genius!", "There's nothing you can't do!",
           "That was a tough one!", "You have to teach me!", "Sorry Heather!", "Fantastic", "You're amazing!"];

function setUp(){
  
  allClear();
  
  var random1 = Math.floor(Math.random()*12);
  var random2 = Math.floor(Math.random()*12);
  var sign = document.getElementById("change").innerHTML;
  var divisionAns = random1 * random2;

  document.getElementById("play").innerHTML = "Next";
  
  if(sign === "division"){

  document.getElementById("top").textContent = divisionAns;
  document.getElementById("bottom").textContent = random1;
    if(random1 === 0){
      setUp();
    }
  
  } else {
  document.getElementById("top").textContent = random1;
  document.getElementById("bottom").textContent = random2;
}
  if(sign === "subtraction" && random1 < random2){
  setUp();
  document.getElementById("top").textContent = random2;
  document.getElementById("bottom").textContent = random1;
  }
  
}

function check(){
  var getSign = document.getElementById("change").innerHTML;
  
   if(getSign === "multiplication"){
    multiply();
  } else if(getSign === "division"){
    divide();
  } else if(getSign === "addition"){
    addition();
  } else if(getSign === "subtraction"){
    subtract();
  }
}

function changeSign(){
  var change = document.getElementById("change").innerHTML;

  if(change === "multiplication"){
        document.getElementById("change").textContent = "division";
        document.getElementById("op").innerHTML = "/";
        setUp();
  } else if(change === "division"){
        document.getElementById("change").textContent = "addition";
        document.getElementById("op").innerHTML = "+";
        setUp();
  } else if(change === "addition"){
        document.getElementById("change").textContent = "subtraction";
        document.getElementById("op").innerHTML = "-";
        setUp();
  } else if(change === "subtraction"){
        document.getElementById("change").textContent = "multiplication";
        document.getElementById("op").innerHTML = "x";
        setUp();
  }
  
}

function multiply(){
  var top = document.getElementById("top").textContent;
  var bottom = document.getElementById("bottom").textContent;
  var userAns = document.getElementById("input").value;
  var correctAns = top * bottom;
  
  if(userAns == correctAns){
    score++;
    document.getElementById("output").textContent = "Correct! Score = " + score;
    document.body.style.backgroundColor = "#8aff8a";
  } else {
    score--;
    document.getElementById("output").textContent = "The correct answer is " + correctAns + " Score = " + score;
    document.body.style.backgroundColor = "#ff765e";
  }
  praise();
}

function divide(){
  var top = document.getElementById("top").textContent;
  var bottom = document.getElementById("bottom").textContent;
  var userAns = document.getElementById("input").value;
  var correctAns = top / bottom;
  
  if(userAns == correctAns){
    score++;
    document.getElementById("output").textContent = "Correct! Score = " + score;
    document.body.style.backgroundColor = "#8aff8a";
  } else {
    score--;
    document.getElementById("output").textContent = "The correct answer is " + correctAns + " Score = " + score;
    document.body.style.backgroundColor = "#ff765e";
  }
  praise();
}

function addition(){
  var top = parseInt(document.getElementById("top").textContent);
  var bottom = parseInt(document.getElementById("bottom").textContent);
  var userAns = document.getElementById("input").value;
  var correctAns = top + bottom;
  
  if(userAns == correctAns){
    score++;
    document.getElementById("output").textContent = "Correct! Score = " + score;
    document.body.style.backgroundColor = "#8aff8a";
  } else {
    score--;
    document.getElementById("output").textContent = "The correct answer is " + correctAns + " Score = " + score;
    document.body.style.backgroundColor = "#ff765e";
  }
  praise();
}

function subtract(){
  var top = document.getElementById("top").textContent;
  var bottom = document.getElementById("bottom").textContent;
  var userAns = document.getElementById("input").value;
  var correctAns = top - bottom;
  
  if(userAns == correctAns){
    score++;
    document.getElementById("output").textContent = "Correct! Score = " + score;
    document.body.style.backgroundColor = "#8aff8a";
  } else {
    score--;
    document.getElementById("output").textContent = "The correct answer is " + correctAns + " Score = " + score;
    document.body.style.backgroundColor = "#ff765e";
  }
  praise();
}

function allClear(){
  document.body.style.backgroundColor = "white";
  document.getElementById("output").textContent = "";
  document.getElementById("input").value = "";
  document.getElementById("input").focus();
  document.getElementById("comment").textContent = "";
}

function praise(){

var random3 = Math.floor(Math.random() * 10);
document.getElementById("comment").textContent = nice[random3];

}