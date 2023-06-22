import { IconsMotorolaContainer } from "./styled-components"
import { FaReceipt } from "react-icons/Fa";
import { BsFillStopwatchFill , BsCalendar2WeekFill } from "react-icons/bs";




function IconsMotorola() {

    return (
    <IconsMotorolaContainer>
        <div className="text"><h1 className="servicio">servicio</h1><h1> tecnico autorizado</h1></div>
        <div className="icons">
            <div className="div">
            <FaReceipt/>
            <p>Tenés 90 días de garantía en la reparación</p>    
        </div> 
        <div className="div">
            <BsFillStopwatchFill/>

            <p>Lo reparamos en menos de 72 horas</p>    
        </div> 
        <div className="div">
            <BsCalendar2WeekFill/>
            <p>Las mejores ofertas</p>    
        </div> 
            </div>
       <div className="logo">
       <img src="img/motorola2.png" alt= "motorola" width="40%" />
        </div>
        

    </IconsMotorolaContainer>
  )
}
export default IconsMotorola