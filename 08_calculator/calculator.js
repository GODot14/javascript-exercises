const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
  let totalSum = 0;
	a.forEach(element => {
    totalSum += element;
  });
  return totalSum;
};

const multiply = function(a) {
  let totalMulti = 1;
  a.forEach(element => {
    totalMulti *= element;
  })
  return totalMulti;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  if (a === 0 || a === 1) return 1;
    let totalFact = 0;
    for (let n = a - 1; n > 0; n--) {
      totalFact = a *= n;
    }
    return totalFact;
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
