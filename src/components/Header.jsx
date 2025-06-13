import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import '../styles/componets/_header.scss';
import  logo from "../assets/Sapsan logo transparent 1.png"

const Header = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLanguage, setActiveLanguage] = useState('hy');

    useEffect(() => {
        const savedLang = localStorage.getItem('i18nextLng');
        if (savedLang && savedLang !== i18n.language) {
            i18n.changeLanguage(savedLang);
            setActiveLanguage(savedLang);
        }
    }, []);

    useEffect(() => {
        document.body.classList.toggle('no-scroll', isMobileMenuOpen);
    }, [isMobileMenuOpen]);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setActiveLanguage(lang);
        localStorage.setItem('i18nextLng', lang);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const isActive = (path) => location.pathname === path;

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <a href="/">
                        <img src={logo} alt="Sapsan logo" className="logo-image"/>
                    </a>
                </div>

                <button
                    className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`nav ${isMobileMenuOpen ? 'active' : ''}`}>
                    <a href="/" className={isActive('/') ? 'active' : ''}>{t('home')}</a>
                    <a href="/about" className={isActive('/about') ? 'active' : ''}>{t('about')}</a>
                    <a href="/catalogs" className={isActive('/catalogs') ? 'active' : ''}>{t('catalog')}</a>
                    <a href="/pressCenter" className={isActive('/pressCenter') ? 'active' : ''}>{t('press')}</a>
                    <a href="/production" className={isActive('/production') ? 'active' : ''}>{t('production')}</a>
                    <a href="/cooperation" className={isActive('/cooperation') ? 'active' : ''}>{t('cooperation')}</a>
                    <a href="/contact" className={isActive('/contact') ? 'active' : ''}>{t('contact1')}</a>

                    <div className="lang-switch mobile-lang">
                        <button onClick={() => changeLanguage('ru')} className={activeLanguage === 'ru' ? 'active' : ''}>RU</button>
                        <button onClick={() => changeLanguage('en')} className={activeLanguage === 'en' ? 'active' : ''}>EN</button>
                        <button onClick={() => changeLanguage('hy')} className={activeLanguage === 'hy' ? 'active' : ''}>ARM</button>
                    </div>
                </nav>

                <div className="lang-switch desktop-lang">
                    <button onClick={() => changeLanguage('ru')} className={activeLanguage === 'ru' ? 'active' : ''}>RU</button>
                    <button onClick={() => changeLanguage('en')} className={activeLanguage === 'en' ? 'active' : ''}>EN</button>
                    <button onClick={() => changeLanguage('hy')} className={activeLanguage === 'hy' ? 'active' : ''}>ARM</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
