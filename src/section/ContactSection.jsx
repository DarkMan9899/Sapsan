import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/sections/_contact.scss';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';


const ContactSection = () => {
    const { t } = useTranslation();
    const mapRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        const section = document.getElementById('contact');
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    useEffect(() => {
        if (mapRef.current) {
            console.log('Map would be initialized here if API keys were available');
        }
    }, [mapRef]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (formErrors[name]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\+?[0-9\s\-()]{7,}$/;

        if (!formData.name.trim()) errors.name = t('name_required', 'Name is required');
        if (!formData.email.trim()) {
            errors.email = t('email_required', 'Email is required');
        } else if (!emailRegex.test(formData.email)) {
            errors.email = t('email_invalid', 'Please enter a valid email');
        }
        if (formData.phone && !phoneRegex.test(formData.phone)) {
            errors.phone = t('phone_invalid', 'Please enter a valid phone number');
        }
        if (!formData.message.trim()) {
            errors.message = t('message_required', 'Message is required');
        } else if (formData.message.length < 10) {
            errors.message = t('message_too_short', 'Message is too short');
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);
            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
                setFormData({ name: '', email: '', phone: '', message: '' });
                setIsSubmitted(true);
                setTimeout(() => setIsSubmitted(false), 5000);
            } catch (error) {
                console.error('Form submission error:', error);
                setFormErrors({ submit: t('submission_error', 'There was an error submitting your form.') });
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <section className=" container" id="contact">
            <div className={"contact"}>
                <h2>{t('contact_heading', 'Контакты')}</h2>

                <div className="contact__wrapper">
                    {isSubmitted && (
                        <div className="form-success-message">
                            <div className="success-icon">✓</div>
                            <p>{t('form_success', 'Your message has been sent successfully!')}</p>
                        </div>
                    )}
                    <form className="contact__form" onSubmit={handleSubmit}>
                        {['name', 'email', 'phone'].map(field => (
                            <div className="form-group" key={field}>
                                <input
                                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    placeholder={t(`${field}_placeholder`, field === 'phone' ? 'Phone (optional)' : field.charAt(0).toUpperCase() + field.slice(1))}
                                    className={formErrors[field] ? 'error' : ''}
                                    aria-label={t(`${field}_placeholder`, field)}
                                />
                                {formErrors[field] && <span className="error-message">{formErrors[field]}</span>}
                            </div>
                        ))}
                        <div className="form-group">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder={t('message_placeholder', 'Message')}
                            className={formErrors.message ? 'error' : ''}
                            rows="5"
                            aria-label={t('message_placeholder', 'Message')}
                        ></textarea>
                            {formErrors.message && <span className="error-message">{formErrors.message}</span>}
                        </div>
                        {formErrors.submit && <div className="error-message general-error">{formErrors.submit}</div>}
                        <button
                            type="submit"
                            className={`btn ${isSubmitting ? 'loading' : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? <span className="loading-spinner"></span> : t('send_button', 'Отправить')}
                        </button>
                    </form>
                    <div className="contact__info">
                        <div className="contact-details">
                            <p><strong>{t('phone', 'Phone')}:</strong> (010) 529001</p>
                            <p><strong>E-mail:</strong> sapsanpharmaceuticals@gmail.com</p>
                            <p><strong>Ք. Երևան, Սարմենի 90</strong></p>
                            {/*<p><strong>{t('location', 'Location')}:</strong> {t('location_ad', 'location_ad')}</p>*/}
                        </div>
                        <div className="contact-social">
                            <div className="contact-social">
                                <h4>{t('follow_us', 'Follow Us')}</h4>
                                <div className="social-icons">
                                    <a href="https://www.facebook.com/share/1H9eVKsEKj/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                        <FaFacebookF />
                                    </a>
                                    {/*<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">*/}
                                    {/*    <FaTwitter />*/}
                                    {/*</a>*/}
                                    {/*<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">*/}
                                    {/*    <FaLinkedinIn />*/}
                                    {/*</a>*/}
                                    <a href="https://www.instagram.com/sapsan_pharmaceuticals?igsh=MTUzbnpvcDMyeXRsZw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                        <FaInstagram />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ContactSection;
