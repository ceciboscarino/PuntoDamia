



import { Carousel } from "./components/carousel"
import { Wrapper } from "./wrapper/"
import { lazy } from 'react'
import {  Suspense } from 'react'

const AboutMe = lazy(() => import('./components/about-me/AboutMe'))
const Skills = lazy(() => import('./components/skills/Skills'))
const Contact = lazy(() => import('./components/contact/Contact'))
const Icons  = lazy(() => import('./components/contact/icons/Icons'))
// const IconsMotorola  = lazy(() => import('./components/icons/IconsMotorola'))


const images = ['1.jpg']



function Portfolio() {
  return (
    <Wrapper>
       {/* <Suspense fallback={<div>Cargando</div>} > */}
        <Carousel images={images} autoPlay={false} showButtons={false}/>
        <AboutMe/>
       
        <Skills/>
        {/* <IconsMotorola/> */}
        <Icons/>
        <Contact/>
      {/* </Suspense> */}
    </Wrapper>
  )
}
export default Portfolio