let first;
let second;
let operator;

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
    if(second == 0){
        return 'Error';
    }
    return first / second;
}

function operate(operator, first, second){
    if(operator=="+"){
        return add(first, second).toFixed(2);
    }
    else if(operator=="-"){
        return subtract(first, second).toFixed(2);
    }
    else if(operator=="*"){
        return multiply(first, second).toFixed(2);
    }
    else if(operator=="/"){
        return divide(first, second).toFixed(2);
    }
}

const display = document.querySelector('.display');

const numberButtons = Array.from(document.querySelectorAll('.number'));

const operatorButtons = document.querySelectorAll('.operator');

const clearButton = document.querySelector('.clear');

const evaluateButton = document.querySelector('.equals');

const signButton = document.querySelector('.sign');

const decimalButton = document.querySelector('.decimal');

const percentButton = document.querySelector('.percent');

clearButton.addEventListener('click', () => {
    display.textContent = '0';
    values = [];
});

numberButtons.forEach(button => button.addEventListener('click', () => {
    if (    display.textContent === '0'
            || display.textContent === '+' 
            || display.textContent === '-' 
            || display.textContent === '*'  
            || display.textContent === '/' 
            || display.textContent === 'NaN'){
            display.textContent = button.textContent;
    }
    else if(   (values[1] === '+'||
                values[1] === '-'||
                values[1] === '*'||
                values[1] === '/') && display.textContent === String(values[0])){
            
                display.textContent = button.textContent;
    }
    else {
        display.textContent += button.textContent;
    }
}));

signButton.addEventListener('click', () => {
    if(display.textContent.charAt(0)=='-'){
        display.textContent = display.textContent.substring(1);
    }
    else if(display.textContent.charAt(0)!='-'){
        display.textContent = '-' + display.textContent;
    }
});

decimalButton.addEventListener('click', () => {
    if(!display.textContent.includes('.')){
        display.textContent += '.'
    }
})

let values = [];

operatorButtons.forEach(button => button.addEventListener('click', () => {
    values.push(display.textContent); // add first operand into values array
        console.log(values); 
        display.textContent = button.textContent;
        values.push(button.value); // then add operator
        console.log(values);
    if (values[values.length-3] === '+' ||
        values[values.length-3] === '-' ||
        values[values.length-3] === '*' ||
        values[values.length-3] === '/' ){
            if(values.length >= 3){

                first = Number(values[0]);
                operator = values[1];
                second = Number(values[2]);

                values.shift();
                values.shift();
                values.shift();

                values.unshift(operate(operator,first,second));
                display.textContent = String(values[0]);
                console.log(values)

            }
    }
}));

evaluateButton.addEventListener('click', () => {
    values.push(display.textContent); // add second operand to array
    console.log(values);
    if(values.length >= 3){
        second = Number(values.pop());
        operator = values.pop();
        first = Number(values.pop());
        values.push(operate(operator,first,second));
        display.textContent = values.pop();
        console.log(values);
    }
}); 

percentButton.addEventListener('click', () => display.textContent *= 0.01);