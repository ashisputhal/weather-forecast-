async function fetchWeather() {
    const apiKey = 'f7cfba9603msh444703643669cc5p17a5a0jsn62bc7ecc1fa3';//api key
    const baseUrl = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather';//url of weather
    const cityInput = document.getElementById('cityInput');
    const weatherInfo = document.getElementById('weatherInfo');

    try {
        const city = cityInput.value;
        if (city) {
            const url = `${baseUrl}?city=${city}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': apiKey,
                    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
                }
            };
            const response = await fetch(url, options);
            const result = await response.text();
            const weatherData = JSON.parse(result);

            document.getElementById('city-name').textContent = city;
            document.getElementById('temperature').textContent = weatherData.temp;
            document.getElementById('feels-like').textContent = weatherData.feels_like;
            document.getElementById('humidity').textContent = weatherData.humidity;
            document.getElementById('min-temperature').textContent = weatherData.min_temp;
            document.getElementById('max-temperature').textContent = weatherData.max_temp;
            document.getElementById('wind-speed').textContent = weatherData.wind_speed;
        } else {
            weatherInfo.innerHTML = 'Please enter a city.';
        }
    } catch (error) {
        console.error(error);
        weatherInfo.innerHTML = 'Error fetching weather data. Please try again.';                                                                                                                                                                                                                                                      
    }
}

const getWeatherButton = document.getElementById('getWeatherButton');
getWeatherButton.addEventListener('click', fetchWeather);