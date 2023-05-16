import { AboutMeContainer , AboutMeImg} from ".";
import  aboutmeimage  from "./assets/ceci.jpg"
import 'transition-style';



function AboutMe() {
    return (
        <div transition-style="in:circle:bottom-right">
            <AboutMeContainer id="aboutme">
                <h1>Nosotros</h1>
                <div>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quia sequi impedit numquam quas amet provident cum voluptatibus deserunt voluptatem enim asperiores nam ipsa, odio officia molestiae nobis ea quisquam.</p>
                    
                    <AboutMeImg  alt= "picture" src= {aboutmeimage} />
                </div>
            </AboutMeContainer>
        </div>
    )
}
export default AboutMe