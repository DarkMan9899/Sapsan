import React from 'react';
import { useTranslation } from 'react-i18next';
import "../styles/pages/_ProductionPage.scss";
import gmpCert from "../assets/rnd-bg.jpg";
import isoCert from "../assets/rnd-bg.jpg";
import productionImg from "../assets/rnd-bg.jpg"; // տեղադրիր համապատասխան նկարը

const ProductionPage = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="production-page">
            <div className="container">
                <h2 className="production-title">
                   <p>{t("productionpage.title")}</p>
                </h2>

                <div className="certificates">
                    <div className="cert-box">
                        <img src={gmpCert} alt="GMP" />
                        <p>{t('productionpage.cert1')}</p>
                    </div>
                    <div className="cert-box">
                        <img src={isoCert} alt="ISO 22000" />
                        <p>{t('productionpage.cert2')}</p>
                    </div>
                </div>

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
