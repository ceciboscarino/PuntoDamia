

import { Carousel } from "./components/carousel"
import { Wrapper } from "./wrapper/"
import { lazy } from 'react'

const AboutMe = lazy(() => import('./components/about-me/AboutMe'))
const Skills = lazy(() => import('./components/skills/Skills'))
const Contact = lazy(() => import('./components/contact/Contact'))

const images = ['1.jpeg','2.jpg','3.jpeg']



function Portfolio() {
  return (
    <Wrapper titulo={"Cachorra"} >
       <AboutMe/>
       <Skills/>
       <Contact/>
       <Carousel images={images} autoPlay={false} showButtons={true}/>
    </Wrapper>
  )
}
export default Portfolio