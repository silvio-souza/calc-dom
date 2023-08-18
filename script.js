const displayEl = document.querySelector("#display");
const historyEl = document.querySelector("#history");

let firstSentence = false;

let firstNumber = "";
let secondNumber = "";
let operation = "";
let result = 0;
let isFloat = false;

// number buttons
const numberBtns = [
  document.querySelector("#btn-0"),
  document.querySelector("#btn-1"),
  document.querySelector("#btn-2"),
  document.querySelector("#btn-3"),
  document.querySelector("#btn-4"),
  document.querySelector("#btn-5"),
  document.querySelector("#btn-6"),
  document.querySelector("#btn-7"),
  document.querySelector("#btn-8"),
  document.querySelector("#btn-9"),
];

// operations buttons
const multiBtnEl = document.querySelector("#btn-multi");
const divBtnEl = document.querySelector("#btn-division");
const minusBtnEl = document.querySelector("#btn-minus");
const plusBtnEl = document.querySelector("#btn-plus");
const equalsBtnEl = document.querySelector("#btn-equals");
const dotBtnEl = document.querySelector("#btn-dot");
const clearBtnEl = document.querySelector("#btn-clear");

// functions
const addFirstSentence = (operationChoosen) => {
  if (!firstSentence) {
    firstNumber = parseFloat(displayEl.value);
    historyEl.innerText = `${firstNumber} ${operationChoosen}`;
    displayEl.value = "0";
    firstSentence = true;
    isFloat = false;
  } else if (displayEl.value == 0) {
    historyEl.innerText = `${firstNumber} ${operationChoosen}`;
    firstSentence = true;
  } else {
    checkResult(operationChoosen);
  }
};

const checkResult = (operationChoosen) => {
  secondNumber = parseFloat(displayEl.value);
  historyEl.innerText = `${firstNumber} ${operationChoosen} ${secondNumber}`;
  displayEl.value = 0;

  if (operationChoosen == "+") {
    result = firstNumber + secondNumber;
    historyEl.innerText = `${historyEl.innerText} = ${result}`;
  } else if (operationChoosen == "-") {
    result = firstNumber - secondNumber;
    historyEl.innerText = `${historyEl.innerText} = ${result}`;
  } else if (operationChoosen == "x") {
    result = firstNumber * secondNumber;
    historyEl.innerText = `${historyEl.innerText} = ${result}`;
  } else if (operationChoosen == "÷") {
    result = firstNumber / secondNumber;
    historyEl.innerText = `${historyEl.innerText} = ${result}`;
  }

  reset();
};

const clearButton = () => {
  displayEl.value = 0;
  if (displayEl.value == 0) {
    historyEl.innerText = "";
    reset();
  }
};

const reset = () => {
  firstSentence = false;
  isFloat = false;

  firstNumber = "";
  secondNumber = "";
  operation = "";
  result = 0;
};

// add number to the display
for (let i = 0; i < numberBtns.length; i++) {
  numberBtns[i].addEventListener("click", () => {
    if (displayEl.value === "0") {
      displayEl.value = numberBtns[i].innerText;
    } else {
      displayEl.value += numberBtns[i].innerText;
    }
  });
}

multiBtnEl.addEventListener("click", () => {
  operation = multiBtnEl.innerText;
  addFirstSentence(operation);
});

divBtnEl.addEventListener("click", () => {
  operation = divBtnEl.innerText;
  addFirstSentence(operation);
});

plusBtnEl.addEventListener("click", () => {
  operation = plusBtnEl.innerText;
  addFirstSentence(operation);
});

minusBtnEl.addEventListener("click", () => {
  operation = minusBtnEl.innerText;
  addFirstSentence(operation);
});

equalsBtnEl.addEventListener("click", () => {
  checkResult(operation);
});

dotBtnEl.addEventListener("click", () => {
  if (!isFloat) {
    isFloat = true;
    displayEl.value = displayEl.value + ".";
  }
});

clearBtnEl.addEventListener("click", clearButton);
