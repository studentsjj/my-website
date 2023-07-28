import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './error.scss';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import ArrowAnimation from '../../components/ArrowAnimation';
import iconHome from '../../assets/🦆 icon _home.png';
import BtnModalLegal from '../../components/BtnModalLegal';
import useFetch from '../../utils';
import { LanguageContext } from '../../components/LanguageContext';
import { DarkModeContext } from '../../components/DarkModeContext';

function Error() {
    const { data, isLoading, error } = useFetch(`/my-website/data.json`);
    // Choose language
    const [language, setLanguage] = useState(() => {
        const langLocalStorage = localStorage.getItem('language');
        return langLocalStorage ? langLocalStorage : 'fr';
    });
    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);
    // Choose DarkMode
    const [darkMode, setDarkMode] = useState(() => {
        const darkModeLocalStorage = localStorage.getItem('darkMode');
        return darkModeLocalStorage === 'true' ? darkModeLocalStorage : 'false';
    });
    useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    return (
        <>
            <LanguageContext.Provider value={[language, setLanguage]}>
                <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
                    <span className='pageError'>
                        <Header />
                    </span>
                    <section
                        className={
                            darkMode === 'true' ? 'error dark-mode' : 'error'
                        }
                    >
                        <p>OUPS !!!</p>
                        <p>ERROR 404 !</p>
                        <p>{data[language]?.error_p1}</p>
                        <p>{data[language]?.error_p2}</p>
                        <ArrowAnimation />
                        <Link to='/'>
                            {' '}
                            <img src={iconHome} alt='' />
                        </Link>
                    </section>
                    <Footer />
                    <BtnModalLegal />
                </DarkModeContext.Provider>
            </LanguageContext.Provider>
        </>
    );
}
export default Error;
