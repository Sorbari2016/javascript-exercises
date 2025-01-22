function convertToCelsius(fahrenheit) {
  // Convert Fahrenheit to Celsius
  let celsius = (fahrenheit - 32) * (5 / 9);
  // Round to one decimal place
  return Math.round(celsius * 10) / 10;
}

function convertToFahrenheit(celsius) {
  // Convert Celsius to Fahrenheit
  let fahrenheit = (celsius * (9 / 5)) + 32;
  // Round to one decimal place
  return Math.round(fahrenheit * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
