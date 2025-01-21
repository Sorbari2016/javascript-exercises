function repeatString(str, num, useRandom = false) {
  // If useRandom is true, generate a random number
  if (useRandom) {
    num = Math.floor(Math.random() * 1000);
  }

  if (num < 0) {
    return "ERROR"; // Throw an error for negative numbers
  }

  if (num === 0) {
    return ""; // Return an empty string for 0 repetitions
  }

  // Explicitly check if the string is exactly a blank space
  if (str === " ") {
    return " ".repeat(num); // Repeat the blank space for the specified times
  }

  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
}




// Do not edit below this line
module.exports = repeatString;
