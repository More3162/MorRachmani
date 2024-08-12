function searchWeather() {
    const apiKey = '9f19faab48757209f5dd8b97e5589df6';
    const country = document.getElementById('countryInput').value.trim();
    const city = document.getElementById('cityInput').value.trim();

    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    const query = country ? `${city},${country}` : city;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
            fetchUVIndex(data.coord.lat, data.coord.lon, apiKey);
        })
        .catch(error => {
            alert(error.message);
        });
}

function displayWeather(data) {
    const weatherResults = document.getElementById('weatherResults');
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString();

    weatherResults.innerHTML = `
        <h2 class="animated">${data.name}, ${data.sys.country}</h2>
        <table>
            <tr>
                <th>Temperature</th>
                <td>${data.main.temp}°C</td>
            </tr>
            <tr>
                <th>Description</th>
                <td><img class="weather-icon" src="${iconUrl}" alt="${data.weather[0].description}"> ${data.weather[0].description}</td>
            </tr>
            <tr>
                <th>Humidity</th>
                <td>${data.main.humidity}%</td>
            </tr>
            <tr>
                <th>Wind Speed</th>
                <td>${data.wind.speed} m/s</td>
            </tr>
            <tr>
                <th>Sunrise</th>
                <td class="animated sunrise"><img src="./img/sunrise.png" alt="Sunrise icon">${sunriseTime}</td>
            </tr>
            <tr>
                <th>Sunset</th>
                <td class="animated sunset"><img src="./img/sunset.png" alt="Sunset icon">${sunsetTime}</td>
            </tr>
        </table>
    `;
}


function fetchUVIndex(lat, lon, apiKey) {
    fetch(`https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => displayUVIndex(data))
        .catch(error => console.error('Error fetching UV index:', error));
}

function displayUVIndex(data) {
    const weatherResults = document.getElementById('weatherResults');

    weatherResults.innerHTML += `
        <h3 class="animated">UV Index</h3>
        <div class="animated uv-index"><img src="./img/uvIndex.png" alt="UV Index icon">${data.value}</div>
    `;
}
