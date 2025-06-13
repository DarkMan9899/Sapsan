import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import "../styles/pages/_CooperationPage.scss";

import logo1 from "../assets/rnd-bg.jpg";
import logo2 from "../assets/rnd-bg.jpg";
import logo3 from "../assets/rnd-bg.jpg";
import logo4 from "../assets/rnd-bg.jpg";
import logo5 from "../assets/rnd-bg.jpg";


const CooperationPage = () => {
    const { t } = useTranslation();

    const logos = [logo1, logo2, logo3, logo4,logo5];

    return (
        <div className="cooperation-page">
            <div className="container">
                <h2 className="page-title">{t('cooperationpage.page.title')}</h2>

                <div className="slider-wrapper">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={3}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },

                        }}
                    >
                        {logos.map((logo, index) => (
                            <SwiperSlide key={index}>
                                <img src={logo} alt={`Partner ${index + 1}`} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="text-block">
                    <h3><span>Sapsan</span> Pharmaceuticals</h3>
                    <p>{t('cooperationpage.page.description')}</p>
                </div>
            </div>
        </div>
    );
};

export default CooperationPage;
