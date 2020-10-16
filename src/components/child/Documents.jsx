import React from 'react';
import logo from '../../images/logo.png'
import downloadBtn from '../../images/elements/download-btn.png'

const Documents = () => {
    return (     
    <div className="col-12">
    <div className="pt-5 pb-5 text-left documents-section">
        <h1>Documenten & plannen</h1>
        <p>Download de belangrijkste documenten in verband met dit pand, alsook de plannen.</p>
        <div className="row documents">
        <div className="col-lg-3 w-100">
        <button className="download-button">Grandplanner<img src={downloadBtn} alt="Download" /></button> 
        <button className="download-button">EPC.pdf<img src={downloadBtn} alt="Download" /></button> 
        <button className="download-button">Voorkoop Hendrik Schoofsstraat_pdf.pdf<img src={downloadBtn} alt="Download" /></button> 
        <button className="download-button">Kadastraal plan_pdf.pdf<img src={downloadBtn} alt="Download" /></button> 
        <button className="download-button">Copandi_template brochure_BRECHT-HENDRIKSCHOOFSTRAAT 17 .pdf<img src={downloadBtn} alt="Download" /></button> 
        <button className="download-button">Bos_pdf.pdf<img src={downloadBtn} alt="Download" /></button> 

        </div>
        <div className="col-lg-3  ">
        <button className="download-button">ELEK.pdf<img src={downloadBtn} alt="Download" /></button>
        <button className="download-button">watertoets Hendrik Schoofsstraat_pdf.pdf<img src={downloadBtn} alt="Download" /></button> 
        <button className="download-button">OVAM_pdf.pdf<img src={downloadBtn} alt="Download" /></button> 
        <button className="download-button">Erfgoed_pdf.<img src={downloadBtn} alt="Download" /></button> 
        <button className="download-button">Sted_ inl_.pdf<img src={downloadBtn} alt="Download" /></button> 
        <button className="download-button">Overstromingenpdf_pdf.pdf<img src={downloadBtn} alt="Download" /></button> 
        <button className="download-button">risicokaart Hendrik Schoofsstraat_pdf.pdf<img src={downloadBtn} alt="Download" /></button> 

        </div>
        <div className="row col-lg-3 col-sm-8"></div>
        <div className="col-lg-3 main-document">
            <img src={logo} alt="Copandi"/>
            <p>Sted_ini_.pdf</p>
            <button className="btn-main-document">Download</button>
        </div>
</div>
        </div>

</div>    );
}
 
export default Documents;