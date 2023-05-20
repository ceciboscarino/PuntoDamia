import { SocialMediaContainer } from "."



export default function SocialMedia () {
    return (
        <SocialMediaContainer>
            <div className="button">
                <div className="icon">
                    <i className="fab fa-facebook-f"></i>
                </div>
                <span>Facebook</span>
            </div>
            <div className="button">
                <div className="icon">
                    <i className="fab fa-instagram"></i>
                </div>
                <span>Instagram</span>
            </div>
            <div className="button">
                <div className="icon">
                    <i className="fab fa-whatsapp"></i>
                </div>
                <span>Whatsapp</span>
            </div>
            
        </SocialMediaContainer>
    )
}