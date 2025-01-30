function kjørBane () {
    bitbot.goms(BBDirection.Forward, 40, Avstand1 * Drivingspeedper1m)
    bitbot.stop(BBStopMode.Coast)
    bitbot.rotatems(BBRobotDirection.Right, 40, Turningspeed360 * (Vinkel1 / 360))
    bitbot.stop(BBStopMode.Coast)
    bitbot.goms(BBDirection.Forward, 40, Avstand2 * Drivingspeedper1m)
    bitbot.stop(BBStopMode.Coast)
    bitbot.rotatems(BBRobotDirection.Right, 40, Turningspeed360 * (Vinkel2 / 360))
    bitbot.stop(BBStopMode.Coast)
    bitbot.goms(BBDirection.Forward, 40, Avstand3 * Drivingspeedper1m)
    bitbot.stop(BBStopMode.Coast)
    bitbot.rotatems(BBRobotDirection.Left, 40, Turningspeed360 * (Vinkel2 / 360))
    bitbot.stop(BBStopMode.Coast)
    bitbot.goms(BBDirection.Forward, 40, Avstand3 * Drivingspeedper1m)
    bitbot.stop(BBStopMode.Coast)
    bitbot.rotatems(BBRobotDirection.Right, 40, Turningspeed360 * (Vinkel1 / 360))
    bitbot.stop(BBStopMode.Coast)
    bitbot.goms(BBDirection.Forward, 40, Avstand3 * Drivingspeedper1m)
}
input.onButtonPressed(Button.A, function () {
    basic.pause(1000)
    kjørBane()
    bitbot.goms(BBDirection.Forward, 40, Avstand1 * Drivingspeedper1m)
    kjørBane()
})
input.onButtonPressed(Button.B, function () {
    basic.pause(1000)
    bitbot.goms(BBDirection.Forward, 40, Meteren * Drivingspeedper1m)
    bitbot.stop(BBStopMode.Coast)
    bitbot.rotatems(BBRobotDirection.Left, 40, Turningspeed360 * (Vinkel1 / 360))
})
let Vinkel2 = 0
let Vinkel1 = 0
let Meteren = 0
let Avstand3 = 0
let Avstand2 = 0
let Avstand1 = 0
let Turningspeed360 = 0
let Drivingspeedper1m = 0
Drivingspeedper1m = 3600
Turningspeed360 = 1350
bitbot.select_model(BBModel.XL)
bitbot.BBBias(BBRobotDirection.Right, 13)
Avstand1 = 0.6
Avstand2 = 0.5
Avstand3 = 0.25
let Avstand4 = 0.2
Meteren = 1
Vinkel1 = 90
Vinkel2 = 45
