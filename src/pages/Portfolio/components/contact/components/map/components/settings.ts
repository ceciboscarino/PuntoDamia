// Settings for the map goes inside this file
import mapStyles from './../mapStyles';

export const containerStyle = {
    width: '100%',
    height: '350px'
}
// Center on Kalmar
export const center = {
  lat: -26.8198,
  lng:  -65.2169
};

// Disable default UI
export const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true
};