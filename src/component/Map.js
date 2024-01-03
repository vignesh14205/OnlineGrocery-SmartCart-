import React from 'react';
import { GoogleMap, LoadScript, Autocomplete } from '@react-google-maps/api';

const Map = () => {
  const mapStyles = {
    height: '50vh',
    width: '100%',
  };

  const center = {
    lat: 0,
    lng: 0,
  };

  const onLoad = (autocomplete) => {
    console.log('Autocomplete loaded:', autocomplete);
  };

  const onPlaceChanged = () => {
    const autocomplete = document.getElementById('autocomplete');
    const address = autocomplete.value;

    console.log('Selected Address:', address);
    // You can do further processing with the selected address here
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBZJZUk51Iz6CfHqtgkx6Io7OKqh-okarM"
      libraries={['places']}
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        center={center}
        zoom={2}
      >
        <Autocomplete
          onLoad={onLoad}
          onPlaceChanged={onPlaceChanged}
        >
          <input
            type="text"
            id="autocomplete"
            placeholder="Enter your address"
            style={{ width: '100%' }}
          />
        </Autocomplete>
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
