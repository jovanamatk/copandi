import React from 'react';
import Documents from './Documents';
import Legal from './Legal';
import TabSection from './TabSection';

const DarkSection = () => {
    return ( 
    <div className="row dark-section">
        <div className="row w-lg-75 pb-4 mx-auto text-center">
    <TabSection/>
    <Legal/>
    <Documents/>
    </div>
    </div>
      );
}
 
export default DarkSection;