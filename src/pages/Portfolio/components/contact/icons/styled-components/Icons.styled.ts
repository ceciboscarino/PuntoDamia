import styled from "styled-components";

export const IconsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--main-color);
    align-items: center;
    margin: auto;
    padding: auto;
    justify-content: center;
    padding-top: 35px;
    padding-bottom: 20px;
    p { 
        color: white;
    }
    svg { 
        padding: auto;
        
        align-items: center;
        color: black;
        width:  auto;
        height: 40px;
        
        
    }
    .div { 
        justify-content: center;
        display: flex;
        flex-direction: column;
        
    }
    @media (min-width: 786px) {
        flex-direction: row;
        justify-content: space-around;
        
    }

`