import { CarrouselBrands } from "./components/carrousel-brands";
import { SkillsContainer } from ".";
import { VideoStore } from "./components/video-store";
import { lazy } from 'react'
import {  Suspense } from 'react'


const TecText = lazy(() => import('./components/tec-text/TecText'))
import Icons from './../contact/icons/Icons';
import IconsMotorola from './../icons/IconsMotorola';

function Skills() {
    return (
        <SkillsContainer id="skills">
            <CarrouselBrands/>
            <TecText/>
            <IconsMotorola/>
            <VideoStore/>
        </SkillsContainer>
    )
}
export default Skills