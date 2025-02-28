EM_IR.OnPressEvent(function (message) {
    basic.showNumber(message)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
basic.showString("IR DEMO")
radio.setGroup(1)
EM_IR.IrRemote_init(IrPins.P5)
