import React, { useState, useEffect } from 'react';
import './App.css';
import Profil from "./Components/Profil";
import MyStory from "./Components/MyStory";
import ExperienceSection from "./Components/ExperienceSection";
import NavCustom from "./Components/NavCustom";
import SkillSection from "./Components/SkillSection";
import CertificationSection from "./Components/CertificationSection";
import MyWorkSection from "./Components/MyWorkSection";
import 'semantic-ui-css/semantic.min.css'
import {Contact} from "./Components/Contact";

function App() {
  // Suivi de la position de la souris et du scroll
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrolling, setScrolling] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState(null);

  // Fonction pour mettre à jour la position de la lumière
  const updateLightPosition = (clientX, clientY) => {
    const scrollX = window.scrollX || 0;
    const scrollY = window.scrollY || 0;
    const newX = clientX + scrollX;
    const newY = clientY + scrollY;
    setMousePosition({ x: clientX + scrollX, y: clientY + scrollY });
  };

  // Mettre à jour la position de la souris en prenant en compte le scroll
  useEffect(() => {
    const handleMouseMove = (e) => {
      updateLightPosition(e.clientX, e.clientY);
    };

    const handleScroll = () => {
      // Si un scroll est en cours, réinitialiser le timeout pour détecter la fin du scroll
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      setScrolling(true);

      // Démarrer un nouveau timeout qui n'exécute la fonction qu'à la fin du scroll
      setScrollTimeout(setTimeout(() => {
        setScrolling(false);
        updateLightPosition(mousePosition.x - window.scrollX, mousePosition.y - window.scrollY);
      }, 200)); // Délai de 200ms pour détecter la fin du scroll
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mousePosition, scrollTimeout]);

  // Style pour l'effet de lumière suivant la souris
  const lightStyle = {
    position: 'fixed',
    top: mousePosition.y - 10 + 'px',
    left: mousePosition.x + 'px',
    width: '300px',
    height: '300px',
    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 10%, rgba(255,255,255,0.05) 40%, rgba(19,13,49,0) 80%)',
    borderRadius: '50%',
    pointerEvents: 'none',
    mixBlendMode: 'screen',
    transform: 'translate(-50%, -50%)',
  };

  return (
      <div className="app">
        {/* Lumière dynamique */}
        <div style={lightStyle}></div>

        {/* Section de gauche */}
        <div className="left-section">
          <Profil />
          <NavCustom />
          <Contact />
        </div>

        {/* Section de droite */}
        <div className="right-section">
          <section id="about">
            <MyStory />
          </section>
          <section id="experience">
            <ExperienceSection />
          </section>
          <section id="skills">
            <SkillSection />
          </section>
          <section id="certifications">
            <CertificationSection />
          </section>
          <section className="works-section" id="works">
            <MyWorkSection />
          </section>
        </div>
      </div>
  );
}

export default App;
