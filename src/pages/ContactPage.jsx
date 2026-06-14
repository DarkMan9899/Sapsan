import React from 'react';
import '../styles/pages/_ContactPage.scss';
import ContactSection from '../section/ContactSection';

const ContactPage = () => {
    return (
        <div className="contact-page">
            <div className="map-wrapper">
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6095.562769517748!2d44.5068251!3d40.1916784!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sam!4v1750603785895!5m2!1sen!2sam"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                <svg className="map-wave" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path
                        fill="#fff"
                        d="M0,192L60,176C120,160,240,128,360,122.7C480,117,600,139,720,149.3C840,160,960,160,1080,160C1200,160,1320,160,1380,160L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                    ></path>
                </svg>
            </div>

            <ContactSection />
        </div>
    );
};

export default ContactPage;
