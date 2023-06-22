import { CarrouselBrands } from "./components/carrousel-brands";
import { SkillsContainer } from ".";
import { VideoStore } from "./components/video-store";
import { TecText } from "./components/tec-text";



function Skills() {
    return (
        <SkillsContainer id="skills">

            <CarrouselBrands/>
            <VideoStore/>
            <TecText/>
        </SkillsContainer>
    )
}
export default Skills