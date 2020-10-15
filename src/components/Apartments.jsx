import React, {useState, useEffect} from 'react';
import Apartment from './child/Apartment'
import apartmentsJSON from  '../services/apartmentsService.json'

const Apartments = () => {
    let [apartments, setApartments] = useState([]);

    useEffect(() => {
        setApartments(apartmentsJSON);
    }, []);
    

    return ( 
    <div className="container-fluid">
        <div className="row top-line">
  <div className="row w-80 mx-auto p-3 apartments-grid">
    {apartments.length <= 0 ? <h1 className="text-white">There are no apartments.</h1> : apartments.map(apartment=><div key={apartment._id} className="col-lg-4 col-md-6"><Apartment key={apartment._id} apartment={apartment}/></div>) }
  </div>
</div>
</div>
     );
}
 
export default Apartments;