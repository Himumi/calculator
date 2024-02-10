let firstNumber = [];
let lastNumber = [];
let operator = undefined;

const displayDiv = document.createElement("div");
const containerDisplay = document.querySelector(".display");
containerDisplay.append(displayDiv);
displayDiv.textContent = "0";

const getOperator = document.querySelectorAll(".btn-operator");
getOperator.forEach((btn) => {
    btn.addEventListener("click", () => {
        const joinedNum1 = +firstNumber.join("");
        const joinedNum2 = +lastNumber.join("");
        let result = operation(joinedNum1, joinedNum2, operator);
        if (operator !== undefined && lastNumber[0] !== undefined) {
            if (joinedNum2 === 0 && operator === "division") {
                preventInfinity();
            }else {
                setAllValueToZero();
                firstNumber.push(result);
                operator = btn.value;
           }
        }else {
            operator = btn.value;
        }
        callDisplay();
    });
});

const getNumber = document.querySelectorAll(".number");
getNumber.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (operator !== undefined) {
            lastNumber.push(btn.value);
        }else {
            if (typeof firstNumber[0] === "number") {
                firstNumber.length = 0;
                firstNumber.push(btn.value);
            }else{
                firstNumber.push(btn.value);
            }
        }
        callDisplay();
    });
});

const removeByOne = document.querySelector(".clear");
removeByOne.addEventListener("click", () => {
    if (lastNumber[0] === undefined) {
        operator == undefined ? firstNumber.pop() : operator = undefined;
    }else{
        lastNumber.pop();
    }
    callDisplay();
});

const removeAll = document.querySelector(".allclear");
removeAll.addEventListener("click",()  => {
    setAllValueToZero();
    callDisplay();
});
                   
const getResult = document.querySelector(".equal");
getResult.addEventListener("click", () => {
    const joinedNum1 = +firstNumber.join("");
    const joinedNum2 = +lastNumber.join("");
    let result = operation(joinedNum1, joinedNum2, operator);    
    if (firstNumber[0] === undefined || lastNumber[0] === undefined) {
        setAllValueToZero();
    }else if (joinedNum2 === 0 && operator === "division") {
        preventInfinity();
    }else {
        if (Number.isInteger(result) === false) { result = +result.toFixed(2); }
            setAllValueToZero();
            firstNumber.push(result);
    }
    callDisplay();
});

function callDisplay() {
    if (operator !== undefined) {
        displayDiv.textContent = firstNumber.join("") 
            + " " + checkOperator(operator) 
            + " " + lastNumber.join("");
    } else { 
        firstNumber.length === 0 
            ? displayDiv.textContent = "0" 
            : displayDiv.textContent = firstNumber.join("");
    }
}

function preventInfinity(){
    alert("Please don't divide number by 0. Cause it will get infinity number.");
    setAllValueToZero();
}

function setAllValueToZero(){
    firstNumber.length = 0;
    lastNumber.length = 0;
    operator = undefined; 
}

function checkOperator(value){
    const operators = {
        addition : "+",
        subtraction : "-",
        multiplication : "*",
        division : "/",
        exponent : "^",
    }; 
    return operators[value];
}

function operation(a, b, operatorVal){
    const operators = {
        addition : a + b,
        subtraction : a - b,
        multiplication : a * b,
        division : a / b,
        exponent : a ** b,
    }; 
    return operators[operatorVal];
}