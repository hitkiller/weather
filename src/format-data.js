"use strict";
function FormatData(obj) {
    if (obj instanceof Object) {
        obj.forEach(function (element) {
            var wrapperElement = document.createElement('div'), str = "";
            wrapperElement.className = "city_details";
            {
                if (element.name)
                    str += "<span class='current_location'>" + element.name + " </span>";
            }
            {
                if (element.main && element.main.temp)
                    str += "<span class='current_temp'>" + element.main.temp + "&deg;C</span>";
            }
            {
                if (element.clouds && element.clouds.all)
                    str += "<span class='current_clouds'>Clouds: " + element.clouds.all + "%</span>";
            }
            {
                if (element.main && element.main.humidity)
                    str += "<span class='current_humidity'>Humidity: " + element.main.humidity + "%</span>";
            }
            {
                if (element.wind && element.wind.speed)
                    str += "<span class='current_wind'>Wind: " + element.wind.speed + " m/s</span>";
            }
            {
                if (element.main && element.main.pressure)
                    str += "<span class='current_pressure'>Pressure: " + element.main.pressure + "  hPa</span>";
            }
            {
                if (element.weather && element.weather[0] && element.weather[0].main)
                    str += "<span class='current_weather_image " + element.weather[0].main + "'></span>";
            }
            {
                if (element.weather && element.weather[0] && element.weather[0].description)
                    str += "<span class='current_weather'>Weather: " + element.weather[0].description + " </span>";
            }
            wrapperElement.innerHTML = str;
            document.getElementById("cities").appendChild(wrapperElement);
        });
    }
    else { }
    ;
}
exports.FormatData = FormatData;
//# sourceMappingURL=format-data.js.map