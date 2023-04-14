let first;
let second;
let operator; //müsste gleich button sein

function add(first, second){
    return first + second;
}
function subtract(first, second){
    return first - second;
}
function multiply(first, second){
    return first * second;
}
function divide(first, second){
    return first / second;
}

function operate(operator, first, second){
    if(operator=="+"){
        add(first, second);
    }
    else if(operator=="-"){
        subtract(first, second);
    }
    else if(operator=="*"){
        multiply(first, second);
    }
    else if(operator=="/"){
        divide(first, second);
    }
}

const display = document.querySelector('.display');

const numberButtons = Array.from(document.querySelectorAll('.number'));

const operatorButtons = document.querySelectorAll('.operator');

const clearButton = document.querySelector('.clear');

const evaluateButton = document.querySelector('.equals');



numberButtons.forEach(button => button.addEventListener('click', () => display.textContent = button.textContent));

operatorButtons.forEach(button => button.addEventListener('click', () => display.textContent = button.textContent));

clearButton.addEventListener('click', () => display.textContent = '0');

evaluateButton.addEventListener('click', () => operate(operator, first, second)); 