import React, {useState, useEffect} from 'react';
import Apartment from './child/Apartment'
import apartmentsJSON from  '../services/apartmentsService.json'

const Apartments = ({length = null}) => {
  let [apartments, setApartments] = useState([]);

    useEffect(() => {
        setApartments(apartmentsJSON);
   }, []);

  let newApartments = apartments.slice(0, length); 

    return ( <> 
    {length ? <div className="row"> </div> : <div className="row top-line"></div>}
  <div className="row w-lg-80 mx-auto p-3 apartments-grid">
    { length ? newApartments.map(apartment =><div key={apartment._id} className="col-lg-4 col-md-6"><Apartment key={apartment._id} apartment={apartment}/></div>) : apartments.map(apartment =><div key={apartment._id} className="col-lg-4 col-md-6"><Apartment key={apartment._id} apartment={apartment}/></div>)  }
</div>
</>
     );
}
 
export default Apartments;