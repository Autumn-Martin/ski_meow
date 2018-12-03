/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Weather = __webpack_require__(/*! ./javascripts/classes/weather.js */ "./lib/javascripts/classes/weather.js").default;

var BackgroundImage = __webpack_require__(/*! ./javascripts/classes/background-image.js */ "./lib/javascripts/classes/background-image.js").default; // ------ display signup form -----------


document.getElementById('signupLink').addEventListener('click', displaySignupForm);

function displaySignupForm() {
  document.getElementById('loginButton').style.display = 'none';
  document.getElementById('signupLink').style.display = 'none';
  document.getElementById('signupButton').style.display = 'inline';
  document.getElementById('backLink').style.display = 'block';
  document.getElementById('confirmPasswordField').style.display = 'inline';
  document.getElementById('confirmPasswordLabel').style.display = 'block';
} // ------- return to login form ----------------


document.getElementById('backLink').addEventListener('click', displayLoginForm);

function displayLoginForm() {
  document.getElementById('loginButton').style.display = 'inline';
  document.getElementById('signupLink').style.display = 'inline';
  document.getElementById('signupLink').style.float = 'center';
  document.getElementById('signupButton').style.display = 'none';
  document.getElementById('backLink').style.display = 'none';
  document.getElementById('confirmPasswordField').style.display = 'none';
  document.getElementById('confirmPasswordLabel').style.display = 'none';
} // ------ display random image --------------


function getUnsplashData() {
  fetch("https://powderkeg.herokuapp.com/api/v1/images?query=ski,snowboard").then(function (response) {
    return response.json();
  }).then(function (imageData) {
    return createBackgroundImage(imageData);
  }).catch(function (error) {
    return console.error({
      error: error
    });
  });
}

function createBackgroundImage(imageData) {
  var backgroundImage = new BackgroundImage(imageData);
  $('.below-header').wrap("\n    <div style='padding: 7% 0%; overflow:scroll; background: url(".concat(backgroundImage.url, ") no-repeat center top/cover'></div>\n    "));
}

getUnsplashData(); // ------ display weather -----------------------

document.getElementById('loginButton').addEventListener('click', displayWeather);

function displayWeather() {
  hideWelcomePage();
  showWeatherPage();
}

function hideWelcomePage() {
  document.getElementById('welcomePage').style.display = 'none';
}

function showWeatherPage() {
  document.getElementById('weatherPage').style.display = 'block';
  document.querySelector('header').style.display = 'block';
}

var resorts = ['keystone', 'breckenridge', 'vail', 'loveland'];

var getWeather = function getWeather() {
  $('#weatherInfo').html('');
  resorts.map(function (resort, i) {
    fetch("https://powderkeg.herokuapp.com/api/v1/snowcast?location=".concat(resort)).then(function (response) {
      return response.json();
    }).then(function (weatherData) {
      return appendWeather(weatherData, resort);
    }).catch(function (error) {
      return console.log({
        error: error
      });
    });
  });
};

var appendWeather = function appendWeather(weatherData, name) {
  var weather = new Weather(weatherData);
  console.log(weather);
  $("#weatherPage").append("\n    <div class='name'>".concat(name.toUpperCase(), "</div>\n    <div class='col-container'>\n      <div id='aColumnInfo' class='col'>\n        <p class='precipChance'>").concat(weather.precipChance, "% chance</p>\n        <h2 class= 'precipDepth'>").concat(weather.precipDepth, " in</h2>\n        <h3 class= 'precipType'>").concat(weather.precipType, "</h3>\n      </div>\n      <div id='bColumnInfo' class='col'>\n        <p class='cloudCover'>").concat(weather.cloudCover, "% cloudy</p>\n        <p class='visibility'>").concat(weather.visibility, " mi visibility</p>\n        <p class='windSpeed'>").concat(weather.windSpeed, " mph wind</p>\n      </br>\n        <p class='mtnPeakTemp'>").concat(weather.mtnPeakTemp, "&deg; F</p>\n        <p class='peakElev'>at mountain peak</p>\n        <p class='midChairTemp'>").concat(weather.midChairTemp, "&deg; F</p>\n        <p class='midElev'>at mid chair</p>\n        <p class='mtnBaseTemp'>").concat(weather.mtnBaseTemp, "&deg; F</p>\n        <p class='baseElev'>at mountain base</p>\n      </div>\n    </div>\n    "));
};

getWeather();

/***/ }),

/***/ "./lib/javascripts/classes/background-image.js":
/*!*****************************************************!*\
  !*** ./lib/javascripts/classes/background-image.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BackgroundImage; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BackgroundImage = function BackgroundImage(data) {
  _classCallCheck(this, BackgroundImage);

  this.url = data['data']['attributes']['sizes']['regular_size'];
};



/***/ }),

/***/ "./lib/javascripts/classes/weather.js":
/*!********************************************!*\
  !*** ./lib/javascripts/classes/weather.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Weather; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Weather = function Weather(data) {
  _classCallCheck(this, Weather);

  var generalWeather = data['data']['attributes']['overall'];
  var generalWeatherPrecip = data['data']['attributes']['overall']['precip'];
  var peakMtnWeather = data['data']['attributes']['peak'];
  var midMtnWeather = data['data']['attributes']['mid'];
  var baseMtnWeather = data['data']['attributes']['base']; // column a general precipitation weather

  this.precipChance = Math.round(generalWeatherPrecip['precip_probability'] * 100);
  this.precipDepth = generalWeatherPrecip['snow_accumulation'];
  this.precipType = generalWeatherPrecip['precip_type'].toUpperCase(); // column b other general weather

  this.cloudCover = generalWeather['cloud_cover'] * 100;
  this.visibility = Math.round(generalWeather['visibility']);
  this.windSpeed = generalWeather['wind_speed']; // column b elevation specific weather

  this.mtnPeakTemp = peakMtnWeather['max_temp'];
  this.midChairTemp = midMtnWeather['max_temp'];
  this.mtnBaseTemp = baseMtnWeather['max_temp'];
};



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpYi9qYXZhc2NyaXB0cy9jbGFzc2VzL2JhY2tncm91bmQtaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2phdmFzY3JpcHRzL2NsYXNzZXMvd2VhdGhlci5qcyJdLCJuYW1lcyI6WyJXZWF0aGVyIiwicmVxdWlyZSIsImRlZmF1bHQiLCJCYWNrZ3JvdW5kSW1hZ2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc3BsYXlTaWdudXBGb3JtIiwic3R5bGUiLCJkaXNwbGF5IiwiZGlzcGxheUxvZ2luRm9ybSIsImZsb2F0IiwiZ2V0VW5zcGxhc2hEYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiaW1hZ2VEYXRhIiwiY3JlYXRlQmFja2dyb3VuZEltYWdlIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCIkIiwid3JhcCIsInVybCIsImRpc3BsYXlXZWF0aGVyIiwiaGlkZVdlbGNvbWVQYWdlIiwic2hvd1dlYXRoZXJQYWdlIiwicXVlcnlTZWxlY3RvciIsInJlc29ydHMiLCJnZXRXZWF0aGVyIiwiaHRtbCIsIm1hcCIsInJlc29ydCIsImkiLCJ3ZWF0aGVyRGF0YSIsImFwcGVuZFdlYXRoZXIiLCJsb2ciLCJuYW1lIiwid2VhdGhlciIsImFwcGVuZCIsInRvVXBwZXJDYXNlIiwicHJlY2lwQ2hhbmNlIiwicHJlY2lwRGVwdGgiLCJwcmVjaXBUeXBlIiwiY2xvdWRDb3ZlciIsInZpc2liaWxpdHkiLCJ3aW5kU3BlZWQiLCJtdG5QZWFrVGVtcCIsIm1pZENoYWlyVGVtcCIsIm10bkJhc2VUZW1wIiwiZGF0YSIsImdlbmVyYWxXZWF0aGVyIiwiZ2VuZXJhbFdlYXRoZXJQcmVjaXAiLCJwZWFrTXRuV2VhdGhlciIsIm1pZE10bldl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OztBQUNBLE9BQUtJLFVBQUwsR0FBa0JPLGNBQWMsQ0FBQyxhQUFELENBQWQsR0FBZ0MsR0FBbEQ7QUFDQSxPQUFLTixVQUFMLEdBQWtCVyxJQUFJLENBQUNDLEtBQUwsQ0FBV04sY0FBYyxDQUFDLFlBQUQsQ0FBekIsQ0FBbEI7QUFDQSxPQUFLTCxTQUFMLEdBQWlCSyxjQUFjLENBQUMsWUFBRCxDQUEvQixDQWJnQixDQWNoQjs7QUFDQSxPQUFLSixXQUFMLEdBQW1CTSxjQUFjLENBQUMsVUFBRCxDQUFqQztBQUNBLE9BQUtMLFlBQUwsR0FBb0JNLGFBQWEsQ0FBQyxVQUFELENBQWpDO0FBQ0EsT0FBS0wsV0FBTCxHQUFtQk0sY0FBYyxDQUFDLFVBQUQsQ0FBakM7QUFDRCxDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvaW5kZXguanNcIik7XG4iLCJjb25zdCBXZWF0aGVyID0gcmVxdWlyZSgnLi9qYXZhc2NyaXB0cy9jbGFzc2VzL3dlYXRoZXIuanMnKS5kZWZhdWx0XG5jb25zdCBCYWNrZ3JvdW5kSW1hZ2UgPSByZXF1aXJlKCcuL2phdmFzY3JpcHRzL2NsYXNzZXMvYmFja2dyb3VuZC1pbWFnZS5qcycpLmRlZmF1bHRcblxuLy8gLS0tLS0tIGRpc3BsYXkgc2lnbnVwIGZvcm0gLS0tLS0tLS0tLS1cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWdudXBMaW5rJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5U2lnbnVwRm9ybSlcblxuZnVuY3Rpb24gZGlzcGxheVNpZ251cEZvcm0oKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbkJ1dHRvbicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWdudXBMaW5rJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ251cEJ1dHRvbicpLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2tMaW5rJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtUGFzc3dvcmRGaWVsZCcpLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1QYXNzd29yZExhYmVsJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG4vLyAtLS0tLS0tIHJldHVybiB0byBsb2dpbiBmb3JtIC0tLS0tLS0tLS0tLS0tLS1cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrTGluaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUxvZ2luRm9ybSlcblxuZnVuY3Rpb24gZGlzcGxheUxvZ2luRm9ybSgpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luQnV0dG9uJykuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbnVwTGluaycpLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ251cExpbmsnKS5zdHlsZS5mbG9hdD0gJ2NlbnRlcic7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWdudXBCdXR0b24nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja0xpbmsnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybVBhc3N3b3JkRmllbGQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybVBhc3N3b3JkTGFiZWwnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuLy8gLS0tLS0tIGRpc3BsYXkgcmFuZG9tIGltYWdlIC0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBnZXRVbnNwbGFzaERhdGEoKSB7XG4gIGZldGNoKFwiaHR0cHM6Ly9wb3dkZXJrZWcuaGVyb2t1YXBwLmNvbS9hcGkvdjEvaW1hZ2VzP3F1ZXJ5PXNraSxzbm93Ym9hcmRcIilcbiAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gIC50aGVuKChpbWFnZURhdGEpID0+IGNyZWF0ZUJhY2tncm91bmRJbWFnZShpbWFnZURhdGEpKVxuICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKHsgZXJyb3J9KSk7XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlQmFja2dyb3VuZEltYWdlKGltYWdlRGF0YSkge1xuICBsZXQgYmFja2dyb3VuZEltYWdlID0gbmV3IEJhY2tncm91bmRJbWFnZShpbWFnZURhdGEpXG4gICQoJy5iZWxvdy1oZWFkZXInKS53cmFwKGBcbiAgICA8ZGl2IHN0eWxlPSdwYWRkaW5nOiA3JSAwJTsgb3ZlcmZsb3c6c2Nyb2xsOyBiYWNrZ3JvdW5kOiB1cmwoJHtiYWNrZ3JvdW5kSW1hZ2UudXJsfSkgbm8tcmVwZWF0IGNlbnRlciB0b3AvY292ZXInPjwvZGl2PlxuICAgIGApXG59XG5nZXRVbnNwbGFzaERhdGEoKVxuXG4vLyAtLS0tLS0gZGlzcGxheSB3ZWF0aGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW5CdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlXZWF0aGVyKVxuXG5mdW5jdGlvbiBkaXNwbGF5V2VhdGhlcigpIHtcbiAgaGlkZVdlbGNvbWVQYWdlKCk7XG4gIHNob3dXZWF0aGVyUGFnZSgpO1xufVxuXG5mdW5jdGlvbiBoaWRlV2VsY29tZVBhZ2UoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWxjb21lUGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbn1cblxuZnVuY3Rpb24gc2hvd1dlYXRoZXJQYWdlKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlclBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xufVxuXG5jb25zdCByZXNvcnRzID0gWydrZXlzdG9uZScsICdicmVja2VucmlkZ2UnLCAndmFpbCcsICdsb3ZlbGFuZCddXG5cbmNvbnN0IGdldFdlYXRoZXIgPSAoKSA9PiB7XG4gICQoJyN3ZWF0aGVySW5mbycpLmh0bWwoJycpO1xuICByZXNvcnRzLm1hcCgocmVzb3J0LCBpKSA9PiB7XG5cbiAgICBmZXRjaChgaHR0cHM6Ly9wb3dkZXJrZWcuaGVyb2t1YXBwLmNvbS9hcGkvdjEvc25vd2Nhc3Q/bG9jYXRpb249JHtyZXNvcnR9YClcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4od2VhdGhlckRhdGEgPT4gYXBwZW5kV2VhdGhlcih3ZWF0aGVyRGF0YSwgcmVzb3J0KSlcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coeyBlcnJvciB9KSlcbiAgfSlcbn07XG5cbmNvbnN0IGFwcGVuZFdlYXRoZXIgPSAod2VhdGhlckRhdGEsIG5hbWUpID0+IHtcbiAgbGV0IHdlYXRoZXIgPSBuZXcgV2VhdGhlcih3ZWF0aGVyRGF0YSlcbiAgY29uc29sZS5sb2cod2VhdGhlcilcbiAgJChgI3dlYXRoZXJQYWdlYCkuYXBwZW5kKGBcbiAgICA8ZGl2IGNsYXNzPSduYW1lJz4ke25hbWUudG9VcHBlckNhc2UoKX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPSdjb2wtY29udGFpbmVyJz5cbiAgICAgIDxkaXYgaWQ9J2FDb2x1bW5JbmZvJyBjbGFzcz0nY29sJz5cbiAgICAgICAgPHAgY2xhc3M9J3ByZWNpcENoYW5jZSc+JHt3ZWF0aGVyLnByZWNpcENoYW5jZX0lIGNoYW5jZTwvcD5cbiAgICAgICAgPGgyIGNsYXNzPSAncHJlY2lwRGVwdGgnPiR7d2VhdGhlci5wcmVjaXBEZXB0aH0gaW48L2gyPlxuICAgICAgICA8aDMgY2xhc3M9ICdwcmVjaXBUeXBlJz4ke3dlYXRoZXIucHJlY2lwVHlwZX08L2gzPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGlkPSdiQ29sdW1uSW5mbycgY2xhc3M9J2NvbCc+XG4gICAgICAgIDxwIGNsYXNzPSdjbG91ZENvdmVyJz4ke3dlYXRoZXIuY2xvdWRDb3Zlcn0lIGNsb3VkeTwvcD5cbiAgICAgICAgPHAgY2xhc3M9J3Zpc2liaWxpdHknPiR7d2VhdGhlci52aXNpYmlsaXR5fSBtaSB2aXNpYmlsaXR5PC9wPlxuICAgICAgICA8cCBjbGFzcz0nd2luZFNwZWVkJz4ke3dlYXRoZXIud2luZFNwZWVkfSBtcGggd2luZDwvcD5cbiAgICAgIDwvYnI+XG4gICAgICAgIDxwIGNsYXNzPSdtdG5QZWFrVGVtcCc+JHt3ZWF0aGVyLm10blBlYWtUZW1wfSZkZWc7IEY8L3A+XG4gICAgICAgIDxwIGNsYXNzPSdwZWFrRWxldic+YXQgbW91bnRhaW4gcGVhazwvcD5cbiAgICAgICAgPHAgY2xhc3M9J21pZENoYWlyVGVtcCc+JHt3ZWF0aGVyLm1pZENoYWlyVGVtcH0mZGVnOyBGPC9wPlxuICAgICAgICA8cCBjbGFzcz0nbWlkRWxldic+YXQgbWlkIGNoYWlyPC9wPlxuICAgICAgICA8cCBjbGFzcz0nbXRuQmFzZVRlbXAnPiR7d2VhdGhlci5tdG5CYXNlVGVtcH0mZGVnOyBGPC9wPlxuICAgICAgICA8cCBjbGFzcz0nYmFzZUVsZXYnPmF0IG1vdW50YWluIGJhc2U8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgKTtcbn07XG5cbmdldFdlYXRoZXIoKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tncm91bmRJbWFnZSB7XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLnVybCA9IGRhdGFbJ2RhdGEnXVsnYXR0cmlidXRlcyddWydzaXplcyddWydyZWd1bGFyX3NpemUnXVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBXZWF0aGVyIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIGNvbnN0IGdlbmVyYWxXZWF0aGVyID0gZGF0YVsnZGF0YSddWydhdHRyaWJ1dGVzJ11bJ292ZXJhbGwnXVxuICAgIGNvbnN0IGdlbmVyYWxXZWF0aGVyUHJlY2lwID0gZGF0YVsnZGF0YSddWydhdHRyaWJ1dGVzJ11bJ292ZXJhbGwnXVsncHJlY2lwJ11cbiAgICBjb25zdCBwZWFrTXRuV2VhdGhlciA9IGRhdGFbJ2RhdGEnXVsnYXR0cmlidXRlcyddWydwZWFrJ11cbiAgICBjb25zdCBtaWRNdG5XZWF0aGVyID0gZGF0YVsnZGF0YSddWydhdHRyaWJ1dGVzJ11bJ21pZCddXG4gICAgY29uc3QgYmFzZU10bldlYXRoZXIgPSBkYXRhWydkYXRhJ11bJ2F0dHJpYnV0ZXMnXVsnYmFzZSddXG4gICAgLy8gY29sdW1uIGEgZ2VuZXJhbCBwcmVjaXBpdGF0aW9uIHdlYXRoZXJcbiAgICB0aGlzLnByZWNpcENoYW5jZSA9IE1hdGgucm91bmQoZ2VuZXJhbFdlYXRoZXJQcmVjaXBbJ3ByZWNpcF9wcm9iYWJpbGl0eSddKjEwMClcbiAgICB0aGlzLnByZWNpcERlcHRoID0gZ2VuZXJhbFdlYXRoZXJQcmVjaXBbJ3Nub3dfYWNjdW11bGF0aW9uJ11cbiAgICB0aGlzLnByZWNpcFR5cGUgPSBnZW5lcmFsV2VhdGhlclByZWNpcFsncHJlY2lwX3R5cGUnXS50b1VwcGVyQ2FzZSgpXG4gICAgLy8gY29sdW1uIGIgb3RoZXIgZ2VuZXJhbCB3ZWF0aGVyXG4gICAgdGhpcy5jbG91ZENvdmVyID0gZ2VuZXJhbFdlYXRoZXJbJ2Nsb3VkX2NvdmVyJ10gKiAxMDBcbiAgICB0aGlzLnZpc2liaWxpdHkgPSBNYXRoLnJvdW5kKGdlbmVyYWxXZWF0aGVyWyd2aXNpYmlsaXR5J10pXG4gICAgdGhpcy53aW5kU3BlZWQgPSBnZW5lcmFsV2VhdGhlclsnd2luZF9zcGVlZCddXG4gICAgLy8gY29sdW1uIGIgZWxldmF0aW9uIHNwZWNpZmljIHdlYXRoZXJcbiAgICB0aGlzLm10blBlYWtUZW1wID0gcGVha010bldlYXRoZXJbJ21heF90ZW1wJ11cbiAgICB0aGlzLm1pZENoYWlyVGVtcCA9IG1pZE10bldlYXRoZXJbJ21heF90ZW1wJ11cbiAgICB0aGlzLm10bkJhc2VUZW1wID0gYmFzZU10bldlYXRoZXJbJ21heF90ZW1wJ11cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==