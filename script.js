function convertTemperature() {
  const temperature = parseFloat(document.getElementById("temperature").value);
  const conversionType = document.getElementById("conversionType").value;
  let result;

  if (isNaN(temperature)) {
    document.getElementById("result").textContent = "Please enter a valid number.";
    return;
  }

  if (conversionType === "celsiusToFahrenheit") {
    result = (temperature * 9/5) + 32;
    document.getElementById("result").textContent = temperature + "°C = " + result.toFixed(2) + "°F";
  } else if (conversionType === "fahrenheitToCelsius") {
    result = (temperature - 32) * 5/9;
    document.getElementById("result").textContent = temperature + "°F = " + result.toFixed(2) + "°C";
  }
}