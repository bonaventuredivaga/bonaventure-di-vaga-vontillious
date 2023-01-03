input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    number = randint(0, 2)
    if (number == 0) {
        basic.showLeds(`
            . . . . .
            . # # . .
            # # # # .
            # # # # .
            . # # . .
            `)
    } else if (number == 1) {
        basic.showLeds(`
            . . # # #
            . # # # #
            # # # # #
            # # # # .
            # # # . .
            `)
    } else if (number == 2) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . . # . .
            . # . # .
            `)
    }
    basic.pause(2000)
    basic.clearScreen()
})
let number = 0
number = 0
basic.forever(function () {
	
})
