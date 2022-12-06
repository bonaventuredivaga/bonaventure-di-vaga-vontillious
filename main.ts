input.onGesture(Gesture.Shake, function () {
    number = randint(0, 2)
    basic.showNumber(number)
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
            # # # # #
            # # # # .
            # # # # #
            . # # # #
            # # # # #
            `)
    } else if (number == 2) {
        basic.showLeds(`
            . . . # .
            . . # . #
            . # . # .
            # # # . .
            # # . . .
            `)
    }
})
let number = 0
number = 0
basic.showNumber(number)
basic.forever(function () {
	
})
