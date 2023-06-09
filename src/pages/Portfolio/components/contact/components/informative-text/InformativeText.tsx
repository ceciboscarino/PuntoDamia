import { useContext } from "react";
import { InformativeTextContainer } from "./styled-components";
import { MapContext } from "./../../context";
import { LocalNombres } from "./../../../../models/Locales/Locales-model";



function InformativeText (){

    const {updateLocation} = useContext(MapContext)

    function handleTuc () {
        updateLocation(LocalNombres.CENTRO)
    }
    function handleYB () {
        updateLocation(LocalNombres.YB)
    }
    function handleSalta () {
        updateLocation(LocalNombres.SALTA)
    }

    return(
        <InformativeTextContainer>
            <h2>SUCURSALES</h2>
            <h3 onClick={handleTuc}>📍San Martin 895 - SMT</h3>
            {/* <hr/> */}
            <h3 onClick={handleYB} >📍Av. Aconquija 1420 - YB</h3>
            {/* <hr/> */}
            <h3 onClick={handleSalta} >📍Alberdi 110 - Salta</h3>
        </InformativeTextContainer>
    )
}

export default InformativeText