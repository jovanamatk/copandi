import React from 'react';
import logo from '../images/logo.png'
import facebook from '../images/facebook.png'
import instagram from "../images/instagram.png"

const Footer = () => {
    return ( <>
    <footer className="row pt-lg-5 pb-lg-5 ">
    <div className="row w-lg-50 pb-4 mx-auto justify-content-center">
        <div className="col-lg-2 pt-3 text-center"><img src={logo} alt="Copandi" /><h5>BE0677.970.513</h5></div>
        <div className="col-lg-1"><p>COPANDI</p> 
        <ul>            
            <li><span>Blog</span></li>
            <li><span>Team</span></li>
            <li><span>Contact</span></li>
            </ul>
            </div>
        <div className="col-lg-2">
            <p>VASTGOED</p>
            <ul>
                <li><span>Te koop</span></li>
                <li><span>Te huur</span></li>
                <li><span>Nieuwbouw</span></li>
                <li><span>Ik ben op zoek</span></li>
            </ul>
        </div>
        <div className="col-lg-3">
            <p>ALGEMEEN</p>
            <ul>
                <li><span>Algemene voorwaarden</span></li>
                <li><span>Privacy Policy</span></li>
            </ul>
        </div>
        <div className="col-lg-3">
            <p>CONTACT</p>
            <ul>
                <li><span>Leopoldstraat 37, 2800 Mechelen</span></li>
                <li><a href="mailto:info@copandi.be">info@copandi.be</a></li>
                <li><a href="tel:015794644">015 79 46 44</a></li>
            </ul>
        </div>
        <div className="col-lg-1">
            <p>SOCIAL</p>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><img src={instagram} className="pr-1" alt="Instagram"/></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Facebook"/></a>
        </div>
        </div>
        
        </footer>
        <div className="row f-copyright text-center">
        <p>2018 copyright - alle rechten voorbehouden Copandis</p>
    </div>
</> );
}
 
export default Footer;