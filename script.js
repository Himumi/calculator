let firstNumber = [];
let lastNumber = [];
let operator = undefined;

const getOperator = document.querySelectorAll(".btn-operator");
getOperator.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (operator !== undefined) {
            const joinedNum1 = +firstNumber.join("");
            const joinedNum2 = +lastNumber.join("");
            let result = operation(joinedNum1, joinedNum2, operator);
            firstNumber.length = 0;
            lastNumber.length = 0;
            firstNumber.push(result);
        }
        operator = btn.value;

        display();
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

        display();
    });
});

const removeByOne = document.querySelector(".clear");
removeByOne.addEventListener("click", () => {
    if (lastNumber[0] === undefined) {
        if (operator === undefined) {
            firstNumber.pop();
        }else {
            operator = undefined;
        }
    }else{
        lastNumber.pop();
    }
    display();
});

const removeAll = document.querySelector(".allclear");
removeAll.addEventListener("click",()  => {
    firstNumber.length = 0;
    lastNumber.length = 0;

    // firstNumber.splice(0,firstNumber.length);
    // lastNumber.splice(0,lastNumber.length);
    operator = undefined;

    display();
});

function checkOperation(value){
    switch (value) {
        case "addition":
            return "+";
            break;
        case "subtraction":
            return "-";
        break;
        case "multiplication":
            return "*";
        break;
        case "division":
            return "/";
            break;
        case "exponent":
            return "^";
            break;
        }
}

function operation(a, b, operatorVal){
    switch (operatorVal) {
        case "addition":
            return a + b;
            break;
        case "subtraction":
            return a - b;
        break;
        case "multiplication":
            return a * b;
        break;
        case "division":
            return a / b;
            break;
        case "exponent":
            return a ** b;
            break;
        }
}
                    
const getResult = document.querySelector(".equal");
getResult.addEventListener("click", () => {
    const joinedNum1 = +firstNumber.join("");
    const joinedNum2 = +lastNumber.join("");
    let result = operation(joinedNum1, joinedNum2, operator);
    firstNumber.length = 0;
    lastNumber.length = 0;
    operator = undefined; 
    firstNumber.push(result);
    display();
});

const createDiv = document.createElement("div");
const displayDiv = document.querySelector(".display");
displayDiv.append(createDiv);
createDiv.textContent = "0";

function display() {
    let checkedOperator = checkOperation(operator);
    if (operator !== undefined) {
        createDiv.textContent = firstNumber.join("") + " " + checkedOperator + " " + lastNumber.join("");
    } else{
        if (firstNumber.length === 0){
            createDiv.textContent = "0";
        }else{
            createDiv.textContent = firstNumber.join("");
        }
    }
}