import { AboutMeContainer , AboutMeImg} from ".";
import  aboutmeimage  from "./assets/4.jpg"
import 'transition-style';



function AboutMe() {
    return (
        <>
        <AboutMeContainer id="aboutme">
            <div transition-style="in:circle:top-right" className="animation">
                <h3>SOLUCIONES INTELIGENTES</h3>
                <div className="us">
                    <AboutMeImg  alt= "picture" src= {aboutmeimage} />
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quia sequi impedit numquam quas amet provident cum voluptatibus deserunt voluptatem enim asperiores nam ipsa, odio officia molestiae nobis ea quisquam.</p>
                    
                </div>
            </div>
        </AboutMeContainer>
        </>
    )
}
export default AboutMe

