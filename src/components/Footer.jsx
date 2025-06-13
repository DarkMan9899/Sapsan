import { useTranslation } from 'react-i18next';
import '../styles/componets/_footer.scss';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} SAPSAN. {t('all_rights_reserved')}</p>
        </footer>
    );
};

export default Footer;
