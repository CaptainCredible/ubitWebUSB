# ubitWebUSB

adapted from Bill Sievers amazing project: https://github.com/bsiever/microbit-webusb

Add the ubitwebusb.js and the to your p5.js project root directory
don't forget to include the line <script src="ubitwebusb.js"></script> in your index.html so the browser actually reads the file ubitwebusb.js
add this line in setup:
setupuBitSerial()


now to send data from p5js to microbit use:
uBitWriteLine("whatever you want to send");
or
uBitWriteLine(58);


add these functions in your sketch.js

// to receive a string
onReceivedString(string){
// do something with string
}

//to receive a name + value
onReceivedValue(name, value){
// do something with name and value
}
 
to check if the microBit is connected
if(connectedDevice != null){
//do something
}


when coding your microbit:

send a string:
serial.writeLine("hello") 
(the string will always have 31 characters that are filled out with spaces)

send a value
serial.writeValue("name", value)
the name is a string and the value is a number

if you want to reposition the connect button, do this:
connectButton.position(x,y)

example microbit code to use with the example sketch: https://makecode.microbit.org/_XoocK4c1bJXM
