declare module weatherData {
    export interface Coord {
        lon: number;
        lat: number;
    }

    export interface Main {
        temp: number;
        pressure: number;
        humidity: number;
        temp_min: number;
        temp_max: number;
    }

    export interface Wind {
        speed: number;
        deg: number;
    }

    export interface Sys {
        country: string;
    }

    export interface Clouds {
        all: number;
    }

    export interface Weather {
        id: number;
        main: string;
        description: string;
        icon: string;
    }

    export interface RootObject {
        id: number;
        name: string;
        coord: Coord;
        main: Main;
        dt: number;
        wind: Wind;
        sys: Sys;
        clouds: Clouds;
        weather: Weather[];
    }

}


export function displayWeatherData(result: weatherData.RootObject[]) {
    for (var r in result) {
        let wrapperElement = document.createElement('div'),
            str = "";
        wrapperElement.className = "city_details"; {
            if (result[r].name) str += "<span class='current_location'>" + result[r].name + " </span>";
        } {
            if (result[r].main && result[r].main.temp) str += "<span class='current_temp'>" + result[r].main.temp + "&deg;C</span>";
        } {
            if (result[r].clouds && result[r].clouds.all) str += "<span class='current_clouds'>Clouds: " + result[r].clouds.all + "%</span>";
        } {
            if (result[r].main && result[r].main.humidity) str += "<span class='current_humidity'>Humidity: " + result[r].main.humidity + "%</span>";
        } {
            if (result[r].wind && result[r].wind.speed) str += "<span class='current_wind'>Wind: " + result[r].wind.speed + " m/s</span>";
        } {
            if (result[r].main && result[r].main.pressure) str += "<span class='current_pressure'>Pressure: " + result[r].main.pressure + "  hPa</span>";
        } {
            if (result[r].weather && result[r].weather[0] && result[r].weather[0].main) str += "<span class='current_weather_image " + result[r].weather[0].main + "'></span>";
        }
        {
            if (result[r].weather && result[r].weather[0] && result[r].weather[0].description) str += "<span class='current_weather'>Weather: " + result[r].weather[0].description + " </span>";
        }
        wrapperElement.innerHTML = str;
        document.getElementById("cities").appendChild(wrapperElement);
    }
}
