const sumAll = function(index, iteration) {
    let sum = 0;
        for (index; index <= iteration; index++) {
            sum += index;
        }
    return sum;
};

sumAll(1, 4);