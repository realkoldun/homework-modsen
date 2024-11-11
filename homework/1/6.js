const forbiddenWords = ["spam", "advertisement", "scam"];

function checkMessage(message) {
    return message.split(" ").includes(...forbiddenWords)
}


message = "This is spam message";
console.log(checkMessage(message))

