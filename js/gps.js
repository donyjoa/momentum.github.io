const weather = document.querySelector(".weather");

const API_KEY = "cd9982fb12f1d95e0b96ddbaf7153f46";
const REGION = "region";

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      const temp = json.main.temp;
      const place = json.name;
      weather.innerText = `${place}은(는) 현재 ${temp}°C 입니다.`;
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(REGION, JSON.stringify(coordsObj));
}

function handleGeoSucces(pos) {
  const lat = pos.coords.latitude;
  const long = pos.coords.longitude;
  const coordsObj = {
    latitude: lat,
    longitude: long,
  };
  console.log(coordsObj);
  saveCoords(coordsObj);
  getWeather(lat, long);
}

function handleGeoError() {
  console.log("위치를 불러오지 못했습니다.");
}

function askForRegion() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadRegion() {
  const loadedRegion = localStorage.getItem(REGION);
  if (loadedRegion === null) {
    askForRegion();
  } else {
    const parseCoords = JSON.parse(loadedRegion);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadRegion();
}

init();
