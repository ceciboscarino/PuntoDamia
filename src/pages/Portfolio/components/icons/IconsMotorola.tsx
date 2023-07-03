import { IconsMotorolaContainer } from "./styled-components"
import { FaReceipt } from "react-icons/fa";
import { BsFillStopwatchFill , BsCalendar2WeekFill } from "react-icons/bs";




function IconsMotorola() {

    return (
    <IconsMotorolaContainer>
       <img className="bigImage" src="./img/3.jpg" alt="motorola" />
       
        <div className="icons">
            <div className="div">
            <FaReceipt/>
            <p>Tenés 90 días de garantía en la reparación</p>    
        </div> 
        <div className="div">
            <FaReceipt/>
            <p>Tenés 90 días de garantía en la reparación</p>    
        </div> 
          
        <div className="div">
            <BsFillStopwatchFill/>

            <p>Lo reparamos en menos de 72 horas</p>    
        </div>         
            </div>
               

    </IconsMotorolaContainer>
  )
}
export default IconsMotorola