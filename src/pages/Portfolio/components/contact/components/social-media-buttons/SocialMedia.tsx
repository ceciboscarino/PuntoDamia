import { SocialMediaContainer } from "."



export default function SocialMedia () {
    return (
        <SocialMediaContainer>
            <div className="button">
                <div className="icon">
                    <i className="fa fa-facebook"></i>
                </div>
            <a href="https://www.facebook.com/puntodamia" target="_blank"  >
                <span>Facebook</span>
            </a>
            </div>
                <div className="button">
                <div className="icon">
                    <i className="fa fa-instagram"></i>
                </div>
            <a href="https://www.instagram.com/puntodamia" target="_blank">
                <span>Instagram</span>
            </a>
                </div>
            {/* <div className="button">
                <div className="icon">
                    <i className="fa fa-whatsapp"></i>
                </div>
            <a href="https://wa.me/5493816000666" target="_blank">
                <span>Whatsapp</span>
                </a>
            </div> */}
           
            
        </SocialMediaContainer>
    )
}