import { ProductsVidContainerYb } from './styled-components/VidYb.styled';

function VidYb() { 
    return(
        <ProductsVidContainerYb>
             
             <iframe className="responsive-iframe" src="https://www.youtube.com/embed/3Ip4YM851ng?autoplay=1&mute=1&loop=1" title="Punto Damia"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

        </ProductsVidContainerYb>
    
    )
}

export default VidYb
