import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/pages/_ProductCatalogPage.scss';
import productsData from '../baza/catalogs.json';

const PRODUCTS_PER_PAGE = 12;

const ProductCatalogPage = () => {
    const { t } = useTranslation();
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(productsData.length / PRODUCTS_PER_PAGE);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const paginatedProducts = productsData.slice(
        (currentPage - 1) * PRODUCTS_PER_PAGE,
        currentPage * PRODUCTS_PER_PAGE
    );

    return (
        <section className="product-catalog-page">
            <div className="container">
                <h1 className="catalog-title">
                    {t('product_catalog.title_prefix')} <span>{t('product_catalog.title_highlight')}</span>
                </h1>

                <div className="catalog-grid">
                    {paginatedProducts.map((product) => (
                        <div className="catalog-card" key={product.id}>
                            <div className="catalog-card__image">
                                <img src={product.image} alt={t(product.title)} />
                            </div>
                            <div className="catalog-card__info">
                                <div className="catalog-card__info__text">
                                    <h4>{t(product.title)}</h4>
                                    <p>{t(product.description)}</p>
                                </div>

                                <a
                                    href={product.link}
                                    className="catalog-card__btn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {t('buy_online', 'Գնել օնլայն')}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="pagination">
          <span
              className="pagination__arrow"
              onClick={() => handlePageChange(currentPage - 1)}
          >
            ‹
          </span>
                    {[...Array(totalPages)].map((_, i) => (
                        <span
                            key={i}
                            className={`pagination__dot ${currentPage === i + 1 ? 'active' : ''}`}
                            onClick={() => handlePageChange(i + 1)}
                        >
              {i + 1}
            </span>
                    ))}
                    <span
                        className="pagination__arrow"
                        onClick={() => handlePageChange(currentPage + 1)}
                    >
            ›
          </span>
                </div>
            </div>
        </section>
    );
};

export default ProductCatalogPage;
