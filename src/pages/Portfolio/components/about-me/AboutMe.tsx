import { AboutMeContainer } from ".";
import 'transition-style';



function AboutMe() {
    return (
        <AboutMeContainer id="aboutme">
            <h3>SOLUCIONES INTELIGENTES</h3>
            <div transition-style="in:circle:top-right" className="animation">
            <img src="./img/5.jpg" alt="" />
            </div>
        </AboutMeContainer>
    )
}
export default AboutMe

