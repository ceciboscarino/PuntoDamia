import styled from 'styled-components';

export const ContactContainer = styled.div`
flex-direction: column;
padding-top: 40px;

height: 300px;
display: flex;
width: 100%;
height: auto;
place-items: center;
background: 	rgb(242, 242, 242);
align-items: center;


.location{
width: 100%;
height: auto;
margin-top: 50px;
display  : flex ;
flex-direction: column;
justify-content: center;
background-color: var(--main-color);



@media (min-width: 786px) {
    display: flex;
    flex-direction: row;
    justify-content:flex-end; 
    
    
}
}
.copy{
    width: 100%;
    height: 100px;
    background-color: white;
    align-items: center;
    background-color: var(--bg);

    h3{
        text-align: center;
        margin-top: 50px;
        color: var(--color) ;
        
    }
}
`;

