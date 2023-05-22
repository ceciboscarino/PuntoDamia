

import { Carousel } from "./components/carousel"
import { Wrapper } from "./wrapper/"
import { lazy } from 'react'

const AboutMe = lazy(() => import('./components/about-me/AboutMe'))
const Skills = lazy(() => import('./components/skills/Skills'))
const Contact = lazy(() => import('./components/contact/Contact'))

const images = ['1.jpg','2.jpg','3.jpg']



function Portfolio() {
  return (
    <Wrapper titulo={"Cachorra"} >
       <Carousel images={images} autoPlay={true} showButtons={false}/>
       <AboutMe/>
       <Skills/>
       <Contact/>
    </Wrapper>
  )
}
export default Portfolio