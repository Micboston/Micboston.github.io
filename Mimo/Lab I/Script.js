
var make = 0;
var call = 0;
var keepCool = 0;
var reflect = 0;
var reset = 0;


function set(mode) {
 var bcolor = "";
 var color = "";
 var focus = "";
 var task = "";
 var radius = 100;
 var mouth = "";
 var mouth1Border = "";
 var mouth1Color = "";
 
 if (mode === "make") {
  if (reset < 144) {
   task = "white";
   bcolor = "white";
   color = "crimson";
   focus = "Make it";
   make = make + 1;
   document.getElementById("make")
    .innerHTML = make;
  } else if (reset === 144) {
   focus = "You did it!!!";
   color = "magenta";
   task = "white";
   mouth1Border = "black";
   mouth1Color = "white";
  } else {
   focus = "You passed the point";
   color = "black";
   task = "white";
   
  }
 } else if (mode === "keepCool") {
  if (reset < 144) {
   task = "white";
   bcolor = "darkGray";
   color = "seaGreen";
   focus = "Keep it Cool";
   keepCool = keepCool + 3;
   document.getElementById("keepCool")
    .innerHTML =
    keepCool;
  } else if (reset === 144) {
   focus = "You did it!!!";
   color = "magenta";
   task = "white";
   radius = 100;
   mouth1Border = "black";
   mouth1Color = "white";
  } else {
   focus = "You passed the point";
   color = "black";
   task = "white";
   radius = 0;
  }
 } else if (mode === "reflect") {
  if (reset < 144) {
   task = "white";
   bcolor = "gray";
   color = "steelBlue";
   focus = "Reflect Upon it";
   reflect = reflect + 4;
   document.getElementById("reflect")
    .innerHTML =
    reflect;
  } else if (reset === 144) {
   focus = "You did it!!!";
   task = "white";
   color = "magenta";
   mouth1Border = "black";
   mouth1Color = "white";
   
  } else {
   focus = "You passed the point";
   color = "black";
   task = "white";
   radius = 0;
  }
 } else if (mode === "reset") {
  if (reset < 144) {
   reset = reset + make + call +
    keepCool + reflect;
   document.getElementById("reset")
    .innerHTML = reset;
   document.getElementById("counter")
    .innerHTML = "";
   if (reset < 144) {
    bcolor = "gray";
    focus = "Status Quo";
    color = "pink";
    task = "white";
   } else if (reset === 144) {
    focus = "You did it!!!";
    color = "magenta";
    task = "white";
    mouth = "black";
    mouth1Border = "black";
    mouth1Color = "white";
   } else {
    focus = "You passed the point";
    color = "black";
    task = "white";
    radius = 0;
    
   }
  } else {
   if (reset === 144) {
    focus = "You did it!!!";
    color = "magenta";
    task = "white";
    mouth = "black";
    mouth1Border = "black";
    mouth1Color = "white";
   } else {
    focus = "You passed the point";
    color = "black";
    task = "white";
    radius = 0;
   }
  }
 } else {
  if (reset < 144) {
   task = "white";
   bcolor = "lightGray";
   color = "orange";
   focus = "Call it";
   call = call + 2;
   document.getElementById("call")
    .innerHTML = call;
  } else if (reset === 144) {
   focus = "You did it!!!";
   color = "magenta";
   task = "white";
   mouth1Border = "black";
   mouth1Color = "white";
  } else {
   focus = "You passed the point";
   color = "black";
   task = "white";
   radius = 0;
  }
 }
 console.log(focus);
 var board = document.getElementById(
  "counter");
 var panel = document.createElement(
  "li");
 panel.innerHTML = focus;
 board.appendChild(panel);
 document.getElementById("mouth").style
  .borderRadius = radius;
 document.getElementById("screen").style
  .backgroundColor = color;
 document.getElementById("task")
  .innerHTML = focus;
 document.getElementById("task").style
  .color = task;
 document.getElementById("task").style
  .color = task;
 document.getElementById("button").style
  .backgroundColor = bcolor;
 document.getElementById("mouth1").style
  .borderColor = mouth1Border;
 document.getElementById("mouth1").style
  .backgroundColor = mouth1Color;
 
 if (reset === 144) {
  focus = "You did it";
 } else {
  
 }
 
}

function myFunction() {
 location.replace(
  "https://ecmbqa.mimo.run/index.html")
}

function theCoder() {
 location.replace(
  "https://uvz2dx.mimo.run/index.html");
}


