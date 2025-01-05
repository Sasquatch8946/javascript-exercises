const palindromes = function (aStr) {
    //create array of characters
    const lettersOnly = aStr.replace(/\s+/g, "").replace(/[!,.\?]/g, "").toLowerCase();
    const reversedStr = lettersOnly.split("").reverse().join("");
    return lettersOnly === reversedStr
};

// Do not edit below this line
module.exports = palindromes;
