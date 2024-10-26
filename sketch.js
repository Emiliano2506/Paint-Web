//variables globales
var color;
var grosor;
/*var canvas;
canvas=document.getElementById("miCanvas");*/

function preload(){
  
}

function setup() {
  canvas = createCanvas(700, 500);
  //canvas.center()
  background('#B8B8B8');
  stroke('#000000');
  strokeWeight(5);
}

function draw() {
  if(mouseIsPressed){
    stroke('#000000');
    color=document.getElementById("muajaja").value
    grosor=document.getElementById("grosor").value
    console.log(color);
    stroke(color);
    strokeWeight(grosor);
    line(pmouseX, pmouseY, mouseX, mouseY);
     }
}
function limpio(){
  background('#B8B8B8');
}

/*function muajaja(){
  var color = document.getElementbyId("muajaja").value
  console.log("byId")
}*/