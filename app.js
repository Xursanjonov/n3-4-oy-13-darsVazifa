let width = document.querySelector("#width");
let radius = document.querySelector("#radius");
let height = document.querySelector("#height");
let color = document.querySelector("#color");
let btnOK = document.querySelector("#ok");
let result = document.querySelector("#result");
let form = document.querySelector("#form");

const text = document.querySelector(".text");

// Keyup

form.addEventListener("keyup", (e) => {
  e.preventDefault();

  result.style.width = width.value + "px";
  result.style.borderRadius = radius.value + "%";
  result.style.height = height.value + "px";
  result.style.backgroundColor = color.value;
  localSave();
});

// Keyup end