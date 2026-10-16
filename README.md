# ubitWebUSB

adapted from Bill Sievers amazing project: https://github.com/bsiever/microbit-webusb

Add ubitwebusb.js AND dap.umd.js to your p5.js project root directory.

Both are needed: dap.umd.js is the DAPjs library that does the talking to the
micro:bit, and ubitwebusb.js expects it to be loaded already. So put both lines
in your index.html, in this order:

    <script src="dap.umd.js"></script>
    <script src="ubitwebusb.js"></script>


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


occasionally youll get the error "bad response 8 -> 17" when connecting. Just unplug and reconnect the microbit and try again. 
