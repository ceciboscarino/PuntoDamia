import { MapContainer, LoadingView } from "./styled-components";
import React, { useEffect, useState, useContext } from 'react';
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api';
// Map Settings
import { containerStyle, center, options } from './components/settings';
// Image
import imageLocal from './../../../../../../../public/favicon.svg';
import { MapContext } from "../../context";
import { LocalNombres } from "./../../../../models/Locales/Locales-model";



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
const Ubications = [
  {
    lat: -26.828231444424773,
    lng: -65.21041036141496

  },
  {
    lat: -26.81383669867012,
    lng: -65.29069517490667

  },
  {
    lat: -24.791026336029987,
    lng: -65.41138633265447

  }

]
const LocalCentro: google.maps.LatLngLiteral = {
  lat: -26.828221870409624,
  lng: -65.21037817423061

};

const LocalCentroZoom: google.maps.LatLngLiteral[] = [{
  lat: -26.828221870409624,
  lng: -65.21037817423061
}, 
{
  lat: -26.82590277519979,
  lng: -65.21468109159062

},
{
  lat: -26.833674462936827,
  lng: -65.20562289090842

}];


const LocalYerbaBuena: google.maps.LatLngLiteral = {
  lat: -26.813779247233438,
  lng: -65.29068444313238

};

const LocalYBZoom: google.maps.LatLngLiteral[] = [{
  lat: -26.813779247233438,
  lng: -65.29068444313238
}, 
{
  lat: -26.81178279305711,
  lng: -65.29317166388093

},
{
  lat: -26.816462814175924,
  lng: -65.28995644422005

}];


const LocalSalta: google.maps.LatLngLiteral = {
  lat: -24.791026336029987,
  lng: -65.41138633265447

};

const LocalSaltaZoom: google.maps.LatLngLiteral[] = [{
  lat: -24.791026336029987,
  lng: -65.41138633265447
}, 
{
  lat: -24.78740296573404,
  lng: -65.41509850939251

},
{
  lat: -24.79483465668742,
  lng: -65.40784581617609

}];


export const markers = [
  { lat: -26.828231444424773, lng: -65.21041036141496 },
  { lat: -26.81383669867012, lng: -65.29069517490667 },
  { lat: -24.791026336029987, lng: -65.41138633265447 },
];



function MapLocation() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true)

    }, 100)
  }, []);

  const { activeLocation } : { activeLocation: string }  = useContext(MapContext); 
  
  const [activeLocal, setActiveLocal] = useState<string>(LocalNombres.TODOS) 
  

  useEffect(() => {
    const newZoom = () => { 
      if (mapRef.current) {
       
        const zoom = new google.maps.LatLngBounds();
       console.log(activeLocation)
      if (activeLocal == activeLocation) {

        markers?.map((value : google.maps.LatLngLiteral) => { zoom.extend( value )})
            mapRef.current?.fitBounds(zoom);
            setActiveLocal(LocalNombres.TODOS)
          } else {
        console.log('siiii1')
        setActiveLocal(activeLocation)
        switch ( activeLocation){

          case LocalNombres.CENTRO:          
            LocalCentroZoom?.map((value : google.maps.LatLngLiteral) => { zoom.extend( value )})
            mapRef.current?.fitBounds(zoom);
            return 'C'
          case LocalNombres.YB:
          
          LocalYBZoom?.map((value : google.maps.LatLngLiteral) => { zoom.extend( value )})
          mapRef.current?.fitBounds(zoom);
          return'D'
          case LocalNombres.SALTA: 
          LocalSaltaZoom?.map((value : google.maps.LatLngLiteral) => { zoom.extend( value )})
          mapRef.current?.fitBounds(zoom);
          return 'f'
          case LocalNombres.TODOS: 
          markers?.map((value : google.maps.LatLngLiteral) => { zoom.extend( value )})
          mapRef.current?.fitBounds(zoom);
          return 't'
          default:
            return null

        }
      }

        

           
          
          // } 
        }
        
      }
    newZoom()
  }, [activeLocation]);



  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_BASE_MAP
  });



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
    console.log(activeLocation)
    const bounds = new google.maps.LatLngBounds();
    markers?.forEach((value : google.maps.LatLngLiteral) => { bounds.extend( value )})
    //markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    map.fitBounds(bounds);
  };

    // const bounds = new google.maps.LatLngBounds();
    // markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    // activeLocation?.map(( value ) => bounds.extend( value ));
   
 
  const onUnMount = (): void => {
    mapRef.current = null;
  };

  //   const onMapClick = (e: google.maps.MapMouseEvent) => {
  //     setClickedPos({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  //     setSelectedMarker({} as MarkerType);
  //   };

  const onMarkerClick = (marker: MarkerType) => setSelectedMarker(marker);



  const handleLocal = () => {
    console.log('1')
  }

  if (!isLoaded) return <LoadingView>Map Loading ...</LoadingView>;

  const GetLocations = () => {
    return (

      <>
        <Marker
          key={1200}
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
          key={1}
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
          key={2222}
          position={LocalSalta}
          onClick={handleLocal}
          icon={{
            url: imageLocal,
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(15, 15),
            scaledSize: new window.google.maps.Size(30, 30)
          }}

        />
      </>
    )
  }

  return (
    <>
      <MapContainer>
       
          <GoogleMap
            mapContainerStyle={containerStyle}
            options={options as google.maps.MapOptions}
            center={center}
            zoom={12}
            onLoad={onLoad}
            onUnmount={onUnMount}
            
          //onClick={onMapClick}
          >

            {loading &&

              GetLocations()

            }



          </GoogleMap>
        
      
      </MapContainer>
    </>
  );
}

export default MapLocation;