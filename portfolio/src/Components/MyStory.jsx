import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserAstronaut} from "@fortawesome/free-solid-svg-icons";
import React from "react";

function MyStory() {
    return (
        <div className="my-story">
            <h2><span className="spanTitleH2" id="faAstronaut"><FontAwesomeIcon icon={faUserAstronaut}/></span>Qui suis-je ?</h2>
            <p>
                Après plusieurs années enrichissantes dans le secteur de l'hôtellerie-restauration, j'ai choisi de suivre ma passion pour le développement web en effectuant une reconversion professionnelle. Cette première expérience m'a permis d'acquérir une grande rigueur, le sens du détail et une excellente organisation, des compétences que je mets aujourd'hui à profit dans le domaine du développement.
            </p>
            <p>
                Depuis maintenant 4 ans, je travaille en tant que développeur Full Stack au CNRS, avec une spécialisation en backend. Cette expérience dans une institution de renommée internationale m'a permis de contribuer à des projets ambitieux et variés, tout en consolidant mes compétences techniques. Mon rôle au CNRS me permet de toucher à des technologies modernes et d'être impliqué dans toutes les étapes du développement, de la conception à la mise en production.
            </p>
            <p>
                Ce parcours atypique reflète ma capacité à m'adapter, à apprendre rapidement et à m'investir pleinement dans les projets qui me passionnent. Toujours curieux, je continue de m'auto-former, notamment en travaillant sur des projets personnels comme un jeu de cartes en Python avec la bibliothèque Pygame. Un projet que j'espère voir un jour publié sur Steam !
            </p>
        </div>
    );
}

export default MyStory;
