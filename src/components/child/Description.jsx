import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'


const Description = () => {
    return (     <
    div className="w-lg-80 pt-lg-5 pb-lg-5 mx-auto description-section">
    <div className="w-lg-80 mx-auto justify-content-center text-center">
        <h1>Beschrijving</h1>

        <p className="pt-3">Voor een uitgebreide beschrijving, download onze luxebrochure op <a href="/">www.copandi.be</a> voor meer informatie.<br/>

        Dit appartement gelegen op de bovenste verdieping van een prachtig gebouw &#40;bouwjaar 2011&#41; met drie slaapkamers zoekt een nieuwe eigenaar. Het appartement is centraal gelegen op wandelafstand van het centrum van Brecht winkels, scholen en openbaar vervoer. 
        </p>
        <h4 className="pt-3">Inpandige autostaanplaats mogelijk mee aan te kopen t.W.V. €15.000.</h4>
        <p className="pt-3">Bent u ook benieuwd naar onze unieke formules en hoe u als eigenaar veel geld kan besparen op de verkoop van uw eigen woning? Maak een vrijblijvende afspraak.</p>

        <button className="btn-main-dark mt-3"><FontAwesomeIcon icon={faMapMarkerAlt} size="lg" className="pr-1" />De kaart tonen</button>

    </div>
    </div>
 );
}
 
export default Description;