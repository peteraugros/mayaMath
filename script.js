var topNum;
var bottomNum;
var score = 0;

var praise = ["Great job, I love you!", "You're my watermelon little girl!", "Wow, I knew you could do it!", 
"You're impressive!", "If you get any better at this you will have to teach me!", "You're smart!", 
"Yay! You did it!", "Genius!", "Impressive!", "Wow, wow, wow!"];




function setUp(){
    document.body.style.backgroundColor = "#FFB6C1";
    //clearing all fields
    document.getElementById("top").textContent = "";
    document.getElementById("bottom").textContent = "";
    document.getElementById("praise").textContent = "";
    document.getElementById("output").textContent = "";
    document.getElementById("input").value = "";
    document.getElementById("input").focus();
    document.getElementById("play").textContent = "Next";


    var random = Math.floor(Math.random() * 9);
    var random2 = Math.floor(Math.random() * 9);
    topNum = random;
    bottomNum = random2;

    document.getElementById("top").textContent = random;
    document.getElementById("bottom").textContent = random2;

//end setUp function
}

function praiseFunc(){
    var random3 = Math.floor(Math.random() * 10);
    document.getElementById("praise").textContent = praise[random3];

//end praise function
}

function checkAnswer(){
var answer = document.getElementById("input").value;
var correctAnswer = topNum * bottomNum;

parseInt(answer);
if(answer == correctAnswer){
    score++;
    document.getElementById("score").textContent = score;
    document.getElementById("output").textContent = "Correct!";
    praiseFunc();

} else {
    score--;
    document.getElementById("score").textContent = score;
    document.body.style.backgroundColor = "red";
    document.getElementById("output").textContent = "The correct answer is " + correctAnswer;
}

//end checkAnswer function
}

