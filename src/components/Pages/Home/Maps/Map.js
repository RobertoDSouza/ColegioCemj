import React from "react";


import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '65vw',
  height: '20vw',
  maxHeight: '350px'
};

const center = {
  lat: -8.00593,
  lng: -35.03650
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDv7YRz1WWPhkr6aim8wEm4WDPBdk81z54"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)