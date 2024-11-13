const API_KEY = `74ab65fda57a01632018ee36b957735a`;

// Wrapping the fetch call in an async function
async function getWeather(cityName, apiKey) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    );
    const result = await response.json();

    // Set city name in HTML if there's an element for it
    document.getElementById("cityName").innerHTML = cityName;

    // Access main object and handle missing data
    const { temp, feels_like, temp_min, temp_max, humidity, pressure } = result.main;
    const grnd_level = result.main.grnd_level || "N/A";
    const sea_level = result.main.sea_level || "N/A";
    const wind_speed = result.wind.speed; // Access wind speed

    // Update HTML elements
    document.getElementById("feels_like").innerHTML = feels_like;
    document.getElementById("grnd_level").innerHTML = grnd_level;
    document.getElementById("humidity").innerHTML = humidity;
    document.getElementById("pressure").innerHTML = pressure;
    document.getElementById("sea_level").innerHTML = sea_level;
    document.getElementById("temp").innerHTML = temp;
    document.getElementById("temp_max").innerHTML = temp_max;
    document.getElementById("temp_min").innerHTML = temp_min;
    document.getElementById("wind_speed").innerHTML = wind_speed; // Set wind speed

    console.log(result); // Log the result for debugging

  } catch (error) {
    console.error("Error fetching the weather data:", error);
  }
}

// Set up the submit button event listener
const submit = document.getElementById("submit");
const city = document.getElementById("city");

submit.addEventListener("click", (e) => {
  e.preventDefault();  // Prevent form submission if it's in a form
  getWeather(city.value, API_KEY);
});

// Initial example usage (optional)
getWeather("Delhi", API_KEY);
