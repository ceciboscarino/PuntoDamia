import styled from "styled-components";

export const InformativeTextContainer = styled.div`
display: flex;
flex-direction: column;
margin: 0;
color: #ffffff;
align-items: center;

h3{
    margin-right: 20px;
}
hr{
    display: none;
}


@media (min-width: 786px) {
    flex-direction: row;
    align-items: center;
    display: flex;


    hr{
        display: inline;
        color: #ffffff;
        margin-right: 20px;
        border: solid 1px;
        height: 30px;


    }
}
`
