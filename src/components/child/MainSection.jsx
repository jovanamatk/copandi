import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import duncanVanReck from '../../images/duncan-van-reck.png';
import icon1 from '../../images/elements/icon1.png';
import icon2 from '../../images/elements/icon2.png';
import icon3 from '../../images/elements/icon3.png';


const MainSection = () => {
    return (     <div className="main-section text-white row">
    <div className="w-lg-80 mx-auto p-3">
    
    <div className="location-main mb-5"><FontAwesomeIcon icon={faMapMarkerAlt}   /> <span>Hendrik Schoofstraat 17, 2960 Brecht</span></div>
    <button className="btn-price float-right">€ 299.000</button>

    <h1 className="font-large">Prachtig dakappartement met<br/> 3 SLKS en ruim terras.</h1>
    <div className="contact-main float-right">
        <div className="row">
            <div className="col-5">
                <img src={duncanVanReck} alt="Duncan Van Reck" />
            </div>
            <div className="col-7 p-4">
                <h5>Duncan Van Reck</h5>
                <FontAwesomeIcon icon={faEnvelope} size="lg" color="#7ead60"  /> <a className="font-16" href="mailto:duncan@copandi.be">duncan@copandi.be</a><br/>
                <FontAwesomeIcon icon={faPhone} size="lg" color="#7ead60"  /> <a href="tel:033037696">033037696</a><br/>
                <button className="btn-main mt-3">Contact</button>
            </div>
        </div>
    </div>
    <div className="pt-lg-5 mb-5 row w-lg-40">
    <span className="col-lg-4"><img src={icon1} alt="bed"/> <span className="pl-lg-2">3 Slaapkamers</span></span>
    <span className="col-lg-4"><img src={icon2} alt="bath"/> <span className="pl-lg-2">1 Badkamer</span></span>
    <span className="col-lg-4"><img src={icon3} alt="toilet"/> <span className="pl-lg-2">1 WC</span></span>
    </div>
</div>   
 </div> );
}
 
export default MainSection;