import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './contact.scss';
import BtnMenu from "../../components/BtnMenu";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import ContactForm from "../../components/ContactForm";
import BtnModalLegal from "../../components/BtnModalLegal";
import useFetch from "../../utils";
import { LanguageContext } from "../../components/LanguageContext";
import { DarkModeContext } from "../../components/DarkModeContext";


function Contact () {
    const { data, isLoading, error } = useFetch(`/my-website/data.json`);
    if (error) {
        <NavLink to="/Error"></NavLink>;
    }
    // Choose language
    const [language, setLanguage] = useState(() => {
       const langLocalStorage = localStorage.getItem("language");
       return langLocalStorage ? langLocalStorage : "fr";
    });
   useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);
       // Choose DarkMode
        const [darkMode, setDarkMode] = useState(() => {
        const darkModeLocalStorage = localStorage.getItem("darkMode");
        return darkModeLocalStorage==="true" ?  darkModeLocalStorage : "false" ;
    });
    useEffect(() => {
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    return (
        <>
            <LanguageContext.Provider value ={[language, setLanguage]}>
            <DarkModeContext.Provider value ={{darkMode, setDarkMode}}>
            <BtnMenu />
            <Header />
            <div className={darkMode==='true'? 'form dark-mode' :'form' }> 
                <ContactForm/>
            </div>
            <Footer />
            <BtnModalLegal />
            </DarkModeContext.Provider>
            </LanguageContext.Provider>
        </>
    )
}
export default Contact;