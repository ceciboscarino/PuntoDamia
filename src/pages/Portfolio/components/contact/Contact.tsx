
import { MapLocation } from "./components/map";
import { InformativeText } from "./components/informative-text"
import {SocialMedia} from "./components/social-media-buttons";
import { ContactContainer } from "./styled-components";
import { MapContextProvider } from "./context";


function Contact() {



    return (
        <ContactContainer id="contact">
            <SocialMedia/>
            <MapContextProvider >
                <div className="location">

                    <InformativeText/>
                    <MapLocation/>
                </div>
            </MapContextProvider>
            <div className="copy">
                <h3>Ceci-copyright</h3>
            </div>
        </ContactContainer>)

}
            export default Contact