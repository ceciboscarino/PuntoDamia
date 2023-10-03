
import { ProductsVidContainer } from './styled-components/Products.Vid.styled';

function ProductsVid() { 
    return(
        <ProductsVidContainer>
             
             <iframe className="responsive-iframe" src="https://www.youtube.com/embed/MFrIA8gloYc?autoplay=1&mute=1&loop=1" title="Punto Damia"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

        </ProductsVidContainer>
    
    )
}

export default ProductsVid



