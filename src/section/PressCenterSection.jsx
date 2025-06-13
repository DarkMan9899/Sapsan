import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/sections/_press.scss';
import pressData from '../baza/PressCenterSection.json';

const PressCenterSection = () => {
    const { t } = useTranslation();
    const [activeArticle, setActiveArticle] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState(null);

    const articles = pressData.slice(0, 3); // Կարող ես հանել slice(0, 3) եթե ուզում ես բոլոր հոդվածները

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const section = document.getElementById('press');
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    useEffect(() => {
        const handleEsc = e => {
            if (e.key === 'Escape') closeModal();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    const openArticleModal = article => {
        setSelectedArticle(article);
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <section className={`press container ${isVisible ? 'visible' : ''}`} id="press">
            <h2>{t('press_heading', 'Пресс-Центр')}</h2>
            <div className="press__list">
                {articles.map((item, index) => (
                    <div
                        className={`press__item ${index === activeArticle ? 'active' : ''}`}
                        key={item.id}
                        onMouseEnter={() => setActiveArticle(index)}
                    >
                        <img src={item.image} alt={t(item.titleKey)} />
                        <span className="press__date">{item.date}</span>
                        <h4>{t(item.titleKey)}</h4>
                        <p>
                            {t(item.textKey)}{' '}
                            <a
                                href="#"
                                onClick={e => {
                                    e.preventDefault();
                                    openArticleModal(item);
                                }}
                            >
                                {t('read_more', 'Read More')}
                            </a>
                        </p>
                    </div>
                ))}
            </div>

            {modalOpen && selectedArticle && (
                <div className="article-modal">
                    <div className="modal-overlay" onClick={closeModal}></div>
                    <div className="modal-content">
                        <button className="close-modal" onClick={closeModal}>
                            ×
                        </button>
                        <img
                            src={selectedArticle.image}
                            alt={t(selectedArticle.titleKey)}
                            className="modal-image"
                        />
                        <span className="press__date">{selectedArticle.date}</span>
                        <h3>{t(selectedArticle.titleKey)}</h3>
                        <div className="article-full-text">
                            {t(selectedArticle.fullTextKey)
                                .split('\n')
                                .map((paragraph, i) => (
                                    <p key={i}>{paragraph}</p>
                                ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default PressCenterSection;
