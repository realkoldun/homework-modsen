const container = document.getElementById("container");
const button = document.getElementById("button");

button.addEventListener("click", () => {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "Новый параграф";
    container.appendChild(newParagraph);
})