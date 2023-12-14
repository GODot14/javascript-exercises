//toFixed(x) x equal decimals after coma
//parseFloat(var) will convert to number instead of string
//x °C ≘ (x × 9/5 + 32) °F
//x °F ≘ (x − 32) × 5/9 °C

const convertToCelsius = function(tempF) {
  let convertTempC = (tempF - 32) * (5/ 9);
  let fixedTempC = convertTempC.toFixed(1);
  return parseFloat(fixedTempC);
};

const convertToFahrenheit = function(tempC) {
  let convertTempF = tempC * (9 / 5) + 32;
  let fixedTempF = convertTempF.toFixed(1);
  return parseFloat(fixedTempF);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
