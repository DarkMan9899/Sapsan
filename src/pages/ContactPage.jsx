import React from 'react';
import '../styles/pages/_ContactPage.scss';
import ContactSection from '../section/ContactSection';

const ContactPage = () => {
    return (
        <div className="contact-page">
            <div className="map-wrapper">
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.7448989940985!2d44.49701241566591!3d40.179185979393204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4041fda3bbafd13d%3A0xc9912f37cc53a2e!2sYerevan%2C%20Armenia!5e0!3m2!1sen!2sam!4v1615928796441!5m2!1sen!2sam"
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
