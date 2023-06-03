import { MapContainer , LoadingView  } from "./styled-components";
import React from 'react';
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api';
import { useQuery } from 'react-query';
// API Calls
import { fetchNearbyPlaces, fetchWeather } from './api';
// Map Settings
import { containerStyle, center, options } from './components/settings';
// Components
import CurrentLocation from './components/current-location/CurrentLocation';
// Image
import imageLocal from './../../../../../../../public/favicon.svg';
// Styles



export type WeatherType = {
  temp: number;
  text: string;
};

export type MarkerType = {
  id: string;
  location: google.maps.LatLngLiteral;
  name: string;
  phone_number: string;
  website: string;
};

const LocalCentro : google.maps.LatLngLiteral = {
        lat: -26.828231444424773,
        lng:  -65.21041036141496 
         
}
const LocalYerbaBuena : google.maps.LatLngLiteral = {
        lat: -26.81383669867012,
        lng:  -65.29069517490667 
         
}
const LocalSalta : google.maps.LatLngLiteral = {
        lat: -24.791026336029987,
        lng:  -65.41138633265447 
         
}

const MapLocation: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_BASE_MAP
  })



  // Save map in ref if we want to access the map
  const mapRef = React.useRef<google.maps.Map | null>(null);

  const [clickedPos, setClickedPos] = React.useState<google.maps.LatLngLiteral>({} as google.maps.LatLngLiteral);
  const [selectedMarker, setSelectedMarker] = React.useState<MarkerType>({} as MarkerType);


  const moveTo = (position: google.maps.LatLngLiteral) => {
    if (mapRef.current) {
      mapRef.current.panTo({ lat: position.lat, lng: position.lng });
      mapRef.current.setZoom(12);
      setClickedPos(position);
    }
  };

  const onLoad = (map: google.maps.Map): void => {
    mapRef.current = map;
    
const bounds = new google.maps.LatLngBounds();
    markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    map.fitBounds(bounds);  
  };

  const onUnMount = (): void => {
    mapRef.current = null;
  };

//   const onMapClick = (e: google.maps.MapMouseEvent) => {
//     setClickedPos({ lat: e.latLng.lat(), lng: e.latLng.lng() });
//     setSelectedMarker({} as MarkerType);
//   };

  const onMarkerClick = (marker: MarkerType) => setSelectedMarker(marker);

  const markers = [
        { lat: -26.828231444424773, lng: -65.21041036141496 },
        { lat: -26.81383669867012, lng: -65.29069517490667  },
        { lat: -24.791026336029987, lng: -65.41138633265447  },
      ]; 

 const handleLocal = () => {
        console.log('1')
 }

  if (!isLoaded) return <LoadingView>Map Loading ...</LoadingView>;

  return (
    <MapContainer>
      {/* <CurrentLocation moveTo={moveTo} /> */}
      <GoogleMap
        mapContainerStyle={containerStyle}
        options={options as google.maps.MapOptions}
        center={center}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnMount}
        
        //onClick={onMapClick}
      >
        {/* {markers.map(({  lat, lng }, ind) => (
            <Marker
              key={ind}
              position={{ lat, lng }}
              onClick={() => {
                console.log()
              }}
              icon={{
                url: "https://mascotas.tucuman.gov.ar/tuc/punto.svg",
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15),
                scaledSize: new window.google.maps.Size(30, 30)
              }}
            />
              
            
          ))} */}


        <Marker
            key='h77d'
            position={LocalCentro}
            onClick={handleLocal}
            icon={{
                url: "https://mascotas.tucuman.gov.ar/tuc/punto.svg",
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15),
                scaledSize: new window.google.maps.Size(30, 30)
              }}
            
          />
        <Marker
            key='1h7'
            position={LocalYerbaBuena}
            onClick={handleLocal}
            icon={{
              url: imageLocal,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30)
            }}
          />
          <Marker
            key='h2'
            position={LocalSalta}
            onClick={handleLocal}
            icon={{
              url: imageLocal,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30)
            }}

            />
            

        
      </GoogleMap>
      
    </MapContainer>
  );
};

export default MapLocation;