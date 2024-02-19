const repeatString = function(string, number) {
    let result = '';

    if (number > 0) {
        result = string;
    } else if (number === 0) {
        return result;
    } else {
        return "ERROR";
    }

    for (let i = 1; i < number; i++) {
        result += string;
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
