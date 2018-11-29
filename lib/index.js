// import 'style.css'

document.getElementById('submitLoginButton').addEventListener('click', displayLoginForm)

function displayLoginForm() {
  document.getElementById('newLoginButton').style.display = 'none';
  document.getElementById('introText').style.display = 'none';
  document.getElementById('loginForm').style.display = 'block';
}
