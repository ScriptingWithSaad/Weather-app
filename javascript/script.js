

// Fetching weather data from WeatherAPI
let apiKey = "fd34aebfb11048f1bfa61134241808";
let apiUrl = `http://api.weatherapi.com/v1/current.json?&aqi=yes&q=`;

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&key=${apiKey}`);


        if (response.status == 404) {
            document.querySelector('.error').style.display = "none";
            document.querySelector('.weather').style.display = "none";
        } else {
            var data = await response.json();
            // console.log(data);


            document.querySelector(".temp").innerHTML = data.current.temp_c + "°C";
            document.querySelector(".city").innerHTML = data.location.name;
            document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
            document.querySelector(".wind").innerHTML = data.current.wind_kph + "Km / h";

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";

        }
    }
    catch (error) {
        console.error("Error fetching weather data:", error);
        document.querySelector(".error").style.display = "block";
    }

}



document.addEventListener("DOMContentLoaded", () => {
    const searchBox = document.querySelector(".search input");
    const searchButton = document.querySelector(".search button");

    searchButton.addEventListener("click", () => {
        checkWeather(searchBox.value);
    });
});


