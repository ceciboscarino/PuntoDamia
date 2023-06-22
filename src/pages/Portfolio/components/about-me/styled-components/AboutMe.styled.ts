import styled from 'styled-components';

export const AboutMeContainer = styled.div`
display: flex;
flex-direction: column;


.pay{
    display: flex;
    width: 100%;
    height: 40px;
    background-color: black;
    justify-content: center;
    align-items: center;

    h2{
    display: none;
    }
    img{
        height: 20px;
        width: auto;
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 10px;
        
    }
    
    
    @media (min-width: 786px) {
       flex-direction: row;
       height: 70px;
       align-items: baseline;
       align-items: center;
        h2{
        display: contents;
        color: white;
        
        

        
        } 
    img{
        height: 30px;
        padding-left: 40px;
        
    }
    }


}
/* .back{
  width: 100%;
  height: auto;
  display: flex;
  background-color: transparent;

} */
.animation {
  background-color: transparent ;
    --transition__duration: 7s;
    margin: 0;
    align-items: center;
    position: relative;
    
}
.imgUno {
  width: 100%;
    height: auto;
    z-index: -20px;
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    @media screen and (min-width: 786px) {
      display: flex;
      width: 100%;
    height: auto;
    z-index: -20px;
    position: relative;
    top: 0;
    left: 0;
}
}

.imgDos {
  width: 100%;
    height: auto;
    z-index: -20px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    @media screen and (min-width: 786px) {
      display: none;
      width: 100%;
    height: auto;
    z-index: -20px;
    position: relative;
    top: 0;
    left: 0;
}
}

.text{
  position: relative;
      top: 0;
      left: 0;
    @media screen and (min-width: 786px) {
      position: absolute;
      top: 0;
      left: 0;
    }
}

.body {
  background-color: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 8px;
  padding-left: 3%;
  
}
.waviy {
  position: relative;
  span {
  position: relative;
  display: inline-block;
  font-size: 35px;
  color: var(--main-color);
  text-transform: uppercase;
  animation: flip 2s infinite;
  animation-delay: calc(.2s * var(--i))
  
  

  }
@keyframes flip {
  0%,80% {
    transform: rotateY(360deg) 
  }
}
}



    p{
    text-align: justify;
    width: 50%;
    padding-left: 26%;
    padding-top: 15%;
    font-family: MontHeavy ;
    
    } 
  .center{
    text-align: center;
    padding-top: 0px;
    margin:0;
    margin-top: -16px;
    
  }
    


@media screen and (min-width: 786px) {
}
`



