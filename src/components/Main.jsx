import React from 'react';
import MainSection from './child/MainSection'
import Gallery from './child/Gallery'
import Description from './child/Description';
import Contact from './child/Contact';
import DarkSection from './child/DarkSection';
import Apartments from './Apartments';

const Main = () => {
    return (<>
    <MainSection/>
    <Gallery/>
    <Description/>
    <DarkSection/>
    <Contact/>
    <h1 className="apartments-main-text">Gerelateerde gebouwen</h1>
    <Apartments length="3"/>
    </>);
}
 
export default Main;