import { AboutMeContainer , AboutMeImg} from ".";
import  aboutmeimage  from "./assets/ceci.jpg"
import 'transition-style';



function AboutMe() {
    return (
        <>
        <AboutMeContainer id="aboutme">
            <div transition-style="in:circle:top-right" className="animation">
                <h1>Nosotros</h1>
                <div>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quia sequi impedit numquam quas amet provident cum voluptatibus deserunt voluptatem enim asperiores nam ipsa, odio officia molestiae nobis ea quisquam.</p>
                    
                    <AboutMeImg  alt= "picture" src= {aboutmeimage} />
                </div>
            </div>
        </AboutMeContainer>
        </>
    )
}
export default AboutMe

