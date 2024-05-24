const removeFromArray = function(array, ...items) {
    items.forEach((item) =>{
        while (array.indexOf(item) > -1) {
            indx = array.indexOf(item);
            array.splice(indx, 1);
        }
    });

    return array;

}
// Do not edit below this line
module.exports = removeFromArray;
