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


h2{
    font-weight: 700;
  
    margin-left: 1%;
  
}

a{
    text-decoration: none;
    
    color: black;
    ;

}
.links {
        
        position: absolute;
        top: -700px;
        left: -1000px;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all .5s ease;
        cursor: pointer;
        
       
        a {
            display: block;
            font-size: 3rem;
            //border-bottom: solid 2px transparent;
            margin: 8px;
            font-weight: 500;
        
            &:hover {
                //border-bottom: solid 2px #222;
                color: white;
                background-color: grey;
                padding: 5px;
                margin: 3px;

                
                

            }
        }
       
        @media (min-width: 768px) {
            position: initial;
            flex-direction: column;
            align-items: flex-start;
            margin: 0;
            a {
                font-size: 1rem;
                display: inline;
            }

        }
        

    }
    .links.active {
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 100px;
        left: 0;
        right: 0;
        text-align: center;
        
        a{
            font-size: 2rem;
            margin-top: 1rem;
        }
    }

    .switch {
        background-color: transparent;
        border: none;
        cursor: pointer;
        margin-right: 1%;
    }
    .burguer {
        @media (min-width: 768px) {
            display: none;
         }
    }
`;

