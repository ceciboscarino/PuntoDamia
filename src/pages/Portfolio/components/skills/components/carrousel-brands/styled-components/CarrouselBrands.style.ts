import styled from 'styled-components';

export const CarrouselBrandsContainer = styled.div`

overflow: auto;
display: flex;
scroll-snap-type: x mandatory;
max-width: 385px;
margin-top: 50px;



align-content: center;

.item{
    flex-shrink: 0;
    scroll-snap-align: start;
    width: 150px ;
    margin-bottom: 50px;  
    padding-left: 50px;

}
`