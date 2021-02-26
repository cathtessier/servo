input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(100)
    basic.pause(500)
    servos.P0.setAngle(19)
})
servos.P0.setAngle(19)
basic.forever(function () {
	
})
