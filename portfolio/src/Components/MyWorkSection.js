import React, {useEffect, useState} from 'react';
import { faChevronLeft, faChevronRight, faPaintRoller} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Modal} from "./Modal";
function MyWorkSection() {

    const dataWork = [
        { image: "Images/MyWork/superadmin.jpg", title: "ISIA v2 module super admin"},
        { image: "Images/MyWork/ticket.png", title: "ISIA v2 module de ticketing" },
        { image: "Images/MyWork/v3dashboard.jpg", title: "ISIA v3 nouvelle interface utilisateur" },
        { image: "Images/MyWork/apiv3.jpg", title: "ISIA v3 création d'une api avec ApiPlatform" },
        { image: "Images/MyWork/moduleresource.jpg", title: "ISIA v2 intégration jsTree et calendar" },
        { image: "Images/MyWork/carddiagram.jpg", title: "CardGame réalisation du diagramme de la bdd" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedWork, setSelectedWork] = useState(null);
    const [itemsPerPage, setItemsPerPage] = useState();
    const totalPages = Math.ceil(dataWork.length / itemsPerPage);
    const updateItemsPerPage = () => {
        const width = window.innerWidth;

        if (width > 1080) {
            setItemsPerPage(3);
        } else if (width > 900) {
            setItemsPerPage(2);
        } else {
            setItemsPerPage(1);
        }
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
    };

    const openModal = (work) => {
        setSelectedWork(work);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedWork(null);
    };

    useEffect(() => {
        updateItemsPerPage();
        window.addEventListener('resize', updateItemsPerPage);

        return () => {
            window.removeEventListener('resize', updateItemsPerPage);
        };
    }, []);

    return (
        <>
            <h2><span className="spanTitleH2" id="faPaintRoller"><FontAwesomeIcon icon={faPaintRoller} /></span>Mon travail en action</h2>
            <div className="carousel-wrapper">
                {/* Bouton gauche avec l'icône FontAwesome */}
                <button className="carousel-button left" onClick={goToPrev}>
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </button>

                <div className="carousel-container">
                    <div className="carousel">
                        {dataWork.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage).map((work, index) => (
                            <div className="card" key={index} onClick={() => openModal(work)}>
                                <img src={work.image} alt={work.title} className="card-image"/>
                                <p className="card-title">{work.title}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bouton droit avec l'icône FontAwesome */}
                <button className="carousel-button right" onClick={goToNext}>
                    <FontAwesomeIcon icon={faChevronRight}/>
                </button>
            </div>

            <div className="pagination">
                {Array.from({length: totalPages}).map((_, pageIndex) => (
                    <span
                        key={pageIndex}
                        className={`pagination-dot ${pageIndex === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(pageIndex)}
                    ></span>
                ))}
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} work={selectedWork}/>
        </>
    );
}

export default MyWorkSection;