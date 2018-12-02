
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
  document.querySelector('header').style.display = 'block'
}

const getWeather = () => {
  $('#weatherInfo').html('');

  fetch('https://powderkeg.herokuapp.com/api/v1/snowcast?location=keystone')
    .then(response => response.json())
    .then(weatherData => appendWeather(weatherData))
    .catch(error => console.log({ error }))
};

const appendWeather = (weatherData) => {
  let weather = new Weather(weatherData)
  $('#aColumnInfo').append(`
    <p class='precipChance'>${weather.precipChance}</p>
    <h2 class= 'precipDepth'>${weather.precipDepth} in</h2>
    <h3 class= 'precipType'>${weather.precipType}</h3>
    `)
  $('#bColumnInfo').append(`
    <p class='cloudCover'>${weather.cloudCover}</p>
    <p class='visibility'>${weather.visibility}</p>
    <p class='windSpeed'>${weather.windSpeed}</p>
    </br>
    <p class='mtnPeakTemp'>${weather.mtnPeakTemp}</p>
    <p>at mountain peak</p>
    <p class='midChairTemp'>${weather.midChairTemp}</p>
    <p>at mid chair</p>
    <p class='mtnBaseTemp'>${weather.mtnBaseTemp}</p>
    <p>at mountain base</p>
    `);
};

getWeather();

const Weather = require('./weather.js').default
