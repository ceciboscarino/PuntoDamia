
import { MapLocation } from "./components/map";
import { InformativeText } from "./components/informative-text"
import {SocialMedia} from "./components/social-media-buttons";
import { ContactContainer } from "./styled-components";


function Contact() {
    return (
        <ContactContainer id="contact">
            <SocialMedia/>
            <div className="location">
                <InformativeText/>
                <MapLocation/>
            </div>
            <div className="copy">
                <h3>Ceci-copyright</h3>
            </div>
        </ContactContainer>)

}
            export default Contact