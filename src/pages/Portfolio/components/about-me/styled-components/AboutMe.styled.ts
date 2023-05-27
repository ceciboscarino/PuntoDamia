import styled from 'styled-components';

export const AboutMeContainer = styled.div`
display: flex;
flex-direction: column;

h3{
    
    color: #fff;
    top: 0;
    background-color: black;
    height: 30px;
    margin:0px;
    text-align: center;
    padding-top: 10px;
    z-index: 1;
    lign-items: center;
    

}

    p{
        text-align: right;
        padding-top:30%;        
        
    }

.animation{
    background-image: url("./img/images.jpeg") ;
    --transition__duration: 7s;
    margin: 0;
    background-repeat: no-repeat;
    width: auto;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-color: #ffffff;
    
    
}
@media screen and (min-width: 786px) {
}
`



