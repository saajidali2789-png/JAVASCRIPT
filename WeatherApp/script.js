//User Action → Get Data → Process Data → Update UI
//first thing is to that select the all relevant elements by their id 
// const cityInput = document.getElementById("cityInput");
// const searchBtn = document.getElementById("searchBtn");
// const cityName = document.getElementById("cityName");
// const temperature = document.getElementById("temperature");
// const weatherCondition = document.getElementById("weatherCondition");
// const humidity = document.getElementById("humidity");
// const windSpeed = document.getElementById("windSpeed");
// const errorMessage = document.getElementById("errorMessage");

// //after that 

// const API_KEY = "YOUR_API_KEY";

// searchBtn.addEventListener("click",() =>{
//     const city = cityInput.value.trim();

//     errorMessage.textContent = "";

//     if(city === ""){
//         errorMessage.textContent = "please enter a city name";
//         return;
//     }
//     getWeather(city);
// });

// async function getWeather(city){
//     try {
//         const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

//         const response = await fetch(url);

//         if(!response.ok){
//             throw new Error("city not found");
//         }

//         const data = await response.json();

//         updateUI(data);
//     }
//     catch(error){
//         clearUI();
//         errorMessage.textContent = error.message;
//     }
// }

// function updateUI(data){
//     cityName.textContent = `City: ${data.name}`;
//     temperature.textContent = `Temperature: ${data.main.temp} °C`;
//     weatherCondition.textContent = `Condition: ${data.weather[0].description}`;
//     humidity.textContent = `Humidity: ${data.main.humidity}%`;
//     windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
// }

// function clearUI() {
//     cityName.textContent = "";
//     temperature.textContent = "";
//     weatherCondition.textContent = "";
//     humidity.textContent = "";
//     windSpeed.textContent = "";
// }

//by claude ai
const cityInput = document.getElementById("cityInput");
        const searchBtn = document.getElementById("searchBtn");
        const resultSection = document.getElementById("result-section");

        const API_KEY = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key

        // Event listeners
        searchBtn.addEventListener("click", handleSearch);
        cityInput.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                handleSearch();
            }
        });

        function handleSearch() {
            const city = cityInput.value.trim();
            
            if (city === "") {
                showError("Please enter a city name");
                return;
            }
            
            getWeather(city);
        }

        async function getWeather(city) {
            showLoading();
            
            try {
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error("City not found. Please try again.");
                }

                const data = await response.json();
                updateUI(data);
            } catch (error) {
                showError(error.message);
            }
        }

        function updateUI(data) {
            const weatherIcon = getWeatherIcon(data.weather[0].main);
            
            const html = `
                <div class="weather-card">
                    <div class="weather-icon">${weatherIcon}</div>
                    <div id="cityName">${data.name}, ${data.sys.country}</div>
                    <div id="temperature">${Math.round(data.main.temp)}°C</div>
                    <div id="weatherCondition">${data.weather[0].description}</div>
                    
                    <div class="weather-details">
                        <div class="detail-item">
                            <div class="detail-label">Feels Like</div>
                            <div class="detail-value">${Math.round(data.main.feels_like)}°C</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Humidity</div>
                            <div class="detail-value">${data.main.humidity}%</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Wind Speed</div>
                            <div class="detail-value">${data.wind.speed} m/s</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Pressure</div>
                            <div class="detail-value">${data.main.pressure} hPa</div>
                        </div>
                    </div>
                </div>
            `;
            
            resultSection.innerHTML = html;
            resultSection.classList.add('show');
        }

        function showError(message) {
            resultSection.innerHTML = `<div id="errorMessage">${message}</div>`;
            resultSection.classList.add('show');
        }

        function showLoading() {
            resultSection.innerHTML = `
                <div class="loading">
                    <div class="spinner"></div>
                </div>
            `;
            resultSection.classList.add('show');
        }

        function getWeatherIcon(condition) {
            const icons = {
                'Clear': '☀️',
                'Clouds': '☁️',
                'Rain': '🌧️',
                'Drizzle': '🌦️',
                'Thunderstorm': '⛈️',
                'Snow': '❄️',
                'Mist': '🌫️',
                'Smoke': '💨',
                'Haze': '🌫️',
                'Dust': '💨',
                'Fog': '🌫️',
                'Sand': '💨',
                'Ash': '💨',
                'Squall': '💨',
                'Tornado': '🌪️'
            };
            
            return icons[condition] || '🌤️';
        }