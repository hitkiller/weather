import { FormatData } from "./format-data";

const MY_OPENWEATHERMAP_API = "47bc4e43962dbb173c1a3a7b2d5d0aa9";

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: Position) => {
          let mylatitude = position.coords.latitude;
          let mylongitude = position.coords.longitude;

            get_myLocation(mylatitude, mylongitude);
        });
    } else  alert("Please turn on Geolocator on Browser.");

    function get_myLocation(mylatitude: number, mylongitude: number) {

        var getJSON = function(url: string) {
            fetch(url)
                .then(function(response) {
                    if (response.headers.get("content-type").indexOf("application/json") !== -1) { // checking response header
                        return response.json();
                    } else {
                        throw new TypeError('Response from "' + url + '" has unexpected "content-type"');
                    }
                })
                .then(function(data) {
                    console.log('JSON from "' + url + '" parsed successfully!');
                    console.log(data);
                    var myLocation_weather_dataJson = data.list;
                    FormatData(myLocation_weather_dataJson);
                })
                .catch(function(error) {
                    console.error(error.message);
                });
        };

        let myLocation_weather_dataUrl = "http://api.openweathermap.org/data/2.5/find?lat=" + mylatitude + "&lon=" + mylongitude + "&cnt=50&APPID=" + MY_OPENWEATHERMAP_API + "&units=metric";
        getJSON(myLocation_weather_dataUrl);
    }
