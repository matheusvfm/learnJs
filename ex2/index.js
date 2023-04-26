const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");

celsiusInput.addEventListener("input", () => {
  const celsiusValue = parseFloat(celsiusInput.value);
  const fahrenheitValue = celsiusValue * 1.8 + 32;
  fahrenheitInput.value = fahrenheitValue.toFixed(1);
});

fahrenheitInput.addEventListener("input", () => {
  const fahrenheitValue = parseFloat(fahrenheitInput.value);
  const celsiusValue = (fahrenheitValue - 32) / 1.8;
  celsiusInput.value = celsiusValue.toFixed(1);
});
