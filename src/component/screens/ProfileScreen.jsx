// // src/components/screens/ProfileScreen.jsx
// import React from 'react';

// const ProfileScreen = () => {
//   return <div style={{ padding: '20px' }}>👤 Profile Screen</div>;
// };

// export default ProfileScreen;

import React, { useState } from 'react';
import { MapPin, Flag } from 'lucide-react';
import {
  GoogleMap,
  LoadScript,
  DirectionsRenderer,
} from '@react-google-maps/api';

// Map container styling
const containerStyle = {
  width: '100%',
  height: '64.5vh',
  position: 'relative',
};

// Default center of the map (New Delhi)
const defaultCenter = {
  lat: 28.6139,
  lng: 77.2090,
};

// Replace with your actual Google Maps API key (keep it secure)
const GOOGLE_MAPS_API_KEY = 'AIzaSyA9eEEOCsycCV4jz2_QY-oa_LQtEWFxcp8';

const ProfileScreen = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [directions, setDirections] = useState(null);

  const handleInputChange = (setter) => (e) => setter(e.target.value);

  const handleStartNavigation = () => {
    if (!from.trim() || !to.trim()) {
      alert('Please enter both "From" and "To" addresses.');
      return;
    }

    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: from,
        destination: to,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          console.error('Directions request failed due to', status);
          alert('Could not find a route. Try different locations.');
        }
      }
    );
  };

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <div className="position-relative w-100">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={defaultCenter}
          zoom={10}
        >
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>

        {/* Control Panel at Bottom */}
        <div className="position-absolute bottom-2 start-0 end-0 bg-white p-2 shadow rounded-top">
          {/* <div className="row g-2 mb-2">
            <div className="col">
              <input
                type="text"
                value={from}
                onChange={handleInputChange(setFrom)}
                placeholder="From"
                className="form-control"
              />
            </div>
            <div className="col">
              <input
                type="text"
                value={to}
                onChange={handleInputChange(setTo)}
                placeholder="To"
                className="form-control"
              />
            </div>
          </div> */}
          <div className="mb-3">
  <div className="input-group">
    <span className="input-group-text">
      <MapPin size={16} />    {/* “From” icon */}
    </span>
    <input
      type="text"
      value={from}
      onChange={handleInputChange(setFrom)}
      placeholder="From"
      className="form-control"
      aria-label="From address"
    />
  </div>
</div>

<div className="mb-3">
  <div className="input-group">
    <span className="input-group-text">
      <Flag size={16} />      {/* “To” icon */}
    </span>
    <input
      type="text"
      value={to}
      onChange={handleInputChange(setTo)}
      placeholder="To"
      className="form-control"
      aria-label="To address"
    />
  </div>
</div>
<div style={{ display: 'flex', gap: '10px', height: '40px' }}>
  <button
    className="btn btn-primary fw-semibold d-flex justify-content-center align-items-center"
    style={{ flex: '2' }}
    onClick={handleStartNavigation}
  >
    <i className="bi bi-geo-alt-fill fs-5"></i>
  </button>

  <button
    className="btn btn-primary fw-semibold d-flex justify-content-center align-items-center gap-2"
    style={{ flex: '8' }}
    onClick={handleStartNavigation}
  >
    <i className="fa-solid fa-route fs-5"></i>
    <span>Start Navigation</span>
  </button>
</div>

        </div>
      </div>
    </LoadScript>
  );
};

export default ProfileScreen;
