import { AboutMeContainer } from ".";
import 'transition-style';



function AboutMe() {
    return (
        <AboutMeContainer id="aboutme">
            <h3>SOLUCIONES INTELIGENTES</h3>
            <div transition-style="in:circle:top-right" className="animation">
            <p> Somos los aliados que necesitas</p>
            </div>
        </AboutMeContainer>
    )
}
export default AboutMe

