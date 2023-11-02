const temp = document.querySelector(".temperature");
const city = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const image = document.querySelector(".image");
const frame = document.querySelector(".frame");

//clear,clouds,drizzle,mist,rain,snow

const getLocation = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const APIKEY = "580bb1eab5d7d4882b4e79d1acc6aded";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      temp.innerText = `${Math.round(data.main.temp)}℃`;
      city.innerText = `${data.name}`;
      humidity.innerText = `${data.main.humidity}%`;
      wind.innerText = `${data.wind.speed} km/h`;
      image.src = `images/${data.weather[0].main.toLowerCase()}.png`;
      frame.classList.remove("hidden");
    });
};

navigator.geolocation.getCurrentPosition(getLocation);
