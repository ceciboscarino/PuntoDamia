import { AboutMeContainer } from ".";
import 'transition-style';



function AboutMe() {
    return (
        <AboutMeContainer id="aboutme">
            <h3>SOLUCIONES INTELIGENTES</h3>
            <div transition-style="in:circle:top-right" className="animation">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quia sequi impedit numquam quas amet provident cum voluptatibus deserunt voluptatem enim asperiores nam ipsa, odio officia molestiae nobis ea quisquam.</p>
            </div>
        </AboutMeContainer>
    )
}
export default AboutMe

