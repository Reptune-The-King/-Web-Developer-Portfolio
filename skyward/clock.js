const inn = document.querySelector("#in");
const lunch = document.querySelector("#lunch");
const out = document.querySelector("#out");

document.getElementById("In").onclick = function(){
    document.getElementById("inOrOutLabel").innerHTML = "In";
    console.log("In");
}

document.getElementById("Lunch").onclick = function(){
    document.getElementById("inOrOutLabel").innerHTML = "Lunch";
    console.log("Lunch");
}

document.getElementById("Out").onclick = function(){
    document.getElementById("inOrOutLabel").innerHTML = "Out";
    console.log("Out");
}