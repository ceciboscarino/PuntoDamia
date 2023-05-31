
import { MapLocation } from "@/";
import { InformativeText } from "./components/informative-text"
import {SocialMedia} from "./components/social-media-buttons";
import { ContactContainer } from "./styled-components";


function Contact() {
    return (
        <ContactContainer id="contact">
            <SocialMedia/>
            <InformativeText/>
            
            </ContactContainer>)

}
            export default Contact