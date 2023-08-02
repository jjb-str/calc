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
    if (parseInt(display.textContent) > 9999999) return;
    oldText = display.textContent;
    display.textContent = oldText + text;
}

function clearDisplay() {
    display = document.querySelector('.display');
    display.textContent = '';
}

function asignNumber(number) {
    if (numberA === undefined) {
        numberA = number;
    } else if (numberB === undefined) {
        numberB = number
    } else {
        numberB = undefined;
    }
}

let numberA;
let numberB;
let numberC;
let operation;

numbers = document.querySelectorAll('.number');
numbers.forEach((element) => {
    element.addEventListener('click', function (element) {updateDisplay(element.target.textContent);});    
});

operands = document.querySelectorAll('.operand');
operands.forEach((element) => {
    element.addEventListener('click', function (element) {
        switch(element.target.textContent) {
            case '+' : operation = '+'; break;
            case '-' : operation = '-'; break;
            case '*' : operation = '*'; break;
            case '/' : operation = '/'; break;
        };
        
        number = parseInt(document.querySelector('.display').textContent);
        asignNumber(number);
        clearDisplay();
    });
});


clearBtn = document.querySelector('.clr-btn');
clearBtn.addEventListener('click', function () {clearDisplay(); numberA = undefined; numberB = undefined; numberC = undefined; operation = undefined; console.log(numberA, numberB, operation)});

compute = document.querySelector('.compute');
compute.addEventListener('click', function () { 
    if (numberB === undefined) {
        numberB = parseInt(document.querySelector('.display').textContent)
    }
    if (numberC === undefined) {
        numberC = (operate(numberA, numberB, operation));
        console.log(numberA + operation + numberB + '=' + numberC)
    } else {
        numberA = numberC
        numberC = (operate(numberA, numberB, operation));
        console.log(numberA + operation + numberB + '=' + numberC);
    }; 
    document.querySelector('.display').textContent = numberC;
});
