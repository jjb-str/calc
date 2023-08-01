function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function operate (a, b, operand) {
    switch (operand) {
        case '+' : return add(a, b);
        case '-' : return subtract(a,b);
        case '*' : return multiply(a,b);
        case '/' : return divide(a, b);
    }
}

function updateDisplay(text) {
    display = document.querySelector('.display');
    if (parseInt(display.textContent) > 99999999) return;
    oldText = display.textContent;
    display.textContent = oldText + text;
}

function clearDisplay() {
    display = document.querySelector('.display');
    display.textContent = ''
}

let numberA;
let numberB;
let operarion;

numbers = document.querySelectorAll('.number');
numbers.forEach((element) => {
    element.addEventListener('click', function (element) {updateDisplay(element.target.textContent)})    
});

clearBtn = document.querySelector('.clr-btn')
clearBtn.addEventListener('click', function () {clearDisplay()})

compute = document.querySelector('.compute');
compute.addEventListener('click', function () {operate(numberA, numberB, operation)})