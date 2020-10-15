import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
import duncanVanReck from '../../images/duncan-van-reck.png';

const Contact = () => {
    return ( 
    <> 
    <div className="w-lg-40 row mx-auto contact-block text-white m-5">
    <div className="col-6">
                <img src={duncanVanReck} alt="Duncan Van Reck" />
            </div>
            <div className="col-6 p-4 align-self-center">
                <h3>Duncan Van Reck</h3>
                <FontAwesomeIcon icon={faEnvelope} size="lg" color="#7ead60"  /> <a  href="mailto:duncan@copandi.be">duncan@copandi.be</a><br/>
                <FontAwesomeIcon icon={faPhone} size="lg" color="#7ead60"  /> <a href="tel:033037696">033037696</a><br/>
                <button className="btn-main mt-3">Contact</button>
            </div>
    </div>
    </> );
}
 
export default Contact;