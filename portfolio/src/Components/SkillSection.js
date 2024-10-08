import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Pour les étoiles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Pour les icônes FontAwesome
import { faJs, faReact, faHtml5, faCss3, faPhp, faSymfony, faDocker, faGitlab } from '@fortawesome/free-brands-svg-icons';
import {faWrench} from "@fortawesome/free-solid-svg-icons";

function SkillSection() {
    // Liste des langages et leur niveau de maîtrise (sur 5 étoiles)
    const skills = [
        { language: "JavaScript", level: 3, fontName: faJs },
        { language: "React", level: 2, fontName: faReact },
        { language: "HTML", level: 5, fontName: faHtml5 },
        { language: "CSS", level: 5, fontName: faCss3 },
        { language: "PHP", level: 4, fontName: faPhp },
        { language: "Symfony", level: 5, fontName: faSymfony },
        { language: "Docker", level: 2, fontName: faDocker },
        { language: "Gitlab", level: 4, fontName: faGitlab },
    ];

    // Fonction pour générer les étoiles
    const renderStars = (level) => {
        const totalStars = 5;
        const stars = [];

        for (let i = 1; i <= totalStars; i++) {
            if (i <= level) {
                // Si l'étoile est égale ou inférieure au niveau, elle est remplie
                stars.push(<FaStar key={i} color="gold" />);
            } else {
                // Sinon, étoile vide
                stars.push(<FaRegStar key={i} color="gold" />);
            }
        }

        return stars;
    };

    return (
        <div className="skill-section">
            <h2><span className="spanTitleH2" id="faWrench"><FontAwesomeIcon icon={faWrench} /></span>Mes Compétences</h2>
            <ul className="skill-list">
                {skills.map((skill, index) => (
                    <li key={index} className="skill-item">
                        <span className="skill-name"> <FontAwesomeIcon icon={skill.fontName} style={{ paddingRight: '2px' }} />{skill.language}</span>
                        <span className="skill-stars">{renderStars(skill.level)}</span>

                        <FontAwesomeIcon icon="fa-brands fa-docker"/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SkillSection;