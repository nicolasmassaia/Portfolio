import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
function MyWorkSection() {

    const dataWork = [
        { image: "Images/MyWork/superadmin.jpg", description: "Réalisation du module super admin" },
        { image: "Images/MyWork/ticket.png", description: "Réalisation du module de ticketing" },
        { image: "Images/MyWork/javascript.jpg", description: "Développement en JavaScript" },
        { image: "Images/MyWork/react.jpg", description: "Interface utilisateur avec React" },
    ];



    return (
        <>
            <h2><span className="spanTitleH2"><FontAwesomeIcon icon={faBriefcase} /></span>Mon travail en action</h2>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            > {dataWork.map((work, Index) => (
                <SwiperSlide>
                    <h4 className="card-title">{work.description}</h4>
                    <img src={work.image} alt={work.description} key={Index}/>

                </SwiperSlide>
            ))}
            </Swiper>
        </>
    );
}

export default MyWorkSection;