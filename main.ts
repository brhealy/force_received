radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    serial.writeValue("Force", receivedNumber)
})
radio.setGroup(43)
