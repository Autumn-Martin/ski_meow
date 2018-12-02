
// ------ display signup form -----------
document.getElementById('signupLink').addEventListener('click', displaySignupForm)

function displaySignupForm() {
  document.getElementById('loginButton').style.display = 'none';
  document.getElementById('signupLink').style.display = 'none';
  document.getElementById('signupButton').style.display = 'inline';
  document.getElementById('backLink').style.display = 'block';
  document.getElementById('confirmPasswordField').style.display = 'inline';
  document.getElementById('confirmPasswordLabel').style.display = 'block';
}

// ------ display random image --------------
function getUnsplashData() {
  fetch("https://powderkeg.herokuapp.com/api/v1/images?query=ski,snowboard")
  .then((response) => response.json())
  .then((parsed_response) => console.log(parsed_response))
  .catch((error) => console.error({ error}));
}

// ------ display weather -----------------------
document.getElementById('loginButton').addEventListener('click', displayWeather)

function displayWeather() {
  hideWelcomePage();
  showWeatherPage();
}

function hideWelcomePage() {
  document.getElementById('welcomePage').style.display = 'none'
}

function showWeatherPage() {
  document.getElementById('weatherPage').style.display = 'block'
}

const getWeather = () => {
  $('#weatherInfo').html('');

  fetch('https://powderkeg.herokuapp.com/api/v1/snowcast?location=keystone')
    .then(response => response.json())
    .then(weather => appendWeather(weather))
    .catch(error => console.log({ error }))
};

const appendWeather = (weather) => {
  let new_weather = new Weather(weather)
  $('#weatherInfo').append(`
    <p class='cloudCover'>${new_weather.cloudCover}</p>
    `);
};

// class Weather {
//   constructor(weather) {
//     this.cloudCover = weather["data"]["attributes"]["overall"]["cloud_cover"]
//   }
// }
getWeather();

const Weather = require('./weather.js').default
