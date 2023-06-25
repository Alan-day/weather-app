import React, { useState, useEffect } from "react";
import "./WeatherWidget.scss";

function WeatherWidget(props) {
  const { longitude, latitude } = props;

  const [weather, setWeather] = useState({});
  const [time, setTime] = useState(new Date().getHours());
  const [temperatureinCelsius, setTemperatureinCelsius] = useState(0);
  const [icon, setIcon] = useState("");
  const [iconDescription, setIconDescription] = useState("");

  const [location, setLocation] = useState(0);

  console.log(time);

  const getWeather = async (lon, lat) => {
    //environment variable

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`;
    const result = await fetch(url);
    const data = await result.json();
    setWeather({ data });
    console.log(data);
  };

  const getIcon = () => {
    switch (
      weather.data &&
      weather.data.weather &&
      weather.data.weather &&
      weather.data.weather[0].main
    ) {
      case "Clear":
        setIcon("https://openweathermap.org/img/wn/01d@2x.png");
        setIconDescription("Clear Sky");

        break;

      case "Thunderstorm":
        setIcon("https://openweathermap.org/img/wn/11d@2x.png");
        setIconDescription("Thunderstorm");
        break;

      case "Drizzle":
        setIcon("https://openweathermap.org/img/wn/09d@2x.png");
        setIconDescription("Drizzle");
        break;

      case "Snow":
        setIcon("https://openweathermap.org/img/wn/13d@2x.png");
        setIconDescription("Snow");
        break;

      case "Mist" ||
        "Smoke" ||
        "Haze" ||
        "Dust" ||
        "Ash" ||
        "Squall" ||
        "Tornado":
        setIcon("https://openweathermap.org/img/wn/13d@2x.png");
        setIconDescription(
          `${
            weather.data &&
            weather.data.weather &&
            weather.data.weather &&
            weather.data.weather[0].main
          }`
        );
        break;

      case "Clouds":
        setIcon("https://openweathermap.org/img/wn/03d@2x.png");
        setIconDescription(
          `${
            weather.data &&
            weather.data.weather &&
            weather.data.weather &&
            weather.data.weather[0].main
          }`
        );
        break;

      default:
        setIconDescription("Sorry, icon unavailable");
        setIcon(
          "https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061131_1280.png"
        );
    }
  };

  useEffect(() => {
    getWeather(longitude, latitude);
  }, [latitude, longitude]);

  useEffect(() => {
    if (weather.data && weather.data.main && weather.data.main.temp) {
      setLocation(weather.data.name);

      const celsiusTemp = Math.trunc(weather.data.main.temp - 273.15);
      setTemperatureinCelsius(celsiusTemp);
    }
    getIcon();
  }, [weather]);

  return (
    <div className="widget">
      <p> Celsius: {temperatureinCelsius}°C</p>
      <p> Location: {location}</p>
      <img src={icon} className="widget__icon" />
      <p>{iconDescription}</p>
    </div>
  );
}

export default WeatherWidget;
