let sequence = [0, 1];

const fibonacci = function(n) {
    if (n < 0) {
        return 'OOPS';
    } else if (n === 0 || n === 1) {
        return sequence[n];
    }

    for (let i = 2; i <= n; i++) {
        sequence[i] = sequence[i - 2] + sequence[i - 1];
    }
    return sequence[n];
};

// Do not edit below this line
module.exports = fibonacci;
