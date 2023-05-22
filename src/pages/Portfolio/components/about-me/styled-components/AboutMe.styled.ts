import styled from 'styled-components';

export const AboutMeContainer = styled.div`

h2{
    
    color: #fff;
    top: 0;
}
div{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    z-index: 1;
    

    p{
        text-align: center;
        color: #fff;
    }

    @media screen {
        
    }
}

.animation{
    background-color: rgb(0,174,239);
    --transition__duration: 7s;
    margin: 0;
    
}

`;
export const  AboutMeImg = styled.img`
width: 100%;
height: auto;
`;


