import React, {useState, useEffect} from 'react';
import Apartment from './child/Apartment'
import {getApartments} from '../services/apartmentsService'

const Apartments = () => {
    let [apartments, setApartments] = useState([]);

    useEffect(() => {
        const aps = [...getApartments()]
        setApartments(aps);
    }, []);

    return ( 
    <div className="container-fluid">
        <div className="row top-line">
  <div className="row w-80 mx-auto p-3 apartments-grid">
    {apartments.map(apartment=><div key={apartment._id} className="col-lg-4 col-md-6"><Apartment key={apartment._id} apartment={apartment}/></div>)}
  </div>
</div>
</div>
     );
}
 
export default Apartments;