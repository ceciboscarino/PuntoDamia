import styled from 'styled-components';

export const AboutMeContainer = styled.div`

h3{
    
    color: #fff;
    top: 0;
}
div{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    z-index: 1;
    
    }


    
    p{
        text-align: center;
        color: #fff;
    }

.animation{
    background-color: rgb(0,174,239);
    --transition__duration: 7s;
    margin: 0;
    
}
@media screen and (min-width: 786px) {
.us {
    
    
}
p{
    
    z-index: 10px;
}
img{
    padding-bottom: 50px;
    
    width: 100%;
}
h3{
    display: none;
}

}

`;
export const  AboutMeImg = styled.img`
width: 100%;
height: auto;
`;


