async function fetchData(city) {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ccc202d355mshc70e89aa338ad31p133adcjsn51c654e21dee',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {

        document.getElementById("cityname").innerHTML = city
        const response = await fetch(url, options);
        const result = await response.json(); // Assuming the response is JSON
        console.log(result);

        // Assuming the response has properties like cloud_pct, temp, etc.
        const cloud_pct = result.cloud_pct;
        const temp = result.temp;
        const feels_like = result.feels_like;
        const humidity = result.humidity;
        const min_temp = result.min_temp;
        const max_temp = result.max_temp;
        const wind_speed = result.wind_speed;
        const wind_degrees = result.wind_degrees;
        const sunrise = result.sunrise;
        const sunset = result.sunset;

        document.getElementById("cloud_pct").innerHTML = cloud_pct;
        document.getElementById("temp").innerHTML = temp;
        document.getElementById("feels_like").innerHTML = feels_like;
        document.getElementById("humidity").innerHTML = humidity;
        document.getElementById("min_temp").innerHTML = min_temp;
        document.getElementById("max_temp").innerHTML = max_temp;
        document.getElementById("wind_speed").innerHTML = wind_speed;
        document.getElementById("wind_degrees").innerHTML = wind_degrees;
        document.getElementById("sunrise").innerHTML = sunrise;
        document.getElementById("sunset").innerHTML = sunset;

        

    } catch (error) {
        console.error(error);
    }
}

// Call the async function to start fetching data
document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const city = document.getElementById("cityInput").value;
    fetchData(city);
});

async function fetchWeatherData(common_city) {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${common_city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ccc202d355mshc70e89aa338ad31p133adcjsn51c654e21dee',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        // Update table cells with fetched weather data
        document.getElementById(`cloud_pct_${common_city}`).innerHTML = result.cloud_pct;
        document.getElementById(`temp_${common_city}`).innerHTML = result.temp;
        document.getElementById(`feels_like_${common_city}`).innerHTML = result.feels_like;
        document.getElementById(`humidity_${common_city}`).innerHTML = result.humidity;
        document.getElementById(`min_temp_${common_city}`).innerHTML = result.min_temp;
        document.getElementById(`max_temp_${common_city}`).innerHTML = result.max_temp;
        document.getElementById(`wind_speed_${common_city}`).innerHTML = result.wind_speed;
        document.getElementById(`wind_degrees_${common_city}`).innerHTML = result.wind_degrees;
        document.getElementById(`sunrise_${common_city}`).innerHTML = result.sunrise;
        document.getElementById(`sunset_${common_city}`).innerHTML = result.sunset;
    } catch (error) {
        console.error(error);
    }
}

// Fetch weather data for each city when the page loads
document.addEventListener("DOMContentLoaded", function() {
    fetchWeatherData("Kolkata");
    fetchWeatherData("Chennai");
    fetchWeatherData("Hyderabad");
    fetchWeatherData("Pune");
    fetchWeatherData("Jaipur");
    fetchWeatherData("Ahmedabad");
});



