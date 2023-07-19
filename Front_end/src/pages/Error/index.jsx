import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import './error.scss';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import ArrowAnimation from '../../components/ArrowAnimation';
import iconHome from '../../assets/🦆 icon _home.png'
import BtnModalLegal from '../../components/BtnModalLegal';
import useFetch from '../../utils';
import { LanguageContext } from '../../components/LanguageContext';


function Error() {
    const { data, isLoading, error } = useFetch(`/my-website/data.json`);
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
        <span className='pageError'>
            <Header />
        </span>
        < section className='error'>
            <p>OUPS !!!</p>
            <p>ERROR 404 !</p>
            <p>La page que vous recherchez n'existe pas ...</p>
            <p>Pour revenir à la page d'accueil c'est par là</p>
            <ArrowAnimation />
            <NavLink to ='/'> <img src ={iconHome} alt =''/></NavLink>
        </section>
        <Footer />
        <BtnModalLegal />
        </LanguageContext.Provider>
        </>
    )
}
export default Error;