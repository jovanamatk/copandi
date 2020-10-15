import React from 'react';
import first from '../../images/gallery/1.png';
import second from '../../images/gallery/2.png';
import third from '../../images/gallery/3.png';
import fourth from '../../images/gallery/4.png';

const Gallery = () => {
    return ( <>
    <div className="w-lg-80 mx-auto gallery-section">
    <div className="row">

    <div className="col-lg-3 img-container"><img src={first} alt="Gallery 1" className="img-gallery"/></div>
    <div className="col-lg-3 img-container"><img src={second} alt="Gallery 2" className="img-gallery"/></div>
    <div className="col-lg-3 img-container"><img src={third} alt="Gallery 3" className="img-gallery"/></div>
    <div className="col-lg-3 img-container"><img src={fourth} alt="Gallery 4" className="img-gallery"/>
    <div className="text-centered text-white"><h1>+35</h1></div>
</div>

    </div></div>
     </> );
}
 
export default Gallery;