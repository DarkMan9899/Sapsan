import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/sections/_catalog.scss';
import productsData from '../baza/catalogs.json';

const CatalogSection = () => {
    const { t } = useTranslation();
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const products = productsData.slice(0, 4);

    const [itemsPerSlide, setItemsPerSlide] = useState(4);
    const totalSlides = Math.ceil(products.length / itemsPerSlide);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerSlide(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerSlide(2);
            } else if (window.innerWidth < 1280) {
                setItemsPerSlide(3);
            } else {
                setItemsPerSlide(4);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentSlide(prev => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide(prev => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
    const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 75) nextSlide();
        if (touchEnd - touchStart > 75) prevSlide();
    };

    const getSliderStyle = () => ({
        transform: `translateX(${currentSlide * -100}%)`,
        transition: 'transform 0.5s ease-in-out',
        display: 'flex',
        width: `${100 * totalSlides}%`
    });

    return (
        <section className="container" id="catalog">
            <div className="catalog ">
                <div className="catalog-header">
                    <h2>{t('catalog_heading')}</h2>
                    <div className="arrow-nav">
                        <button className="arrow arrow-prev" onClick={prevSlide} aria-label="Previous slide">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M15 18L9 12L15 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button className="arrow arrow-next" onClick={nextSlide} aria-label="Next slide">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18L15 12L9 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="catalog__slider" ref={sliderRef}>
                    <div
                        className="catalog__list"
                        style={getSliderStyle()}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                            <div
                                className="catalog__slide"
                                key={slideIndex}
                                style={{ flex: `0 0 ${100 / totalSlides}%`, display: 'flex', gap: '20px' }}
                            >
                                {products
                                    .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                                    .map(product => (
                                        <div className="catalog__item" key={product.id}>
                                            <div className="catalog__item-image">
                                                <img src={product.image} alt={t(product.title)} />
                                            </div>
                                            <div className="catalog__item-content">
                                                <div className="catalog__item-content_text">
                                                    <h4>{t(product.title)}</h4>
                                                    <p>{t(product.description)}</p>
                                                </div>

                                                <button onClick={openModal} className="btn-outline">
                                                    {t('view_details', 'Կարդալ ավելին')}
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="custom-modal">
                    <div className="custom-modal-content">
                        <button className="close-button" onClick={closeModal}>×</button>
                        <p className="modal-text">{t('online_order_text', 'Օնլայն պատվերի համար զանգահարեք այս հեռախոսահամարով')}:</p>
                        <p className="modal-phone">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="#F26419" viewBox="0 0 512 512" style={{ marginRight: '8px', verticalAlign: 'middle' }}>
                                <path d="M391.1 351c-22.7 0-45-3.6-66.4-10.7-10.6-3.7-22.5-.5-30.5 7.5l-46.1 34.7c-52.1-27.4-94.1-69.4-121.5-121.5l34.7-46.1c8-8 11.2-19.9 7.5-30.5C164.6 165.9 161 143.6 161 121c0-16.5-13.5-30-30-30H60c-16.5 0-30 13.5-30 30C30 338.1 173.9 482 351 482c16.5 0 30-13.5 30-30v-71c0-16.5-13.5-30-30-30z"/>
                            </svg>
                            077 000000
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default CatalogSection;
