// Read first and second param
// 

const sumAll = function(index, iteration) {
    let sum = 0;
    if (index < 0 || iteration < 0
        || typeof index != "number" || typeof iteration != "number") {
        return 'ERROR';
    }
    if (index > iteration) {
        for (iteration; iteration <= index; iteration++) {
            sum += iteration;
        }
    } else {
        for (index; index <= iteration; index++) {
            sum += index;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
