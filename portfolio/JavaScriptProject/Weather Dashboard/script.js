const apiKey = '9f19faab48757209f5dd8b97e5589df6';

document.getElementById('darkModeToggle').addEventListener('change', function () {
    document.body.classList.toggle('dark-mode');
});

function getWeatherByCity() {
    const city = document.getElementById('citySearch').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayCurrentWeather(data);
                getForecast(data.coord.lat, data.coord.lon);
                displayMap(data.coord.lat, data.coord.lon);
            } else {
                alert('City not found, please try again.');
            }
        })
        .catch(error => console.error('Error:', error));
}

function getWeatherByLocation(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            displayCurrentWeather(data);
            getForecast(lat, lon);
        })
        .catch(error => console.error('Error:', error));
}

function getForecast(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            displayHourlyForecast(data.hourly);
            displayDailyForecast(data.daily);
        })
        .catch(error => console.error('Error:', error));
}

function displayCurrentWeather(data) {
    const city = document.getElementById('city');
    const time = document.getElementById('time');
    const currentWeather = document.getElementById('currentWeather');

    const weatherIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const temp = (data.main.temp - 273.15).toFixed(2);

    city.innerHTML = `<h2>${data.name}</h2>`;
    time.innerHTML = `<h3>${new Date().toLocaleTimeString()}</h3><p>${new Date().toLocaleDateString()}</p>`;
    currentWeather.innerHTML = `
        <h2>${temp}°C</h2>
        <img src="${weatherIcon}" alt="${data.weather[0].description}">
        <p>${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        <p>Pressure: ${data.main.pressure} hPa</p>
    `;
}

function displayHourlyForecast(hourlyData) {
    const hourlyForecast = document.getElementById('hourlyForecast');
    hourlyForecast.innerHTML = `<h4>Hourly Forecast:</h4>`;

    hourlyData.slice(0, 5).forEach(hour => {
        const hourElem = document.createElement('div');
        hourElem.className = 'hour';
        hourElem.innerHTML = `
            <p>${new Date(hour.dt * 1000).getHours()}:00</p>
            <img src="http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png" alt="${hour.weather[0].description}">
            <p>${(hour.temp - 273.15).toFixed(2)}°C</p>
            <p>Wind: ${hour.wind_speed} m/s</p>
        `;
        hourlyForecast.appendChild(hourElem);
    });
}

function displayDailyForecast(dailyData) {
    const forecast = document.getElementById('forecast');
    forecast.innerHTML = `<h4>5 Days Forecast:</h4>`;

    dailyData.slice(0, 5).forEach(day => {
        const dayElem = document.createElement('div');
        dayElem.className = 'day';
        dayElem.innerHTML = `
            <p>${new Date(day.dt * 1000).toLocaleDateString()}</p>
            <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="${day.weather[0].description}">
            <p>${(day.temp.day - 273.15).toFixed(2)}°C</p>
        `;
        forecast.appendChild(dayElem);
    });
}

function displayMap(lat, lon) {
    const mapDiv = document.getElementById('map');
    const map = new google.maps.Map(mapDiv, {
        center: { lat: lat, lng: lon },
        zoom: 10
    });

    new google.maps.Marker({
        position: { lat: lat, lng: lon },
        map: map
    });
}

function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            getWeatherByLocation(lat, lon);
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

getCurrentLocation();