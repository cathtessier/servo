input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P1, Vd)
    pins.digitalWritePin(DigitalPin.P2, Vg)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
})
input.onButtonPressed(Button.AB, function () {
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(100)
    basic.pause(500)
    servos.P0.setAngle(19)
})
let Vg = 0
let Vd = 0
servos.P0.setAngle(19)
Vd = 1023
Vg = 1023
basic.forever(function () {
	
})
