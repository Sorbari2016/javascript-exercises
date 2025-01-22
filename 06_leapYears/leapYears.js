function leapYears(year) {
    // Check if the year is divisible by 4
    if (year % 4 === 0) {
      // If the year is also divisible by 100, check if it's divisible by 400
      if (year % 100 === 0) {
        return year % 400 === 0;
      }
      // Otherwise, it's a leap year
      return true;
    }
    // If not divisible by 4, it's not a leap year
    return false;
  }

// Do not edit below this line
module.exports = leapYears;
