"use strict";
var format_data_1 = require("./format-data");
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
//# sourceMappingURL=app.js.map