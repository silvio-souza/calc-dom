const displayEl = document.querySelector("#display");

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

// functions

// add number to the display
for (let i = 0; i < numberBtns.length; i++) {
  numberBtns[i].addEventListener("click", () => {
    displayEl.value += numberBtns[i].innerText;
  });
}
