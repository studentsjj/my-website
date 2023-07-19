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

    return (
        <>
            <LanguageContext.Provider value ={[language, setLanguage]}>
            <BtnMenu />
            <Header />
            <div className="form"> 
                <ContactForm/>
            </div>
            <Footer />
            <BtnModalLegal />
            </LanguageContext.Provider>
        </>
    )
}
export default Contact;