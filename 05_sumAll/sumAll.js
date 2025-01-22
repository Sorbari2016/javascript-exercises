
function sumAll(num1, num2) {
  // Check for negative numbers or non-integer values
  if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
    return "ERROR";
  }

  // Ensure num1 is the smaller number and num2 is the larger one
  const start = Math.min(num1, num2);
  const end = Math.max(num1, num2);

  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
}

// Do not edit below this line
module.exports = sumAll;
