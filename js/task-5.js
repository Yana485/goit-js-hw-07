/* Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль 
по кліку на button.change-color і задає це значення кольору текстовим вмістом
 для span.color.*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const paint = document.querySelector("body");
const changeColour = document.querySelector("button.change-color");
const text = document.querySelector(".color");

changeColour.addEventListener("click", run);

function run(event) {
  paint.style.backgroundColor = getRandomHexColor();
  text.textContent = paint.style.backgroundColor;
}