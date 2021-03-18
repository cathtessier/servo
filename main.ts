input.onButtonPressed(Button.A, function () {
    Vd = 254
    Vg = 254
    for (let index = 0; index < 3; index++) {
        pins.analogWritePin(AnalogPin.P1, Vg)
        pins.analogWritePin(AnalogPin.P2, Vd)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 1)
        Vg += 254
        Vd += 254
        basic.pause(100)
    }
    Vd = 1023
    Vg = 1023
})
input.onButtonPressed(Button.AB, function () {
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(80)
    basic.pause(500)
    servos.P0.setAngle(3)
    basic.pause(500)
    servos.P0.stop()
})
let Vg = 0
let Vd = 0
servos.P0.setAngle(3)
basic.pause(1000)
servos.P0.stop()
Vd = 0
Vg = 0
basic.forever(function () {
	
})
