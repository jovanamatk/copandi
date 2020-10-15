import React from 'react';
import MainSection from './child/MainSection'
import Gallery from './child/Gallery'
import Description from './child/Description';

const Main = () => {
    return (<>
    <div className="container-fluid">
    <MainSection/>
    <Gallery/>
    <Description/>
    </div>
    </>);
}
 
export default Main;