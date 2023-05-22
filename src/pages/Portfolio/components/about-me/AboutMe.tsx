import { AboutMeContainer , AboutMeImg} from ".";
import  aboutmeimage  from "./assets/4.jpg"
import 'transition-style';



function AboutMe() {
    return (
        <>
        <AboutMeContainer id="aboutme">
            <div transition-style="in:circle:top-right" className="animation">
                <h2>SOLUCIONES INTELIGENTES</h2>
                <div>
                    <AboutMeImg  alt= "picture" src= {aboutmeimage} />
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quia sequi impedit numquam quas amet provident cum voluptatibus deserunt voluptatem enim asperiores nam ipsa, odio officia molestiae nobis ea quisquam.</p>
                    
                </div>
            </div>
        </AboutMeContainer>
        </>
    )
}
export default AboutMe

