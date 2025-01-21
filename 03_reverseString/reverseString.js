function reverseString(str) {
    // Split the string using a regular expression to capture spaces
    return str
      .split(/(\s+)/) // Split by spaces while keeping spaces as part of the array
      .reverse() // Reverse the array of words and spaces
      .map(word => word.split("").reverse().join("")) // Reverse each word or space group
      .join(""); // Join everything back without adding extra spaces
  }
  
  
  
// Do not edit below this line
module.exports = reverseString;
