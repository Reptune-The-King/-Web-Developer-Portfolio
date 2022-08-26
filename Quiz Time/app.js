

const submit = document.querySelector("#submit");

const susBaka = document.querySelector("#susBaka");
const ok = document.querySelector("#ok");

const thisIsACat = document.querySelector("#thisIsACat");
const thiccBoi = document.querySelector("#thiccBoi");

const pastYear = document.querySelector("#pastYear");
const presentYear = document.querySelector("#presentYear");

let questionsCorrect = 0;

var audio = new Audio('audio_file.mp3');
audio.play();

function play() {
    var audio = new Audio('vine_boom.mp3');
    audio.play();
}

function play2() {
    var audio = new Audio('ding.wav'); 
    audio.play();
}

document.getElementById("submit").onclick = function(){
    var myName = document.getElementById("nameText").value;
    console.log("Hello",myName);
    document.getElementById("nameText").value = myName;
    document.getElementById("nameSubmittedText").innerHTML = myName;
    play();
}

document.getElementById("susBaka").onclick = function(){
    correctAnswer();
    document.getElementById("susBaka").setAttribute("disabled", "disabled");
    document.getElementById("ok").setAttribute("disabled", "disabled");
}

document.getElementById("ok").onclick = function(){
    wrongAnswer();
    document.getElementById("ok").setAttribute("disabled", "disabled");
    document.getElementById("susBaka").setAttribute("disabled", "disabled");
}

document.getElementById("thiccBoi").onclick = function(){
    correctAnswer();   
    document.getElementById("thiccBoi").setAttribute("disabled", "disabled");
    document.getElementById("thisIsACat").setAttribute("disabled", "disabled");
}

document.getElementById("thisIsACat").onclick = function(){
    wrongAnswer();
    document.getElementById("thisIsACat").setAttribute("disabled", "disabled");
    document.getElementById("thiccBoi").setAttribute("disabled", "disabled");
    
}

document.getElementById("pastYear").onclick = function(){
    correctAnswer();
    document.getElementById("pastYear").setAttribute("disabled", "disabled");
    
}

document.getElementById("presentYear").onclick = function(){
    correctAnswer();
    document.getElementById("presentYear").setAttribute("disabled", "disabled");
    
}

function correctAnswer(){
    console.log("Right");
    questionsCorrect += 1;
    document.getElementById("score").innerHTML = questionsCorrect;
    play2();
}

function wrongAnswer(){
    console.log("Wrong");
    play();
}

function myMove() {
    let id = null;
    const elem = document.getElementById("fallingCube");   
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
 
      }
    }
}
