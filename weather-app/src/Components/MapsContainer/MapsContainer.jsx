import React, { useEffect, useRef } from "react";
import {
  GoogleMapsProvider,
  useGoogleMap,
} from "@ubilabs/google-maps-react-hooks";

const MapsContainer = ({ apiKey, zoom, center }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.addEventListener("load", initializeMap);

    return () => {
      script.removeEventListener("load", initializeMap);
    };
  }, [apiKey]);

  const initializeMap = () => {
    const map = new window.google.maps.Map(mapRef.current, {
      zoom,
      center,
    });

    const marker = new window.google.maps.Marker({
      position: center,
      map,
    });
  };

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
};

export default MapsContainer;
