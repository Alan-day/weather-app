import "./App.css";
import WeatherWidget from "./Components/WeatherWidget/WeatherWidget";
import { useEffect, useState } from "react";
import Greeting from "./Components/Greeting/Greeting";
import Map from "./Components/Map/Map";
import List from "./Components/List/List";
import MapsContainer from "./Components/MapsContainer/MapsContainer";

function App() {
  const [location, setLocation] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const zoom = 10;
  const center = { lat: 51.5218, lng: -0.7242 };

  return (
    <div className="App">
      <Greeting />
      {location ? (
        <WeatherWidget
          longitude={location.longitude}
          latitude={location.latitude}
        />
      ) : null}

      <List />

      <MapsContainer apiKey={apiKey} zoom={zoom} center={center} />
    </div>
  );
}

export default App;
