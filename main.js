let buttons = document.querySelectorAll('.btn');
let displayNumber = document.querySelector('#showNumber');
let btnClear = document.querySelector('#btnClear');
let query = '';
let firstInput = '';
let secondInput = '';
let operator = '';
let operators = ['+', '-', '/', '*'];

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        getNumber(e);
    })
});
btnClear.addEventListener('click', clear);

function clear() {
    query = '';
    firstInput = '';
    secondInput = '';
    operator = '';
    displayNumber.textContent = '0';
}

function getNumber(e) {
    let value = e.target.textContent;
    if (!isNaN(value)) {
        if (query === '0') {
            query = '';
        }
        query += value;
        displayNumber.textContent = `${query}`;
    } else if (operators.includes(value)) {
        if (query === '') return;
        if (operator.length > 0) {
            operator += '';
        }
        firstInput = query;
        operator = value;
        query = '';
        displayNumber.textContent = `${operator}`;
    } else if (value === '=') {
        secondInput = query;
        let result = operate(firstInput, secondInput, operator);
        displayNumber.textContent = `${result}`;
        query = `${result}`;
        operator = '';
    }
}

function operate(num1, num2, op) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (op) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return (num2 === 0) ? '0' : divide(num1, num2);
        default:
            return '0';
    }
}

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};