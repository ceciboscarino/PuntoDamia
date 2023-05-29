import styled from 'styled-components';

export const CarrouselBrandsContainer = styled.div`

overflow: auto;
display: flex;
scroll-snap-type: x mandatory;
max-width: 385px;
margin-top: 30px;
align-content: center;
align-items: center;
background-color: #ffffff;

.item{
    flex-shrink: 0;
    scroll-snap-align: start;
    width: 150px ;
    margin-bottom: 40px;  
    padding-left: 50px;

}

@media (min-width: 600px) {
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
@media (min-width: 1250px) {
    max-width: 1250px;
}
`