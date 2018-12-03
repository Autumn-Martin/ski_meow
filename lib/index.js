
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
  .then((imageData) => createBackgroundImage(imageData))
  .catch((error) => console.error({ error}));

}

function createBackgroundImage(imageData) {
  let backgroundImage = new BackgroundImage(imageData)
  $('.below-header').wrap(`
    <div style='padding: 7% 0%; background: url(${backgroundImage.url}) no-repeat center top/cover'></div>
    `)
}
getUnsplashData()

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

const resorts = ['keystone','aspen']

const getWeather = () => {
  $('#weatherInfo').html('');
  resorts.map((resort, i) => {

    fetch(`https://powderkeg.herokuapp.com/api/v1/snowcast?location=${resort}`)
    .then(response => response.json())
    .then(weatherData => appendWeather(weatherData, resort))
    .catch(error => console.log({ error }))
  })
};

const appendWeather = (weatherData, name) => {
  let weather = new Weather(weatherData)
  $(`#weatherPage`).append(`
    <div class='name'>${name.toUpperCase()}</div>
    <div class='col-container'>
      <div id='aColumnInfo' class='col'>
        <p class='precipChance'>${weather.precipChance}</p>
        <h2 class= 'precipDepth'>${weather.precipDepth} in</h2>
        <h3 class= 'precipType'>${weather.precipType}</h3>
      </div>
      <div id='bColumnInfo' class='col'>
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
      </div>
    </div>
    `);
};

getWeather();

const Weather = require('./weather.js').default
const BackgroundImage = require('./background-image.js').default
