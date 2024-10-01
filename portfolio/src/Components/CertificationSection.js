import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAward} from "@fortawesome/free-solid-svg-icons";

function CertificationSection() {

    const dataCertification = [
        {
            certificationName: 'Certification Développeur web et web mobile',
            date: "01/11/2019 - 01/07/2020",
            city: "Oclock Paris"

        },
        {
            certificationName: 'Certification Opquast: Maîtrise de la qualité en projet Web ',
            date: "01/11/2019 - 01/07/2020",
            city:"Oclock Paris"
        },
        {
            certificationName: 'BTS Hôtelier Mercatique ',
            date: "01/09/2014 - 01/06/2016",
            city:"Montargis Lycée Saint Louis "
        },
        {
            certificationName: 'BAC Techno Hôtellerie - Restauration',
            date: "01/09/2011 - 01/06/2014",
            city:"Montargis Lycée Saint Louis "
        },
    ]


    return (
        <div className="certifications-section">
            <h2><span className="spanTitleH2"><FontAwesomeIcon icon={faAward} /></span>Mes Certifications</h2>
            <div className="certification-list">
                {dataCertification.map((certification, index) => (
                    <div key={index} className="certification-item">
                        <span className="certification-date">{certification.date}</span>
                        <span className="certification-name">{certification.certificationName}</span>
                        <span className="certification-city">{certification.city}</span>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default CertificationSection