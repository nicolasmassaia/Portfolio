import React from 'react';
import {Flag} from 'semantic-ui-react'
import {faBolt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function ExperienceSection() {
    const dataExperience = [
        {
            id: 1,
            duration: "25/01/2021 - 30/11/2024",
            workInformation: "Web Developpeur Full Stack",
            workplace: "CNRS Centre national de la recherche scientifique Saint-Pierre-lès-Nemours Seine-et-Marne ",
            workDescription:
                "Application ISIA : développement des outils de gestion de projets et de ressources pour mieux planifier et fiabiliser les expérimentations, et des outils de FAIRisation des données collectées pour assurer une meilleure utilisation des données produites",

            workTasks: [
                "Développement d'interfaces utilisateurs",
                "Support utilisateurs",
                "Support technique",
                "Maquettage",
                "Développement d'un module de ticketing",
                "Développement d'un module super admin",
                "Mise en place du système de stockage d'upload",
                "Développement d'un dashboard utilisateur (indicateurs, agenda, tickets, ...)",
                "Rédaction de documentation",
                "Formation des nouveaux arrivants/stagiaires",
                "Réorganisation de la base de données",
                "Refonte de l'application de Symfony Twig vers API Platform et React",
                "Mise en place du routing React",
                "Mise à jour des interfaces de Twig vers React optimisé"
            ],
            workLanguage: ["PHP", "Symfony", "Twig", "JavaScript", "Jquery", "React", "SQL/DQL", "Docker", "Bootstrap", "HTML", "CSS", "MarkDown"],
        },
        {
            id: 2,
            duration: "01/04/2020 - 01/05/2020",
            workInformation: "Web Developpeur Full Stack",
            workplace: "O'clock Achères-la-Forêt Télétravail ",
            workDescription: "Projet de fin d'année en groupe pour l'acquisition du titre professionnel développeur web et mobile. Application de partage de points d’intérêt touristiques : une plateforme où les utilisateurs peuvent découvrir, ajouter et partager des lieux touristiques, des attractions, des restaurants ou des activités à faire. Les contributions enrichissent une carte interactive accessible à toute la communauté.",
            workTasks: [
                "Développement d'une api Symfony",
                "Création de la base de données",
                "Maquettage",
                "Rédaction du cahier des charges",

            ],
            workLanguage: ["PHP", "Symfony", "SQL/DQL", "MarkDown"],
        },
        {
            id: 3,
            duration: "01/01/2017 - 01/07/2019",
            workInformation: "Réceptionniste / Premier de réception",
            workplace: "Hôtel Kyriad 3* Nemours ",
            workDescription: null,
            workTasks: [
                "Accueil client",
                "Facturation",
                "Gestion des commandes",
                "Contrôle caisse",
                "Gestion des groupes",
                "Planification des femmes de chambres",
                "Gestion de la salle petit-déjeuner",
                "Résolution des conflits",
                "Gestion des réclamations clients et remboursements",
                "Formation des nouveaux arrivants",
                "Vente de produits et de prestations"
            ],
            workLanguage: ["Travail d'équipe", "Planification", "Coordination", "Adaptabilité", "Diplomatie"],
        }
    ]
    return (
        <div className="my-experience">
            <h2> <span className="spanTitleH2" id="faBolt" ><FontAwesomeIcon icon={faBolt} /></span>Mon expérience:</h2>
            {dataExperience.map((experience) => (
                <div className="experience" key={experience.id}>
                    <div className="work-information">
                        {experience.workInformation}
                    </div>
                    <div className="duration">
                        {experience.duration}
                    </div>

                    <div className="work-place">
                        {experience.workplace}
                        <Flag name='fr'/>
                    </div>


                    {experience.workDescription !== null && (
                        <p className="work-description">{experience.workDescription}</p>
                    )}


                    <ul className="work-task">
                        {experience.workTasks && (
                            experience.workTasks.map((task, index) => (
                                <li key={index}>{task}</li>
                            )))}
                    </ul>
                    {experience.workLanguage && (
                        <div className="work-language">
                            {experience.workLanguage.map((item, index) => (
                                <span className="tag" key={index}>
                                    {item}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default ExperienceSection;