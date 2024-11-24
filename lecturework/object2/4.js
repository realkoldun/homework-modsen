const isPalindrom = (str) => {
    return str.toLowerCase() === str.toLowerCase().split("").reverse().join("");
}
console.log(isPalindrom("Aba"))