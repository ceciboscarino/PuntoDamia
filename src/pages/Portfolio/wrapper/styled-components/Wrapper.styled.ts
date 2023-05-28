import styled from "styled-components";


export const WrapperNavBar = styled.nav`

display: flex;
align-items: center;
padding: 3px;
justify-content: space-between;
box-shadow: var(--navbarShadow);
width: 100%;
position: fixed;
top: 0;
left: 0;
max-height: 70px;
z-index: 100;   
/* background-color: var(--bg); */
background-color: white;



#logoGrande{
    
    padding: 8px;
    display: none;
    max-height: 40px;
    @media (min-width: 768px){
        display: inline ;
    }  
    }
#logoChico{
    max-height: 40px;
    margin-left: 1%;
    @media (min-width: 768px){
        display: none;
    } 
}

a{
    text-decoration: none;
    
    color: black;
}

.links {
        
        position: absolute;
        top: -700px;
        
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all .5s ease;
        cursor: pointer;  
        a {
            display: block;
            font-size: 20px;
            //border-bottom: solid 2px transparent;
            margin: 8px;
            &:hover {
                //border-bottom: solid 2px #222;
                color: white ;
            }
        }     
    }

    .links.active {
        width: 250px;
        display: block;
        position: absolute;
        top: 100px;
        right: 0;
        text-align: center;
       

        /* top: 0;
    right: 0;
    width: 250px;
    height: 100vh;
    max-width: 250px;
    transform: translateX(-250px); */
    }

    .switch {
        background-color: transparent;
        border: none;
        cursor: pointer;
        margin-right: 1%;
        color: rgb(0,174,239);
    }

    .burguer {
       }
`;

export const BgDiv = styled.div `
position: absolute;
background-color: rgb(0,174,239);
top: -100px;
left: 100%;
right: -3000;
width: 0;
height: 100%;
z-index: 4;
transition: all .6s ease;

&.active {
    border-radius: 0 0 0 0;
    top: 0;
    right: 0;
    width: 250px;
    height: 100vh;
    max-width: 250px;
    transform: translateX(-250px);
    
}
`;

