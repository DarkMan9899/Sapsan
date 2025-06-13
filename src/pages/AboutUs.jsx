// components/AboutPage.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/pages/_AboutPage.scss';
import img1 from "../assets/rnd-bg.jpg"

const AboutPage = () => {
    const { t } = useTranslation();

    return (
        <section className="about-page">
            <div className="container">


                <div className="about-page__image">
                    <img src={img1} alt="About Sapsan"/>
                </div>

                <h1 className="about-page__title">
                    <span className="highlight">{t('about_page.highlight')}</span> Pharmaceuticals
                </h1>

                <p className="about-page__description">{t('about_page.description')}</p>

                <div className="about-page__footer-logo">
                    <img src={img1} alt="Sapsan Logo"/>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
