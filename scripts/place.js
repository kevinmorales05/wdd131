const weatherOrem = {
  coord: { lon: -111.71, lat: 40.29 },
  weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
  base: "stations",
  main: {
    temp: 280.37,
    feels_like: 294.65,
    temp_min: 293.71,
    temp_max: 297.59,
    pressure: 1013,
    humidity: 36,
  },
  visibility: 10000,
  wind: { speed: 4.12, deg: 240 },
  clouds: { all: 1 },
  dt: 1625241600,
  sys: {
    type: 1,
    id: 4861,
    country: "US",
    sunrise: 1625217600,
    sunset: 1625271600,
  },
  timezone: -21600,
  id: 5780993,
  name: "Orem",
  code: 200,
};

const temperature = document.getElementById("temperature");
const conditions = document.getElementById("conditions");
const wind = document.getElementById("wind");
const windChill = document.getElementById("windChill");

temperature.textContent = `${Math.round(
  convertKelvinToCelcious(weatherOrem.main.temp)
)} °C`;
conditions.textContent = weatherOrem.weather[0].description;
wind.textContent = `${Math.round(weatherOrem.wind.speed)} mph`;

function convertKelvinToCelcious(kelvin) {
  return kelvin - 273.15;
}

function convertKelvinToFahrenheit(kelvin) {
  return ((kelvin - 273.15) * 9) / 5 + 32;
}
function convertFahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function calculateWindChill(tempK, speedMph) {
  let tempF = convertKelvinToFahrenheit(tempK);
  if (tempF <= 50 && speedMph > 3) {
    return Math.round(
      35.74 +
        0.6215 * tempF -
        35.75 * Math.pow(speedMph, 0.16) +
        0.4275 * tempF * Math.pow(speedMph, 0.16)
    );
  } else {
    return "N/A";
  }
}

windChill.textContent =
  calculateWindChill(weatherOrem.main.temp, weatherOrem.wind.speed) === "N/A"
    ? "N/A"
    : `${convertFahrenheitToCelsius(
        calculateWindChill(weatherOrem.main.temp, weatherOrem.wind.speed)
      ).toFixed(2)} °C`;
