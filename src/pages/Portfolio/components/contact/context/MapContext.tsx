import { createContext, useState } from "react" 
import { LocalNombres } from "./../../../models/Locales/Locales-model";

export const MapContext = createContext({} as any)


interface Props {
    activeLocation: string;
    updateLocation: (location: google.maps.LatLngLiteral[]) => void ; 
}

export function MapContextProvider({children}: any)   {
    const [activeLocation, setActiveLocation] = useState<string>(LocalNombres.TODOS);
    
    const updateLocation =  (location: string) => {
      setActiveLocation(location)
    }
     
    return (
      <MapContext.Provider value={{activeLocation: activeLocation , updateLocation: updateLocation}}>
        {children}
      </MapContext.Provider>
    )
  }


