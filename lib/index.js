const Weather = require('./javascripts/classes/weather.js').default
const BackgroundImage = require('./javascripts/classes/background-image.js').default

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
// ------- return to login form ----------------
document.getElementById('backLink').addEventListener('click', displayLoginForm)

function displayLoginForm() {
  document.getElementById('loginButton').style.display = 'inline';
  document.getElementById('signupLink').style.display = 'inline';
  document.getElementById('signupLink').style.float= 'center';
  document.getElementById('signupButton').style.display = 'none';
  document.getElementById('backLink').style.display = 'none';
  document.getElementById('confirmPasswordField').style.display = 'none';
  document.getElementById('confirmPasswordLabel').style.display = 'none';
}
// ------ display random image --------------
function getUnsplashData() {
  document.body.style = "padding: 7% 0%; overflow:scroll; background: url('http://localhost:8080/lib/images/default-background.jpeg') no-repeat center top/cover";

  fetch("https://powderkeg.herokuapp.com/api/v1/images?query=ski,snowboard")
  .then((response) => response.json())
  .then((imageData) => createBackgroundImage(imageData))
  .catch((error) => console.error({ error}));

}

function createBackgroundImage(imageData) {
  if (imageData === null) {
    document.body.style = "padding: 7% 0%; overflow:scroll; background: url('http://localhost:8080/lib/images/default-background.jpeg') no-repeat center top/cover";
  } else {
    backgroundImage = new BackgroundImage(imageData)
    console.log(backgroundImage.url)
    document.body.style = "";
    $('.below-header').wrap(`
          <div style='padding: 7% 0%; overflow:scroll; background: url(${backgroundImage.url}) no-repeat center top/cover'></div>
        `)
  }
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

const resorts = ['keystone', 'breckenridge', 'vail', 'loveland']

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
  console.log(weather)
  $(`#weatherPage`).append(`
    <div class='name'>${name.toUpperCase()}</div>
    <div class='col-container'>
      <div id='aColumnInfo' class='col'>
        <p class='precipChance'>${weather.precipChance}% chance</p>
        <h2 class= 'precipDepth'>${weather.precipDepth} in</h2>
        <h3 class= 'precipType'>${weather.precipType}</h3>
      </div>
      <div id='bColumnInfo' class='col'>
        <p class='cloudCover'>${weather.cloudCover}% cloudy</p>
        <p class='visibility'>${weather.visibility} mi visibility</p>
        <p class='windSpeed'>${weather.windSpeed} mph wind</p>
      </br>
        <p class='mtnPeakTemp'>${weather.mtnPeakTemp}&deg; F</p>
        <p class='peakElev'>at mountain peak</p>
        <p class='midChairTemp'>${weather.midChairTemp}&deg; F</p>
        <p class='midElev'>at mid chair</p>
        <p class='mtnBaseTemp'>${weather.mtnBaseTemp}&deg; F</p>
        <p class='baseElev'>at mountain base</p>
      </div>
    </div>
    `);
};

getWeather();
