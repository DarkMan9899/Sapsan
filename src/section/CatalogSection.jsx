import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/sections/_catalog.scss';
import productsData from '../baza/catalogs.json';

const CatalogSection = () => {
    const { t } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const openModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    // 🔒 lock body scroll
    useEffect(() => {
        document.body.style.overflow = isModalOpen ? 'hidden' : '';
        return () => (document.body.style.overflow = '');
    }, [isModalOpen]);

    return (
        <section className="container" id="catalog">
            <div className="catalog">
                <div className="catalog-header">
                    <h2>{t('catalog_heading')}</h2>
                </div>

                {/* 🔹 PRODUCT LIST (NO SLIDER) */}
                <div className="catalog__list">
                    {productsData.map(product => (
                        <div className="catalog__item" key={product.id}>
                            <div className="catalog__item-image">
                                <img
                                    src={product.image}
                                    alt={t(product.title)}
                                />
                            </div>

                            <div className="catalog__item-content">
                                <div className="catalog__item-content_text">
                                    <h4>{t(product.title)}</h4>
                                    <p>{t(product.description)}</p>
                                </div>

                                <button
                                    className="btn-outline"
                                    onClick={() => openModal(product)}
                                >
                                    {t('view_details', 'Կարդալ ավելին')}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 🔹 MODAL */}
            {isModalOpen && selectedProduct && (
                <div className="custom-modal" onClick={closeModal}>
                    <div
                        className="custom-modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="close-button" onClick={closeModal}>
                            ×
                        </button>

                        <h3>{t(selectedProduct.title)}</h3>

                        <p className="modal-text">
                            {t(selectedProduct.modalText)}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default CatalogSection;
