import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        setCurrentLanguage(language);
    };

    useEffect(() => {
        i18n.on('languageChanged', lang => setCurrentLanguage(lang));
        return () => {
            i18n.off('languageChanged');
        };
    }, [i18n]);

    return (
        <div className="fixed left-2 bottom-2 p-4 rounded-lg bg-black-100 ">
            {currentLanguage !== 'en' && (
                <button onClick={() => changeLanguage('en')}>
                    English
                </button>
            )}
            {currentLanguage !== 'es' && (
                <button onClick={() => changeLanguage('es')}>
                    Español
                </button>
            )}
        </div>
    );
};

export default LanguageSwitcher;
