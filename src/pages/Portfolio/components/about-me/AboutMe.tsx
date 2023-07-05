
import {ProductsVid} from "./components/products-vid";
import { AboutMeContainer } from ".";
import 'transition-style';




function AboutMe() {

    const estilo1 = {
        '--i': "1",
    } as React.CSSProperties;
    const estilo2 = {
        '--i': "2",
    } as React.CSSProperties;
    const estilo3 = {
        '--i': "3",
    } as React.CSSProperties;
    const estilo4 = {
        '--i': "4",
    } as React.CSSProperties;
    const estilo5 = {
        '--i': "5",
    } as React.CSSProperties;
    const estilo6 = {
        '--i': "6",
    } as React.CSSProperties;
    const estilo7 = {
        '--i': "7",
    } as React.CSSProperties;
    const estilo8 = {
        '--i': "8",
    } as React.CSSProperties;
    const estilo9 = {
        '--i': "9",
    } as React.CSSProperties;
    const estilo10 = {
        '--i': "10",
    } as React.CSSProperties;
    const estilo11 = {
        '--i': "11",
    } as React.CSSProperties;
    const estilo12 = {
        '--i': "12",
    } as React.CSSProperties;
    const estilo13 = {
        '--i': "13",
    } as React.CSSProperties;


    return (
        <AboutMeContainer id="aboutme">
            <div className="pay">
                <img src="./img/american.png" alt="american express" />
                <img src="./img/visa.png" alt="visa" />
                <img src="./img/master.png" alt="mastercard" />
            </div>

            <div transition-style="in:circle:top-right" className="animation">
                <img src="./img/5.jpg" alt="Evolucionamos" className="imgUno" />
                <img src="./img/alta.jpg" alt="Evolucionamos" className="imgDos" />
                <div className="text">
                    <div className="body">
                        <div className="waviy">
                            <span style={estilo1}>E</span>
                            <span style={estilo2}>V</span>
                            <span style={estilo3}>O</span>
                            <span style={estilo4}>L</span>
                            <span style={estilo5}>U</span>
                            <span style={estilo6}>C</span>
                            <span style={estilo7}>I</span>
                            <span style={estilo8}>O</span>
                            <span style={estilo9}>N</span>
                            <span style={estilo10}>A</span>
                            <span style={estilo11}>M</span>
                            <span style={estilo12}>O</span>
                            <span style={estilo13}>S</span>
                        </div>
                    </div>
                    <p>
                        Entendemos que tus dispositivos tecnológicos son vitales para vos. Nos destacamos en la venta y cuidado de estos equipos, ofreciendo atención personalizada y soluciones duraderas. Estamos en constante crecimiento, buscando mejorar la experiencia del cliente y mantenernos a la vanguardia en tecnología. Agradecemos tu apoyo en este emocionante viaje.

                    </p>
                </div>
            </div>
             <ProductsVid/>


        </AboutMeContainer>
        
    )
}
export default AboutMe

