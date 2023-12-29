function removePunctuation(text) {
    let punctuation = /[\.,?!\s]/g;
    let newText = text.replace(punctuation, '');
    return newText.toLowerCase();
}

const palindromes = function (string) {
    string = removePunctuation(string);
    let reversedString = [];
    for (let index = 0; index < string.length; index++) {
        reversedString.unshift(string[index]);
    }

    return reversedString.join('') === string ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
