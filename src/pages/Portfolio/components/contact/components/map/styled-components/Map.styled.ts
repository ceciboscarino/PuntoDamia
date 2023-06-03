import styled from "styled-components";

export const MapContainer = styled.div`

width: 100%;
height: auto;
@media (min-width: 786px) {
width: 75%;
min-height: 300px;
}
`;

export const LoadingView = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: transparent;
  z-index: 2;

  p {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    display: inline-block;
    background: white;
    padding: 20px;
    border-radius: 10px;
  }
`