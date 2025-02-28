EM_IR.OnPressEvent(function (message) {
    basic.showNumber(message)
    if (message == 69) {
        basic.showString("A")
    } else if (message == 70) {
        // 当接收到物理值为70的时，即代表按下B
        basic.showString("B")
    } else if (message == 71) {
        // 当接收到物理值为71的时，即代表按下C
        basic.showString("C")
    } else if (message == 68) {
        // 当接收到物理值为68的时，即代表按下D
        basic.showString("D")
    } else if (message == 64) {
        // 当接收到物理值为64的时，即代表按下UP
        basic.showString("UP")
    } else if (message == 67) {
        // 当接收到物理值为67的时，即代表按下+
        basic.showString("+")
    } else if (message == 7) {
        // 当接收到物理值为7的时，即代表按下LEFT
        basic.showString("LEFT")
    } else if (message == 21) {
        // 当接收到物理值为21的时，即代表按下OK
        basic.showString("OK")
    } else if (message == 9) {
        // 当接收到物理值为9的时，即代表按下RIGHT
        basic.showString("RIGHT")
    } else if (message == 22) {
        // 当接收到物理值为22的时，即代表按下0
        basic.showString("0")
    } else if (message == 25) {
        // 当接收到物理值为25的时，即代表按下DOWN
        basic.showString("DOWN")
    } else if (message == 13) {
        // 当接收到物理值为13的时，即代表按下-
        basic.showString("-")
    } else if (message == 12) {
        // 当接收到物理值为12的时，即代表按下1
        basic.showString("1")
    } else if (message == 24) {
        // 当接收到物理值为24的时，即代表按下2
        basic.showString("2")
    } else if (message == 94) {
        // 当接收到物理值为94的时，即代表按下3
        basic.showString("3")
    } else if (message == 8) {
        // 当接收到物理值为8的时，即代表按下4
        basic.showString("4")
    } else if (message == 28) {
        // 当接收到物理值为28的时，即代表按下5
        basic.showString("5")
    } else if (message == 90) {
        // 当接收到物理值为90的时，即代表按下6
        basic.showString("6")
    } else if (message == 66) {
        // 当接收到物理值为66的时，即代表按下7
        basic.showString("7")
    } else if (message == 82) {
        // 当接收到物理值为82的时，即代表按下8
        basic.showString("8")
    } else if (message == 74) {
        // 当接收到物理值为74的时，即代表按下9
        basic.showString("9")
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
basic.showString("IR DEMO")
EM_IR.IrRemote_init(IrPins.P5)
radio.setGroup(1)
