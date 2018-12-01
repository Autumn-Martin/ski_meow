
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

// ------ display weatther -----------------------
document.getElementById('loginButton').addEventListener('click', displayWeather)

function displayWeather() {
  hideWelcomePage();
  showWeatherPage();
}

function hideWelcomePage() {
  document.getElementById('welcomePage').style.display = 'none'
}

function showWeatherPage() {

}
