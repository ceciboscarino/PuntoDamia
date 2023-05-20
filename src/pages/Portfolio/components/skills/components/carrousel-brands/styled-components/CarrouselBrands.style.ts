import styled from 'styled-components';

export const CarrouselBrandsContainer = styled.div`

overflow: auto;
display: flex;
scroll-snap-type: x mandatory;
max-width: 100%;

.item{
    flex-shrink: 0;
    scroll-snap-align: start;
    padding: 40px;
    
}
`