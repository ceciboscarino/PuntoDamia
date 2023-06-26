import { CarrouselBrands } from "./components/carrousel-brands";
import { SkillsContainer } from ".";
import { VideoStore } from "./components/video-store";
import { lazy } from 'react'
import {  Suspense } from 'react'

const TecText = lazy(() => import('./components/tec-text/TecText'))

function Skills() {
    return (
        <SkillsContainer id="skills">
             <Suspense fallback={<div>Cargando</div>} >

            <CarrouselBrands/>
            <VideoStore/>
            <TecText/>
            </Suspense>
        </SkillsContainer>
    )
}
export default Skills