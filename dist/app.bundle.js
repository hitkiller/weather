/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var format_data_1 = __webpack_require__(1);
	var MY_OPENWEATHERMAP_API = "47bc4e43962dbb173c1a3a7b2d5d0aa9";
	if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(function (position) {
	        var mylatitude = position.coords.latitude;
	        var mylongitude = position.coords.longitude;
	        get_myLocation(mylatitude, mylongitude);
	    });
	}
	else
	    alert("Please turn on Geolocator on Browser.");
	function get_myLocation(mylatitude, mylongitude) {
	    var getJSON = function (url) {
	        fetch(url)
	            .then(function (response) {
	            if (response.headers.get("content-type").indexOf("application/json") !== -1) {
	                return response.json();
	            }
	            else {
	                throw new TypeError('Response from "' + url + '" has unexpected "content-type"');
	            }
	        })
	            .then(function (data) {
	            console.log('JSON from "' + url + '" parsed successfully!');
	            console.log(data);
	            var myLocation_weather_dataJson = data.list;
	            format_data_1.DisplayWeatherData(myLocation_weather_dataJson);
	        })
	            .catch(function (error) {
	            console.error(error.message);
	        });
	    };
	    var myLocation_weather_dataUrl = "http://api.openweathermap.org/data/2.5/find?lat=" + mylatitude + "&lon=" + mylongitude + "&cnt=50&APPID=" + MY_OPENWEATHERMAP_API + "&units=metric";
	    getJSON(myLocation_weather_dataUrl);
	}


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	function DisplayWeatherData(result) {
	    for (var r in result) {
	        var wrapperElement = document.createElement('div'), str = "";
	        wrapperElement.className = "city_details";
	        {
	            if (result[r].name)
	                str += "<span class='current_location'>" + result[r].name + " </span>";
	        }
	        {
	            if (result[r].main && result[r].main.temp)
	                str += "<span class='current_temp'>" + result[r].main.temp + "&deg;C</span>";
	        }
	        {
	            if (result[r].clouds && result[r].clouds.all)
	                str += "<span class='current_clouds'>Clouds: " + result[r].clouds.all + "%</span>";
	        }
	        {
	            if (result[r].main && result[r].main.humidity)
	                str += "<span class='current_humidity'>Humidity: " + result[r].main.humidity + "%</span>";
	        }
	        {
	            if (result[r].wind && result[r].wind.speed)
	                str += "<span class='current_wind'>Wind: " + result[r].wind.speed + " m/s</span>";
	        }
	        {
	            if (result[r].main && result[r].main.pressure)
	                str += "<span class='current_pressure'>Pressure: " + result[r].main.pressure + "  hPa</span>";
	        }
	        {
	            if (result[r].weather && result[r].weather[0] && result[r].weather[0].main)
	                str += "<span class='current_weather_image " + result[r].weather[0].main + "'></span>";
	        }
	        {
	            if (result[r].weather && result[r].weather[0] && result[r].weather[0].description)
	                str += "<span class='current_weather'>Weather: " + result[r].weather[0].description + " </span>";
	        }
	        wrapperElement.innerHTML = str;
	        document.getElementById("cities").appendChild(wrapperElement);
	    }
	}
	exports.DisplayWeatherData = DisplayWeatherData;


/***/ }
/******/ ]);