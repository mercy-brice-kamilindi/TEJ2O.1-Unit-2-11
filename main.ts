/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by:Mercy
 * Created on:Oct 2025
 * This program compars two numbers
*/

// variable
let numberOne: number = 0
let numberTwo: number = 0

// clean
basic.clearScreen()
basic.showIcon(IconNames.Happy)
numberOne = randint(0,99)
numberTwo = randint(0, 99)

// show numberOne
input.onButtonPressed(Button.A, function() {
    basic.clearScreen()
    basic.showString('#1')
    basic.showNumber(numberOne)
    basic.clearScreen()
})

// show numberTwo
input.onButtonPressed(Button.B, function() {
    
    basic.clearScreen()
    basic.showString('#2')
    basic.showNumber(numberTwo)
    basic.clearScreen()
})

// compare number
input.onGesture(Gesture.Shake, function() {
    basic.clearScreen()
    if (numberOne > numberTwo){
        basic.showNumber(numberOne)
        basic.showString(">")
        basic.clearScreen()
        basic.showNumber(numberTwo)
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showNumber(numberOne)
        basic.showString("<")
        basic.clearScreen()
        basic.showNumber(numberTwo)
        basic.showIcon(IconNames.Happy)
    }

})
