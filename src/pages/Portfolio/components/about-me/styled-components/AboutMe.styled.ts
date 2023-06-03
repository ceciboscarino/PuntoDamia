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
.animation{
    background-color: transparent ;
    --transition__duration: 7s;
    margin: 0;
    
}
img{
    width: 100%;
    height: auto;
}
@media screen and (min-width: 786px) {
}
`



