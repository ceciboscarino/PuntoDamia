import { useEffect, useState } from 'react';
import { CarouselButton, CarouselContainer, CarouselImg } from './styled-components';

interface CarouselProps {
    images: string[];
    autoPlay?: boolean;
    showButtons?: boolean;
}


export default function Carousel(props : CarouselProps) {
    
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedImage, setSelectedImage] = useState(props.images[0])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (props.autoPlay || !props.showButtons) {
          const interval = setInterval(() => {
            selectNewImage(selectedIndex, props.images);
          }, 2000);
          return () => clearInterval(interval);
        }
      });

      

    const selectNewImage = (index: number, images: string[], next = true) => {
        setLoaded(false)
        setTimeout(() => {
            const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
            const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : (condition ? selectedIndex - 1 : images.length - 1);
            setSelectedImage(images[nextIndex]);
            setSelectedIndex(nextIndex);
        }, 500) ;
    }

    const previous = () => {
        selectNewImage(selectedIndex, props.images, false)
        
    }
    const next = () => {
        selectNewImage(selectedIndex, props.images)
    }


  return (
    <> 
        <CarouselImg 
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        src={`img/${selectedImage}`}
        alt="carousel" 
        className={loaded ? 'loaded' : ''}
        onLoad={ () => {setLoaded(true)}}
        />
        <CarouselContainer>
        {props.showButtons ? (
          <>
            <CarouselButton onClick={previous}>{"<"}</CarouselButton>
            <CarouselButton onClick={next}>{">"}</CarouselButton>
          </>
        ) : (
          <></>
        )}
      </CarouselContainer>
    </>
  )
}

