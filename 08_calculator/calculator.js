const add = function(...nums) {
	return nums.reduce((total, num) => total + num);
};

const subtract = function(...nums) {
	return nums.reduce((total, num) => total - num);
};

const sum = function(nums) {
	return nums.reduce((total, num) => total + num, 0);
};

const multiply = function(nums) {
  return nums.reduce((total, num) => total * num);
};

const power = function(num, exponent) {
	return num ** exponent;
};

const factorial = function(num) {
  let total = 1;
  for (let i=1; i<num+1; i++) {
    total = total * i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
