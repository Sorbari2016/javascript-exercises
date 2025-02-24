function findTheOldest(people) {
    const currentYear = new Date().getFullYear(); // ✅ Get the current year dynamically
  
    return people.reduce((oldest, person) => {
      // Use current year if yearOfDeath is undefined (i.e., person is still alive)
      const age = (person.yearOfDeath || currentYear) - person.yearOfBirth;
      const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
      
      return age > oldestAge ? person : oldest;
    }, people[0]); // ✅ Return the whole object
  }
  
  const people = [
    {
      name: "Carly",
      yearOfBirth: 1066, // Carly is still alive!
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ];
  
  
  
  
  
  
   
  
  
  
  

// Do not edit below this line
module.exports = findTheOldest;
