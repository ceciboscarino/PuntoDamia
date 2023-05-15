

import { Wrapper } from "./wrapper/"
import { lazy } from 'react'

const AboutMe = lazy(() => import('./components/about-me/AboutMe'))
const Skills = lazy(() => import('./components/skills/Skills'))
const Contact = lazy(() => import('./components/contact/Contact'))





function Portfolio() {
  return (
    <Wrapper titulo={"Cachorra"}>

       <AboutMe/>
       <Skills/>
       <Contact/>
    </Wrapper>
  )
}
export default Portfolio