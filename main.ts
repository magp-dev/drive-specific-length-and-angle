input.onButtonPressed(Button.A, function () {
    basic.pause(1000)
    bitbot.goms(BBDirection.Forward, 60, Avstand1 * Drivingspeedper1m)
    bitbot.rotatems(BBRobotDirection.Left, 60, Turningspeed360 * (Vinkel1 / 360))
    bitbot.goms(BBDirection.Forward, 60, Avstand2 * Drivingspeedper1m)
})
let Vinkel1 = 0
let Avstand2 = 0
let Avstand1 = 0
let Turningspeed360 = 0
let Drivingspeedper1m = 0
Drivingspeedper1m = 3600
Turningspeed360 = 1600
bitbot.select_model(BBModel.XL)
bitbot.BBBias(BBRobotDirection.Left, 18)
Avstand1 = 2
Avstand2 = 1
Vinkel1 = 90
