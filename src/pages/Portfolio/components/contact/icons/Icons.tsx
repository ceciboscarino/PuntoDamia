import { IconsContainer } from "./styled-components"
import { MdDeliveryDining } from "react-icons/md";
import { BsTools } from "react-icons/bs";
import { GiPriceTag } from "react-icons/gi";
import { AiFillLock } from "react-icons/ai";

BsTools
function Icons() {

    return (
    <IconsContainer>
        <div className="div">
            <MdDeliveryDining/>
            <p>Envios gratis</p>    
        </div> 
        <div className="div">
            <BsTools/>
            <p>Garantia en todo nuestros arreglos</p>    
        </div> 
        <div className="div">
            <GiPriceTag/>
            <p>Las mejores ofertas</p>    
        </div> 
        <div className="div">
            <AiFillLock />
            <p>Seguridad en tus pagos</p>    
        </div> 
        

    </IconsContainer>
  )
}
export default Icons