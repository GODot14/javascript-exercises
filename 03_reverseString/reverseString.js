const reverseString = function(string) {
    let reversedString = [];
    for (let index = 0; index < string.length; index++) {
        reversedString.unshift(string[index]);
    }
    return reversedString.join('');
};

// Do not edit below this line
module.exports = reverseString;
