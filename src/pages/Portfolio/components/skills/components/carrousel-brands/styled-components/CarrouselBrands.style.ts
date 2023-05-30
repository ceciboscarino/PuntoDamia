import styled from 'styled-components';

export const CarrouselBrandsContainer = styled.div`

overflow: auto;
display: flex;
width: 100%;
max-width: 100vw;
/* margin-top: 10px; */
padding-top: 10px;
align-content: center;
align-items: center;
background-color: #ffffff;
scrollbar-color: var(--main-color);
color: var(--main-color);
scrollbar-width: thin;
-ms-overflow-style: none;
overflow-x: scroll;
position: relative;

.pseduo-track {
  background-color: var(--main-color);
  height: 20px;
  width: 100%;
  position: relative;
  top: -3px;
  z-index: -10px;

}




&::-webkit-scrollbar {
  height: 8px;
}

&::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 0px rgba (0 0 0 0);
}
&::-webkit-scrollbar-thumb {
  background-color: var(--main-color);
}
&::-webkit-scrollbar-thumb:hover {
  background-color: var(--main-color);
}
&::-webkit-scrollbar:vertical {
  display: none;
}

.inner-wrapper {
  display: flex;
  padding-bottom: 10px;
}


.item{
    flex-shrink: 0;
    /* scroll-snap-align: start; */
    width: 150px ;
    margin-bottom: 6px;  
    padding-left: 50px;

}

/* @media (min-width: 600px) {
    max-width: 600px;
}
@media (min-width: 825px) {
    max-width: 825px;
}
@media (min-width: 950px) {
    max-width: 950px;
}
@media (min-width: 1050px) {
    max-width: 1050px;
}
@media (min-width: 1150px) {
    max-width: 1150px;
}
@media (min-width: 1300px) {
    max-width: 1300px;
} */
`