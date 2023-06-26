import styled from 'styled-components';
import { SocialMediaContainer } from './../components/social-media-buttons/styled-components/SocialMedia.styled';

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
    height: auto;
    background-color: white;
    align-items: center;
    background-color: var(--bg);
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 10px;
    color: var(--color);

    .right{
        margin-top: -8px;
    } 
}
.division{
    background-color: black;
    max-height: 4px;
    min-height: 4px;
    width: 100%;
    margin-top: 40px;
}
`;

