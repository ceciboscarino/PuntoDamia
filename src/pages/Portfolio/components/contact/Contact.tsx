
import { MapLocation } from "./components/map";
import { InformativeText } from "./components/informative-text"
import {SocialMedia} from "./components/social-media-buttons";
import { ContactContainer } from "./styled-components";
import { MapContextProvider } from "./context";


function Contact() {



    return (
        <ContactContainer id="contact">
            <SocialMedia/>
                  <div className="division">
                    </div>        
            <MapContextProvider >
                <div className="location">

                    <InformativeText/>
                    <MapLocation/>
                </div>
               
            </MapContextProvider>
            <div className="copy">
                <p>Creado con 🤍 por Ceci</p>
                <p className="right">Copyright© Todos los derechos reservados.</p>
                </div>
        </ContactContainer>)

}
            export default Contact