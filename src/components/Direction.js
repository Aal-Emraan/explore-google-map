import React, { useState } from 'react';
import { DirectionsRenderer, GoogleMap, LoadScript, DirectionsService  } from '@react-google-maps/api';

const containerStyle = {
    width: "100vw",
    height: "100vh"
};

const location = {
    lat: 23.810331,
    lng: 90.412521
};

const Direction = ({origin, destination}) => {

    const [response, setResponse] = useState(null);

    const directionsCallback = res => {
        if(res != null){
            setResponse(res);
            console.log(res);
        }
    }
    return (
        <div>
            <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
            >
                <GoogleMap
                // required
                id='direction-example'
                // required
                mapContainerStyle={containerStyle}
                // required
                zoom={12}
                // required
                center={location}
                >
                {
                
                     <DirectionsService
                    // required
                    options={{ 
                        origin: origin,
                        destination: destination,
                        travelMode: "DRIVING"
                    }}
                    // required
                    callback={directionsCallback}
                    />
                
                }

                {
                response !== null && (
                    <DirectionsRenderer
                    // required
                    options={{
                        directions: response
                    }}
                    />
                )
                }
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Direction;