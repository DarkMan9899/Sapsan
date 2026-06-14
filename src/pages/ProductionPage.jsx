import React from 'react';
import { useTranslation } from 'react-i18next';
import "../styles/pages/_ProductionPage.scss";
import gmpCert from "../assets/rnd-bg.jpg";
import isoCert from "../assets/rnd-bg.jpg";
import productionImg from "../assets/rnd-bg.jpg";
import ProductionSection from "../section/ProductionSection"; // տեղադրիր համապատասխան նկարը

const ProductionPage = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="production-page">
            <div className="container">
               <ProductionSection/>

                <div className="description-section">
                    <div className="desc-text">
                        <h3>{t('productionpage.subtitle')}</h3>
                        <p>{t('productionpage.text')}</p>
                    </div>
                    <div className="desc-img">
                        <img src={productionImg} alt="Production Process" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductionPage;
