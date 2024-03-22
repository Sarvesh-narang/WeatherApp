const apiKey = "";
const apiUrl = "";

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTMl = data.name;
  document.querySelector(".temp").innerHTMl = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTMl = data.main.humidity + "%";
  document.querySelector(".wind").innerHTMl = data.wind.speed + "km/h";
}

checkWeather();
