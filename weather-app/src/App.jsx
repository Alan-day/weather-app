import "./App.css";
import WeatherWidget from "./Components/WeatherWidget/WeatherWidget";
import { useEffect, useState } from "react";
import Greeting from "./Components/Greeting/Greeting";
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

  return (
    <div className="App">
      <Greeting />
      {location ? (
        <WeatherWidget
          longitude={location.longitude}
          latitude={location.latitude}
        />
      ) : null}
    </div>
  );
}

export default App;
