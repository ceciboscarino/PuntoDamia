import { SocialMediaContainer } from "."



export default function SocialMedia () {
    return (
        <SocialMediaContainer>
            <div className="button">
                <div className="icon">
                    <i className="fab fa-facebook-f"></i>
                    <span>Facebook</span>
                </div>
            </div>
            <div className="button">
                <div className="icon">
                    <i className="fab fa-instagram"></i>
                    <span>Instagram</span>
                </div>
            </div>
            <div className="button">
                <div className="icon">
                    <i className="fab fa-whatsapp"></i>
                    <span>Whatsapp</span>
                </div>
            </div>
            
        </SocialMediaContainer>
    )
}