import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/sections/_rnd.scss';

const RNDSection = () => {
    const { t } = useTranslation();

    return (
        <section className=" container"  id="rnd">
            <div className="rnd__container">
                <div className="rnd">
                    <div className="rnd__overlay">
                        <h2>R&D</h2>
                        <h3>{t('rnd_subtitle', 'Разработка и исследование')}</h3>
                        <p>
                            {t('rnd_description', 'Мы создаем новые продукты на основе уникальных идей, мирового научного опыта и современных инновационных технологий.')}
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default RNDSection;