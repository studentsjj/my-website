import React, { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Link, NavLink } from "react-router-dom";
import './portfolio.scss';

import Seo from '../../components/Seo';
import BtnMenu from '../../components/BtnMenu';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import BtnContact from '../../components/BtnContact';
import Title from '../../components/Title';
import GalleryCard from '../../components/GalleryCard';
import useFetch from "../../utils";
import BtnModalLegal from '../../components/BtnModalLegal';
import { LanguageContext } from '../../components/LanguageContext';
import { DarkModeContext } from '../../components/DarkModeContext';

function Portfolio() {
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
        <HelmetProvider>
        <LanguageContext.Provider value ={[language, setLanguage]}>
        <DarkModeContext.Provider value ={{darkMode, setDarkMode}}>
        <Seo title ='Stéphanie Bertaudeau, développeur Web' description ='Portfolio de Stéphanie Bertaudeau, développeur web, qui vous propose la meilleure solution technique optimisée et sécurisée pour vos applications Web adaptée à vos besoins' image = 'http://assets/myWebsite_project.png' imageAlt ='website Home' name='' url='' />
        <BtnMenu />
        <Header />
        <main id="arrowTop" >
            <section className={darkMode==='true'? 'portfolio_done dark-mode' : 'portfolio_done'} >
                <h2><Title content = {data[language]?.portfolio_done_title} /></h2>
            <div className="portfolio_done__gallery">
                    {isLoading ? (
                        <div>Chargement...</div>
                    ) : (
                        data[language].project &&
                        data[language].project.map((project) => (
                            <div className='portfolio_done__gallery-card'  key={project.id}>
                                <Link to={`/Project/${project.id}`}>
                                    <GalleryCard  key={project.id} contentTitle ={project.title} picture_src={project.picture_src}/>
                                 </Link>
                            </div>
                    )))}
                </div>
            </section>
            < section className={darkMode==='true'? 'portfolio_todo dark-mode' : 'portfolio_todo'}>
                <h2><Title content = {data[language]?.portfolio_todo_title} /></h2>
                <div className='portfolio_todo__gallery' >
                    <GalleryCard   contentTitle ={data[language]?.portfolio_todo_card_one} picture_src={'/my-website/assets/mecanique_project.webp'} />
                    <GalleryCard  contentTitle ={data[language]?.portfolio_todo_card_two} picture_src={'/my-website/assets/4lReds_project.webp'}/> 
                    <GalleryCard   contentTitle ={data[language]?.portfolio_todo_card_three} picture_src={'/my-website/assets/viticulture_project.webp'}/>
                </div>
            </section>
        </main>
        <BtnContact />
        <Footer />
        <BtnModalLegal />
        </DarkModeContext.Provider>
        </LanguageContext.Provider>
        </HelmetProvider>
    </>
    )
}
export default Portfolio;