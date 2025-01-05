const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    console.log(`currentYear: ${currentYear}`);
    peopleModified = people.map((person) => {
        if (!(Object.hasOwn(person, 'yearOfDeath')))
        {
            person.yearOfDeath = currentYear;
        }

        return person;
    });
    console.log(peopleModified);
    return peopleModified.reduce((oldest, current) => (oldest.yearOfDeath - oldest.yearOfBirth) > (current.yearOfDeath - current.yearOfBirth) ? oldest : current);
};

// Do not edit below this line
module.exports = findTheOldest;
