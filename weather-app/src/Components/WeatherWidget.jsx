import React from 'react'
import { useState, useEffect } from 'react'


function WeatherWidget() {

 const [latitude, setLatitude] = useState(""); 
 const [longitude, setLongitude] = useState(""); 
 const [weather, setWeather] = useState(""); 

 
navigator.geolocation.getCurrentPosition((position)=>{


setLatitude(position.coords.latitude)
setLongitude(position.coords.longitude)

})



const getWeather = async () => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=51.5241077&lon=-0.5787913&appid=32a57476abc5b499fe67b430e82962d3`;
  const result = await fetch(url);
  const data = await result.json();
  setWeather(data);
  console.log(data)
};



    

useEffect(()=>{
// manages side effects 
getWeather();
},[setWeather()] // dependency array
 );


  return (


    <div>WeatherWidget {weather.main.temp}</div>

  )
}

export default WeatherWidget 
