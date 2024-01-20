let firstNumber = [];
let lastNumber = [];
let operator = undefined;

const getOperator = document.querySelectorAll(".btn-operator");
getOperator.forEach((btn) => {
    btn.addEventListener("click", () => {
        operator = btn.value;
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
});

const removeAll = document.querySelector(".allclear");
removeAll.addEventListener("click", () => {
    firstNumber.length = 0;
    lastNumber.length = 0;

    // firstNumber.splice(0,firstNumber.length);
    // lastNumber.splice(0,lastNumber.length);
    operator = undefined;
});
