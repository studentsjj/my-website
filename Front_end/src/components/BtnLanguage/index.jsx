import React, { useContext } from 'react';
import './btnLanguage.scss';
import iconUK from '../../assets/🦆 icon _United Kingdom_.png';
import iconFrance from '../../assets/icon_france.png';
import { LanguageContext } from '../LanguageContext';
function BtnLanguage() {
    const [language, setLanguage] = useContext(LanguageContext);

    return (
        <>
            <div className='btnLanguage'>
                <img
                    alt='choose your language'
                    id='btnLanguage'
                    onClick={() => {
                        language === 'en'
                            ? localStorage.setItem('language', 'fr')
                            : localStorage.setItem('language', 'en');
                        language === 'en'
                            ? setLanguage('fr')
                            : setLanguage('en');
                    }}
                    src={language === 'en' ? iconFrance : iconUK}
                    className='iconNavbar'
                />
            </div>
        </>
    );
}
export default BtnLanguage;
