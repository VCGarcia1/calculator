function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1-num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1/num2
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+': return add(num1, num2)
        case '-': return subtract(num1, num2)
        case '*': return multiply(num1, num2)
        case '/': return divide(num1, num2)
    }

}

let total = 0
secondNum = undefined
const calculator = document.querySelector('#container')
const numberButtons = calculator.querySelectorAll('.button-number')
const operatorButtons = calculator.querySelectorAll('.button-operator'

)
let totalDisplay = calculator.querySelector('.total')


numberButtons.forEach(function(numberButton) {
    numberButton.addEventListener('click', function(e){
        totalDisplay.innerText+=this.innerText
    })
})



