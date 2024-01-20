let firstNumber = [];
let lastNumber = [];
let operator = undefined;

const getOperator = document.querySelectorAll(".btn-operator");
getOperator.forEach((btn) => {
    btn.addEventListener("click", () => {
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
            firstNumber.push(btn.value);
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
removeAll.addEventListener("click", () => {
    firstNumber.length = 0;
    lastNumber.length = 0;

    // firstNumber.splice(0,firstNumber.length);
    // lastNumber.splice(0,lastNumber.length);
    operator = undefined;

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

