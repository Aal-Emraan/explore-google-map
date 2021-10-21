import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: "100vw",
    height: "100vh"
};

const center = {
    lat: 23.810331,
    lng: 90.412521
};

const Map = () => {
    return (
        <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    );
};

export default Map;