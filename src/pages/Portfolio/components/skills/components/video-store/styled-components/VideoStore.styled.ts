import styled from 'styled-components'

export const VideoStoreContainer = styled.div`
margin: 0;
    align-items: center;
    position: relative;
    top: 0;
    left: 0;

    @media (min-width: 786px) {
    position: relative;
    }

img{
    width: 100%;
    height: auto;
    z-index: 0;

    top: 0;
    left: 0;
    position: absolute;
}

.out{
    position: relative;
    top: 0;
    left: 0;
    display: flex;
flex-direction:column; 
@media (min-width: 786px) {
flex-direction:row;
}
background-color: transparent ;
margin: 0;
    
}
.inside{
width: 100%;
display: flex;
flex-direction: column;
padding: 20px;

h2{
    padding-left: 4%;
    color: var(--main-color);
}

p{
    text-align: justify;
    
}
}
    


.responsive-iframe{

top: 0;
left: 0;
bottom: 0;
right: 0;
width: 100%;
height: auto;
margin: 20px;
@media (min-width: 786px) {
margin-top: 50px;
}
} 

`
