import { CarrouselBrands } from "./components/carrousel-brands";
import { SkillsContainer } from ".";
import { VideoStore } from "./components/video-store";
import { lazy } from 'react'
import {  Suspense } from 'react'

const TecText = lazy(() => import('./components/tec-text/TecText'))

function Skills() {
    return (
        <SkillsContainer id="skills">
            <CarrouselBrands/>
            <VideoStore/>
            <TecText/>
        </SkillsContainer>
    )
}
export default Skills