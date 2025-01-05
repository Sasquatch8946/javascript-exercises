function findTheLargest(numArray) {
    return numArray.reduce((max, current) => current > max ? current : max);
}

console.log(findTheLargest([1, 4, 2, 9, 5, 12]))