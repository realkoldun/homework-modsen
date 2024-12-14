const submitButton = document.getElementById("submitButton");
const textInputField = document.getElementById("textInput");
submitButton.addEventListener("click", () => {
    event.preventDefault();
    console.log(textInputField.value);
});