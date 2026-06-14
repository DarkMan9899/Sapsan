import React, { useState, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n/index';
import HeroSection from '../section/HeroSection';
import AboutSection from '../section/AboutSection';
import CatalogSection from '../section/CatalogSection';
import ProductionSection from '../section/ProductionSection';
import RNDSection from '../section/RNDSection';
import PartnersSection from '../section/PartnersSection';
import PressCenterSection from '../section/PressCenterSection';
import ContactSection from '../section/ContactSection';
import '../styles/main.scss';

const App = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [activeSection, setActiveSection] = useState('hero');


    // Track scroll position for animations and active section
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);

            // Determine active section based on scroll position
            const sections = document.querySelectorAll('section[id]');
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(section.getAttribute('id'));
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollPosition]);

    // Preload images to prevent flashing during animations
    useEffect(() => {
        const imageUrls = [
            '../assets/about-image.webp',
            '../assets/capsule.png',
            '../assets/product1.webp',
            '../assets/product2.webp',
            '../assets/product3.webp',
            '../assets/product4.webp',
            '../assets/certificate1.webp',
            '../assets/certificate2.webp',
            '../assets/certificate3.webp',
            '../assets/partner1.webp',
            '../assets/partner2.webp',
            '../assets/partner3.webp',
            '../assets/partner4.webp',
            '../assets/partner5.webp',
            '../assets/gmp-cert.webp',
            '../assets/iso-cert.webp',
        ];

        imageUrls.forEach(url => {
            const img = new Image();
            img.src = url;
        });
    }, []);


    return (
        <I18nextProvider i18n={i18n}>
            <div className="app">
                {/*<Header activeSection={activeSection} />*/}
                <main>
                    <HeroSection />
                    <CatalogSection />
                    <AboutSection />
                    <ProductionSection />
                    <RNDSection />
                    {/*<PartnersSection />*/}
                    {/*<PressCenterSection />*/}
                    <ContactSection />
                </main>
                {/*<SubscribeSection />*/}
            </div>
        </I18nextProvider>
    );
};

export default App;