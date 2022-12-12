import "./style.css";

const icons = ["♥", "♠", "♣", "♦"];
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "K",
  "Q"
];

let topSuitEl;
let numberEl;
let bottomSuitEl;

window.onload = function() {
  topSuitEl = document.querySelector(".top-suit");
  numberEl = document.querySelector(".number");
  bottomSuitEl = document.querySelector(".bottom-suit");
  const card = document.querySelector(".card");
  // card.style.width = "200px";
  const inputChange = document.querySelector("#input-change");
  inputChange.addEventListener("keyup", _ => {
    console.log({ value: inputChange.value });
    const v = inputChange.value;
    card.style.width = `${v}px`;
    document.getElementById("info").innerText = v;
  });

  const btn = document.getElementById("btn-input");
  btn.addEventListener("click", crearCarta);
  crearCarta();
};

function crearCarta() {
  const icon = icons[Math.floor(Math.random() * icons.length)];
  const value = values[Math.floor(Math.random() * values.length)];
  if (icon === "♥" || icon === "♦") {
    topSuitEl.style.color = "red";
    numberEl.style.color = "red";
    bottomSuitEl.style.color = "red";
  } else {
    topSuitEl.style.color = "black";
    numberEl.style.color = "black";
    bottomSuitEl.style.color = "black";
  }
  topSuitEl.innerHTML = icon;
  numberEl.innerHTML = value;
  bottomSuitEl.innerHTML = icon;
}
