import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/sections/_production.scss';
import logo1 from "../assets/Ellipse 2.png"
import logo3 from "../assets/Ellipse 3.png"

const ProductionSection = () => {
    const { t } = useTranslation();

    return (
        <section className="container" id="production">
            <div className="production ">
                <h2>{t('production_heading', 'Производство')}</h2>
                <div className="production__cards">
                    <div className="production__card">
                        <img src={logo1} alt="GMP Certification"/>
                        <p>
                            {t('gmp_description', 'Организация производства и контроль качества соответствует правилам GMP. Наше производство сертифицировано по международным стандартам.')}
                        </p>
                    </div>
                    <div className="production__card">
                        <img src={logo3} alt="ISO 22000"/>
                        <p>
                            {t('iso_description', 'Система менеджмента безопасности пищевой продукции соответствует стандарту ISO 22000:2018. Все наши процессы соответствуют международным требованиям качества.')}
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ProductionSection;