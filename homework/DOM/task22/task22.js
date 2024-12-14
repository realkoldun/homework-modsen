const button = document.getElementById("clickButton");
const counterElement = document.getElementById("counter");
let count = 0;
const counterText = (count) => `Количество кликов: ${count}`;
button.addEventListener("click", () => counterElement.textContent = counterText(++count));