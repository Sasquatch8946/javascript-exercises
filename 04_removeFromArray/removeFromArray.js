const removeFromArray = function(arr, ...items) {
    let newArr = Array.from(arguments[0]);
    let indx;
    items.forEach((i) => {
        indx = newArr.indexOf(i);
        while (indx > -1) {
            newArr.splice(indx, 1);
            indx = newArr.indexOf(i);
        }
    });

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
