import { useTranslation } from 'react-i18next';
import '../styles/sections/_subscribe.scss';
import logo from '../assets/Sapsan logo transparent 1.png';

const  Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="footer__line" />
            <div className="footer__top">
                <img src={logo} alt="Sapsan Logo" className="footer__logo" />
                <p className="footer__text">{t('footer.subscribeText')}</p>
                <div className="footer__subscribe">
                    <input
                        type="email"
                        placeholder={t('footer.placeholder')}
                        aria-label="email"
                    />
                    <button type="button">{t('footer.subscribe')}</button>
                </div>
            </div>
            <div className="footer__bottom">
                <p>© {new Date().getFullYear()} Sapsan</p>
                <p>{t('footer.rights')}</p>
                <a href="/terms">{t('footer.terms')}</a>
                <a href="/privacy">{t('footer.privacy')}</a>
            </div>
        </footer>
    );

};

export default Footer;