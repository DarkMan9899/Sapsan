import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import pressArticles from '../baza/PressCenterSection.json';
import "../styles/pages/_PressCenterPage.scss"

const ARTICLES_PER_PAGE = 6;

const PressCenterPage = () => {
    const { t } = useTranslation();
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedArticle, setSelectedArticle] = useState(null);

    const totalPages = Math.ceil(pressArticles.length / ARTICLES_PER_PAGE);

    const paginatedArticles = pressArticles.slice(
        (currentPage - 1) * ARTICLES_PER_PAGE,
        currentPage * ARTICLES_PER_PAGE
    );

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const openPopup = (article) => {
        setSelectedArticle(article);
        document.body.classList.add('modal-open');
    };

    const closePopup = () => {
        setSelectedArticle(null);
        document.body.classList.remove('modal-open');
    };

    return (
        <section className="press-center-page">
            <div className="container">
                <h1 className="press-title"><span>{t("press")}</span></h1>

                <div className="news-grid">
                    {paginatedArticles.map((article) => (
                        <div key={article.id} className="news-card" onClick={() => openPopup(article)}>
                            <img src={article.image} alt={t(article.titleKey)} />
                            <div className="news-info">
                                <div className="news-meta">
                                    <span>{article.date.split(' ')[0]}</span>
                                    <span>{article.date.split(' ')[1]}</span>
                                </div>
                                <h3>{t(article.titleKey)}</h3>
                                <p>
                                    {t(article.textKey)} <span className="read-more">{t("read_more")}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="pagination">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <span
                            key={i}
                            className={currentPage === i + 1 ? 'active' : ''}
                            onClick={() => handlePageChange(i + 1)}
                        >
              {i + 1}
            </span>
                    ))}
                </div>
            </div>

            {selectedArticle && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={closePopup}>×</button>
                        <img src={selectedArticle.image} alt={t(selectedArticle.titleKey)} />
                        <div className="news-meta">
                            <span>{selectedArticle.date.split(' ')[0]}</span>
                            <span>{selectedArticle.date.split(' ')[1]}</span>
                        </div>
                        <h2>{t(selectedArticle.titleKey)}</h2>
                        <p>{t(selectedArticle.fullTextKey)}</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default PressCenterPage;
