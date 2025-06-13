// PartnersSection.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const PartnersSection = () => {
    const { t } = useTranslation();
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [visiblePartners, setVisiblePartners] = useState(5);

    const partners = [
        { id: 1, logo: "/p/rnd-bg.jpg", name: "Sapsan" },
        { id: 2, logo: "/p/rnd-bg.jpg", name: "Sapsan" },
        { id: 3, logo: "/p/rnd-bg.jpg", name: "Sapsan" },
        { id: 4, logo: "/p/rnd-bg.jpg", name: "Sapsan" },
        { id: 5, logo: "/p/rnd-bg.jpg", name: "Sapsan" },
    ];

    const totalSlides = Math.ceil(partners.length / visiblePartners);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 576) {
                setVisiblePartners(1);
            } else if (window.innerWidth < 768) {
                setVisiblePartners(2);
            } else if (window.innerWidth < 992) {
                setVisiblePartners(3);
            } else {
                setVisiblePartners(5);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
        );
    };

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 75) {
            nextSlide();
        }
        if (touchEnd - touchStart > 75) {
            prevSlide();
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 4000);
        return () => clearInterval(interval);
    }, [currentSlide]);

    useEffect(() => {
        if (sliderRef.current) {
            const slideWidth = sliderRef.current.offsetWidth / visiblePartners;
            sliderRef.current.style.transform = `translateX(-${currentSlide * slideWidth * visiblePartners}px)`;
        }
    }, [currentSlide, visiblePartners]);

    return (
        <section className="partners" id="cooperation">
            <div className="container">
                <h2>{t('cooperation_heading', 'Сотрудничество')}</h2>

                <div className="partners__slider-container">
                    <div
                        className="partners__logos"
                        ref={sliderRef}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {partners.map((partner) => (
                            <div key={partner.id} className="partner-logo-container">
                                <img src={partner.logo} alt={partner.name} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="navigation-wrapper">
                    <div className="slider-dots">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${currentSlide === index ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(index)}
                            />
                        ))}
                    </div>

                    <div className="arrow-nav">
                        <div className="arrow arrow-prev" onClick={prevSlide}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M15 18L9 12L15 6" stroke="#333" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div className="arrow arrow-next" onClick={nextSlide}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18L15 12L9 6" stroke="#333" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;