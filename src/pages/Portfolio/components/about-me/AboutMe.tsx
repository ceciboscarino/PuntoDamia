import { AboutMeContainer } from ".";
import 'transition-style';



function AboutMe() {
    return (
        <AboutMeContainer id="aboutme">
            <div className="pay">
                <h2>Todos los medios de pago</h2>
                <div>
                <img src="./img/american.png" alt="american express"/>
                <img src="./img/visa.png" alt="visa"/>
                <img src="./img/master.png" alt="mastercard"/>
                </div>
            </div> 
            <div transition-style="in:circle:top-right" className="animation">
            <img src="./img/5.jpg" alt="" />
            </div>
        </AboutMeContainer>
    )
}
export default AboutMe

