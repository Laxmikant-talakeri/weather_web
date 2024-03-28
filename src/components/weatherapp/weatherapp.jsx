import React, { useState } from 'react';
import './weatherapp.css';
import search_icon from '../../assets/search.png';
import cloud_icon from '../../assets/cloud.png';
import humidity_icon from '../../assets/humidity.png';
import wind_icon from '../../assets/wind.png';
import clear_icon from '../../assets/clear.png';
import drizzle_icon from '../../assets/drizzle.png';
import rain_icon from '../../assets/rain.png';
import snow_icon from '../../assets/snow.png';

const WeatherApp = () => {
  const apiKey = import.meta.env.VITE_API_KEY;



  // Now you can use apiKey in your code
  

// Now you can use apiKey in your code

  const [wicon, setWicon] = useState(cloud_icon);

  const search = async () => {
    try {
      const element = document.getElementsByClassName("cityInput");
      if (element[0].value === "") {
        return;
      }
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`;
      let response = await fetch(url);
      let data = await response.json();
      const humidity = document.getElementsByClassName("humidity-percent");
      const wind = document.getElementsByClassName("wind-rate");
      const temperature = document.getElementsByClassName("weather-temp");
      const location = document.getElementsByClassName("weather-location");

      humidity[0].innerHTML = data.main.humidity + "%";
      wind[0].innerHTML = data.wind.speed + "km/h";
      temperature[0].innerHTML = data.main.temp + "°C";
      location[0].innerHTML = data.name;

      // Set weather icon based on weather condition
      switch (data.weather[0].icon) {
        case "01d":
        case "01n":
          setWicon(clear_icon);
          break;
        case "02d":
        case "02n":
          setWicon(cloud_icon);
          break;
        case "03d":
        case "03n":
          setWicon(drizzle_icon);
          break;
        case "04d":
        case "04n":
          setWicon(drizzle_icon);
          break;
        case "09d":
        case "09n":
          setWicon(rain_icon);
          break;
        case "10d":
        case "10n":
          setWicon(rain_icon);
          break;
        case "13d":
        case "13n":
          setWicon(snow_icon);
          break;
        default:
          setWicon(cloud_icon);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      // Handle error, e.g., display a message to the user
      // Set default weather icon in case of error
      setWicon(cloud_icon);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="top-bar">
          <input type="text" className='cityInput' placeholder='search' />
          <div className="search-icon" onClick={search}>
            <img src={search_icon} alt="" />
          </div>
        </div>
        <div className="weather-image">
          <img src={wicon} alt="" />
        </div>
        <div className="weather-temp">81°C</div>
        <div className="weather-location">London</div>
        <div className="data-container">
          <div className="element">
            <img src={humidity_icon} alt="" />
            <div className="data">
              <div className="humidity-percent">64%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={wind_icon} alt="" />
            <div className="data">
              <div className="wind-rate">18km/h</div>
              <div className="text">Wind speed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
