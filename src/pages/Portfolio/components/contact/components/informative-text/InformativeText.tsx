import { useContext } from "react";
import { InformativeTextContainer } from "./styled-components";
import { MapContext } from "./../../context";
import { LocalNombres } from "./../../../../models/Locales/Locales-model";
import {RiWhatsappFill} from "react-icons/ri"



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
    function handleSuc () {
        updateLocation(LocalNombres.TODOS)
    }

    return(
        <InformativeTextContainer>
            <h2 onClick={handleSuc}>SUCURSALES</h2>
            <h3 onClick={handleTuc}>📍 San Martin 895 - SMT</h3>
            <a href="https://wa.me/5493816000000" target="_blank"><RiWhatsappFill/> 3816000000</a>
            {/* <hr/> */}
            <h3 onClick={handleYB} >📍 Av. Aconquija 1420 - YB</h3>
            <a href="https://wa.me/5493816848400" target="_blank"><RiWhatsappFill/> 3816848400</a>
            {/* <hr/> */}
            <h3 onClick={handleSalta} >📍 Alberdi 110 - Salta</h3>
            <a href="https://wa.me/5493875695496" target="_blank"><RiWhatsappFill/> 3875695496</a>
        </InformativeTextContainer>
    )
}

export default InformativeText