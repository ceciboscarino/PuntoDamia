import styled from "styled-components";

export const InformativeTextContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
color: #ffffff;

text-align: center;
cursor: pointer;
h2{
    color: black;
    font-family: Regular;
}
h3{
    cursor: pointer;
    margin-top: 0px;
    margin-bottom: 8px;
}
a {
    cursor: pointer;
    margin-top: 0px;
    margin-bottom: 15px;

    text-decoration: none;
    color: white;
}


@media (min-width: 786px) {
width: 25%;
}

p{
    margin-top: 0px;
}
`
