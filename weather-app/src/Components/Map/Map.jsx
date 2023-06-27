import React from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";




export function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCpcb8ZlQSTdLA3CRSEf6JB2Aw9NvIHM",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}




const Map = () => {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
    <Marker position={center} />
  </GoogleMap>
  );
};

export default Map;
