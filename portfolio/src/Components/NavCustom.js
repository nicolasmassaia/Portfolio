import React, {useEffect, useState} from 'react';


function NavCustom() {
    const [activeLink, setActiveLink] = useState('');

    // Fonction pour mettre à jour le lien actif en fonction du scroll
    const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                setActiveLink(section.getAttribute('id'));
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <nav className="nav-custom">
            <ul className="nav-ul">
                <li className="nav-item">
                    <a href="#about" className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}>
                        <span>A propos</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#experience" className={`nav-link ${activeLink === 'experience' ? 'active' : ''}`}>
                        <span>Mon expérience</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#skills" className={`nav-link ${activeLink === 'skills' ? 'active' : ''}`}>
                        <span>Mes compétences
                        </span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#certifications" className={`nav-link ${activeLink === 'certifications' ? 'active' : ''}`}>
                        <span>
                            Mes certifications
                        </span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#works" className={`nav-link ${activeLink === 'works' ? 'active' : ''}`}>
                        <span>
                            Mon travail en action
                        </span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavCustom;