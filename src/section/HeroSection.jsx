import React from 'react';
import { useTranslation } from 'react-i18next';
import "../styles/sections/_hero.scss";
import hero from '../assets/Group 5587.png';
import {Link} from "react-router-dom";
const HeroSection = () => {
    const { t } = useTranslation();

    return (
        <section className="hero">
            <div className="hero__content container">
                <h1>
                    <span>Sapsan</span> <span className="highlight">Pharmaceuticals</span>
                </h1>
                <p>{t('hero_text')}</p>
                {/*<Link to="/about" className="btn">*/}
                {/*    {t('read_more', { defaultValue: 'Կարդալ ավելին' })}*/}
                {/*</Link>*/}
            </div>
            <div className="hero__image">
                <img src={hero} alt={t('capsule_alt')} />
            </div>
        </section>
    );
};

export default HeroSection;
