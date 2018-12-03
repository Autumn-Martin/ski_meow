
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
    <div style='padding: 7% 0%; overflow:scroll; background: url(${backgroundImage.url}) no-repeat center top/cover'></div>
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

const resorts = ['keystone', 'breckenridge', 'vail', 'crested butte', 'loveland']

// const getWeather = () => {
//   $('#weatherInfo').html('');
//   resorts.map((resort, i) => {
//
//     fetch(`https://powderkeg.herokuapp.com/api/v1/snowcast?location=${resort}`)
//     .then(response => response.json())
//     .then(weatherData => appendWeather(weatherData, resort))
//     .catch(error => console.log({ error }))
//   })
// };

const appendWeather = () => {
  resorts.map((name, i) => {
  $(`#weatherPage`).append(`
      <div class='name'>${name.toUpperCase()}</div>
      <div class='col-container'>
        <div id='aColumnInfo' class='col'>
          <p class='precipChance'>90% chance</p>
          <h2 class= 'precipDepth'>10 in</h2>
          <h3 class= 'precipType'>SNOW</h3>
        </div>
        <div id='bColumnInfo' class='col'>
          <p class='cloudCover'>42% <span>cloudy</span></p>
          <p class='visibility'>10 mi <span>visibility</span></p>
          <p class='windSpeed'>2 mph <span>wind</span></p>
        </br>
          <p class='mtnPeakTemp'>10&deg; F</p>
          <p class='peakElev'>at mountain peak</p>
          <p class='midChairTemp'>20&deg; F</p>
          <p class='midElev'>at mid chair</p>
          <p class='mtnBaseTemp'>30&deg; F</p>
          <p class='baseElev'>at mountain base</p>
        </div>
      </div>
      `);
  })
};

appendWeather()
// const appendWeather = (weatherData, name) => {
//   let weather = new Weather(weatherData)
//   console.log(weather)
//   $(`#weatherPage`).append(`
//     <div class='name'>${name.toUpperCase()}</div>
//     <div class='col-container'>
//       <div id='aColumnInfo' class='col'>
//         <p class='precipChance'>${weather.precipChance}% chance</p>
//         <h2 class= 'precipDepth'>${weather.precipDepth} in</h2>
//         <h3 class= 'precipType'>${weather.precipType}</h3>
//       </div>
//       <div id='bColumnInfo' class='col'>
//         <p class='cloudCover'>${weather.cloudCover}% cloudy</p>
//         <p class='visibility'>${weather.visibility} mi visibility</p>
//         <p class='windSpeed'>${weather.windSpeed} mph wind</p>
//       </br>
//         <p class='mtnPeakTemp'>${weather.mtnPeakTemp}&deg; F</p>
//         <p>at mountain peak</p>
//         <p class='midChairTemp'>${weather.midChairTemp}&deg; F</p>
//         <p>at mid chair</p>
//         <p class='mtnBaseTemp'>${weather.mtnBaseTemp}&deg; F</p>
//         <p>at mountain base</p>
//       </div>
//     </div>
//     `);
// };

// getWeather();

const Weather = require('./weather.js').default
const BackgroundImage = require('./background-image.js').default
