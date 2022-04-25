import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});

  function handleRespose(response) {
    console.log(response.data);
    setWeatherData({
    ready: true,
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    date: "Wednesday 07:00",
    description: response.data.weather[0].description,
    iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    wind: response.data.wind.speed,
    city: response.data.name
    });
    

    setTemperature();
    setReady(true);
  }

  if {weatherData.ready} {
   return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>{weatherData.city}</h1>
      <ul>
        <li>{weatherData.date}</li>
        <li className="text-capitalize" >{weatherData.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature"> {Math.round(weatherData.temperature)}</span>
              <span className="unit">°C </span>
            </div>
          </div>
        </div>

        <div className="col-6">
          <ul>
            
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
  }

  else {
  const apiKey = "99c587a753538c833a3de423da21d010";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleRespose);

  return "Loading...";
  }
}
