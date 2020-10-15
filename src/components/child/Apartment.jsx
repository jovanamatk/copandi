import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const Apartment = ({apartment}) => {

return ( <> 


    <img className="rounded w-100 img apartment-img" alt={apartment.description} src={apartment.image}/>
    <div className="row">
    <div className="mx-auto apartment-box p-3">
    <p className="apartment-description">{apartment.description}</p>

    <p className="font-weight-bolder location-styling font-small opacity-03"><FontAwesomeIcon icon={faMapMarkerAlt}   /> <span>{apartment.location}</span></p>

    <div className="row details">
    <div className="col-4 detail">
            <p className="font-small"><span className="opacity-05">Vierkante meters</span><br/>
                {apartment.sqmtr}
            </p>
        </div>        
        <div className="col-4 detail">
        <p className="font-small"><span className="opacity-05">Slaapkamers</span><br/>
                {apartment.rooms}
            </p>
        </div>        
        <div className="col-4 detail">
            <p className="font-small"><span className="opacity-05">Plaats</span><br/>
                <span className="price">{apartment.price}</span>
            </p>
        </div>
    </div>
    </div>
    </div>

    </> );
}
 
export default Apartment;