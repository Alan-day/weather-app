import React, { useState, useEffect } from 'react';
import "./WeatherWidget.scss";


function WeatherWidget(props) {

  const {longitude, latitude } = props; 

  const [weather, setWeather] = useState({});


  const [temperatureinCelsius, setTemperatureinCelsius] = useState(0);

  const [location, setLocation] = useState(0);

  const getWeather = async (lon, lat) => {
    console.log(lon, lat);
  //environment variable 

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=32a57476abc5b499fe67b430e82962d3`;
    const result = await fetch(url);
    const data = await result.json();
    setWeather({ data });
    console.log(data)
    
  };

  useEffect(() => {
    getWeather(longitude, latitude);
  }, [latitude, longitude]);

  useEffect(() => {
    if (weather.data && weather.data.main && weather.data.main.temp) {
      setLocation(weather.data.name)


      const celsiusTemp = Math.trunc(weather.data.main.temp - 273.15);
      setTemperatureinCelsius(celsiusTemp);
    }
  }, [weather]);

  return (
    <div className='widget'>
      
      <p> Celsius:  {temperatureinCelsius}°C</p>
      <p>  Location: {location}</p>
    </div>
  );
}

export default WeatherWidget;
