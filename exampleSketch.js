/*
 *  - The function "onReceivedValue()" will be called upon receiving a name and value ( serial.writeValue(name, value) ) from uBit
 *  - The function "onReceivedString()" will be called upon receiving a string ( serial.writeLine("hello") ) from uBit
 *  - Send strings to the microbit with uBitWriteLine("hello");
 *  - example microbit code: https://makecode.microbit.org/_XoocK4c1bJXM
*/

let circleX = 0 // variable to store the X coordinate of our circle
let circleY = 0 // variable to store the Y coordinate of our circle
let lastReceivedText = "---" //variable to store incoming strings





function onReceivedValue(receivedName, receivedValue){ //this function will be called every time the microbit sends serial.writeValue(name, value)
  if(receivedName == "x"){
    circleX = receivedValue   
  } else if(receivedName == "y"){
    circleY = receivedValue
  }
}

//the string is always 31 characters long :( . 
function onReceivedString(receivedString){ //this function will be called every time the microbit sends serial.writeLine(text)
  let splitAtHash = receivedString.split("#") //Here we split the string and only use the characters before the "#"  
  console.log(splitAtHash)
  lastReceivedText = splitAtHash[0]
}

function setup() {
  setupuBitSerial();
  createCanvas(400, 400);
  textAlign(CENTER)
}

function draw() {
 background("black")
 
 if(connectedDevice!=null){ // check if a microbit is currently connected / paired
  fill("green");
 } else {
  fill("red");
 }
  
  //draw text
  textSize(50)
  text(lastReceivedText,width/2,350)
  //map the incoming x and y values to coordinates and draw the circle
  circle(map(circleX, -2048, 2048, 0, width), map(circleY, -2048, 2048, 0, height), 100)
}

let clickNumber = 0;
function mouseClicked(){
  uBitWriteLine(clickNumber++); //add 1 to the number and send it
}