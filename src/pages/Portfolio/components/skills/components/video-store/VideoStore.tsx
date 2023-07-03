
import { VideoStoreContainer } from "./styled-components"

function VideoStore() {
  return (

    <VideoStoreContainer>
      <img src="./img/7.jpg" alt="Lensun" />
      <div className="out">
        <div className="inside" >

          <h2>LENSUN</h2>
          <p>
            Con 17 años de experiencia en la industria, LENSUN ha desarrollado una gama de películas frontales de alta calidad con alta consistencia, examinando materias primas y siguiendo un sólido proceso de producción y un sistema de inspección de calidad.
            En el perfeccionamiento de la película frontal se desarrollan nuevos materiales, para llevar más funciones de protección a diferentes tamaños o modelos de productos electrónicos.

            NANOTECNOLOGÍA
            Adoptando la nanotecnología, nuestra Nano Película UV tiene las características de alta resolución, antiarañazos, antiexplosión, absorción de impactos y ajuste perfecto, siendo el protector más vendido en el mercado hoy en día.
          </p>
        </div>
        {/* <iframe className="responsive-iframe" src="https://www.youtube.com/embed/Fa2hRzyvJTw?autoplay=1&mute=1&controls=1&loop=1&playlist=mLQfltyzj7o" title="Punto Damia"  ></iframe> */}
        <iframe width="100%" height="auto" src="https://www.youtube.com/embed/rrw5ipHRDxU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </VideoStoreContainer>
  )
}


export default VideoStore