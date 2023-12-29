const findTheOldest = function(people) {
    let oldestPerson = people.reduce((oldest, currentPerson) => {
        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);

        return oldestAge < currentAge ? currentPerson : oldest;
    })
    return oldestPerson;
};

function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

//console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
