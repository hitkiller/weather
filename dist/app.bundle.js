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
	            format_data_1.FormatData(myLocation_weather_dataJson);
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
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	function FormatData(json) {
	    var Person = (function () {
	        function Person() {
	            this.name = void 0;
	            this.surname = void 0;
	            this.age = void 0;
	            this.addressArr = void 0;
	            this.address = void 0;
	        }
	        __decorate([
	            JsonProperty('Name'), 
	            __metadata('design:type', String)
	        ], Person.prototype, "name", void 0);
	        __decorate([
	            JsonProperty('xing'), 
	            __metadata('design:type', String)
	        ], Person.prototype, "surname", void 0);
	        __decorate([
	            JsonProperty({ clazz: Address, name: 'AddressArr' }), 
	            __metadata('design:type', Array)
	        ], Person.prototype, "addressArr", void 0);
	        __decorate([
	            JsonProperty({ clazz: Address, name: 'Address' }), 
	            __metadata('design:type', Object)
	        ], Person.prototype, "address", void 0);
	        return Person;
	    }());
	}
	exports.FormatData = FormatData;


/***/ }
/******/ ]);