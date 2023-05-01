let Analog_Sensor = 0
basic.forever(function () {
    Analog_Sensor = pins.analogReadPin(AnalogPin.P1)
    if (Analog_Sensor <= 300) {
        basic.showLeds(`
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            . . . . .
            `)
    } else {
        if (Analog_Sensor >= 300 && Analog_Sensor <= 550) {
            basic.showLeds(`
                . # . # .
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                `)
        } else {
            if (Analog_Sensor >= 1000) {
                basic.showLeds(`
                    . # . # .
                    . . . . .
                    . # # # .
                    # . . . #
                    . . . . .
                    `)
            }
        }
    }
})
