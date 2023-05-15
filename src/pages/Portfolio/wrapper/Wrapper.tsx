import { WrapperNavBar } from "./styled-components";
import { MoonFill } from "react-bootstrap-icons";
import { SunFill } from "react-bootstrap-icons";
import { useState } from "react";
import { ColorSchemeActive } from "../../../utilities/color-scheme-active"; 
import BurguerButton from './../../../components/BurgerButton/BurgerButton';

interface Props {
    children: JSX.Element | JSX.Element[];
    titulo?: string;
}
export default function Wrapper({children, titulo} : Props) {
    const allElements = document.querySelectorAll("*");
    
    const [colorScheme, setColorScheme] = useState<string>(ColorSchemeActive())
    
    const [clicked , setClicked] = useState<boolean>(false) 

    const handleClick = () => {
      setClicked(!clicked)
      const body = document.querySelector('body')?.setAttribute('style', `overflow-y: ${clicked ? 'auto' : 'hidden'}`)
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  
    }
    const handleClickLink = () => {
      setClicked(!clicked)
    }


    
    const handleClickTheme = () => {

        allElements.forEach((element) => {
          element.classList.add("transition");
          setTimeout(() => {
            element.classList.remove("transition");
          }
          , 1000);
          
        });
    
        if (colorScheme === 'dark') {
          
    
          document.querySelector('html')?.setAttribute('data-theme', 'light' )
          setColorScheme('light')
          localStorage.setItem('color-scheme', 'light')
          
        } else {
          
          document.querySelector('html')?.setAttribute('data-theme', 'dark')
          setColorScheme('dark')
          localStorage.setItem('color-scheme', 'dark')
          
        }
      }

    return (
        <>
        <WrapperNavBar>
            
                <h2>
                    {titulo}
                </h2>
                <div className={`links ${clicked ? 'active' : ''}`}>
                    <a href="#aboutme" onClick={handleClickLink}>About me</a>
                    <a href="#skills"  onClick={handleClickLink}>Skills</a>
                    <a href="#contact"  onClick={handleClickLink}>Contact</a>
                </div>
                <button id="switch" className="switch" onClick={handleClickTheme}>
                    {colorScheme === 'dark' ?  <SunFill size={25}/>:<MoonFill size={25}/> }
                </button>
                <div className="burguer">
                <BurguerButton handleClick={handleClick} clicked={clicked} />
                </div>
                
            
        </WrapperNavBar> 
        <div>{children}</div>
        </>
        )
}