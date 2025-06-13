import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import aboutImage from "../assets/rnd-bg.jpg"
import {Link} from "react-router-dom";

const About = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section  className="container" ref={sectionRef}>
            <div className=" about">
                <div className="about__content-wrapper">
                    <div className={`about__image fade-in-up ${isVisible ? 'animated delay-1' : ''}`}>
                        <img src={aboutImage} alt="Sapsan Pharmaceuticals" />
                    </div>
                    <div className={`about__content fade-in-up ${isVisible ? 'animated delay-2' : ''}`}>
                        <div className={`about__heading fade-in-up ${isVisible ? 'animated' : ''}`}>
                            <h2>{t('about_heading')}</h2>
                        </div>
                        <h3>{t('company_name')}</h3>
                        <div className="about__text">
                            <p>
                                {showMore ? t('about_text_full') : t('about_text_short')}
                            </p>

                            <Link to="/about" className="btn-text">
                                { t('read_more')}
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
