import styled from "styled-components";

export const CarouselImg = styled.img`
    max-width: 100%;
    width: 100%;
    height: auto;
    opacity: 0;
    transition: 1s;
    &.loaded {
        opacity: 1;
    }
`

export const CarouselContainer = styled.div`
    display: flex;
    align-content: center;
    flex-direction: row;
    margin-top: 15px;
`

export const CarouselButton = styled.button`
    color: white;
    background-color: #eb118a;
    padding: 8px;
    margin: 0 5px;
`
