# ubitWebUSB

Simply add the ubitwebusb.js to your p5.js project

add this line in setup:
setupuBitSerial()

add these functions in your sketch.js
onReceivedString(string){
// do something with string
}

onReceivedValue(name, value){
// do something with name and value
}

to check if the microBit is connected in your code you can use: 
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
