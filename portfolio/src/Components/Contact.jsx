import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAt, faPhone} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";

export const Contact = () => {
    return (
        <div className="contact-section">
            <div className="contact">
                <h3>Contacts</h3>
                <ul className="contactList">
                    <li className="contact-item">

                        <a href="mailto:nicolasmassaia@gmail.com"> <FontAwesomeIcon icon={faAt}/></a>
                    </li>
                    <li className="contact-item">

                        <a href="tel:+33673843072"> <FontAwesomeIcon icon={faPhone}/></a>
                    </li>
                    <li className="contact-item">

                        <a href="https://www.linkedin.com/in/nicolas-massaia/" target="_blank"
                           rel="noopener noreferrer"> <FontAwesomeIcon icon={faLinkedin}/></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}