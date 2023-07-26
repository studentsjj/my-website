import React from 'react';
import { NavLink } from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async'
import './about.scss';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer'
import BtnContact from '../../components/BtnContact';
import Title from '../../components/Title'
import { useEffect, useState } from 'react';
import Seo from'../../components/Seo'
import openClassrooms from '../../assets/openclassrooms.webp'
import ecole42 from '../../assets/42.png'
import Tag from '../../components/Tag'
import htmlIcon from '../../assets/🦆 icon _HTML 5 Logo_.png'
import cssIcon from '../../assets/🦆 icon _Alternate CSS3 Logo_.png'
import jsIcon from '../../assets/🦆 icon _JavaScript (JS) Square_.png'
import mongoIcon from '../../assets/🦆 icon _Envira Gallery_.png'
import expressIcon from '../../assets/express 1.png'
import reactIcon from '../../assets/🦆 icon _React_.png'
import nodeIcon from '../../assets/🦆 icon _Node.js_.png'
import gitIcon from '../../assets/🦆 icon _github_blue.png'
import slackIcon from '../../assets/🦆 icon _Slack Logo_.png'
import figmaIcon from '../../assets/🦆 icon _Figma_.png'
import notionIcon from '../../assets/notion 1.png'
import Masonry from 'react-masonry-css';
import BtnMenu from '../../components/BtnMenu';
import ArrowRight from '../../components/ArrowRight';
import ArrowLeft from '../../components/ArrowLeft';
import BtnModalLegal from '../../components/BtnModalLegal';
import useFetch from "../../utils";
import { LanguageContext } from '../../components/LanguageContext';
import { DarkModeContext } from '../../components/DarkModeContext';

function About() {
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

    return(
        <> 
            <HelmetProvider>
            <LanguageContext.Provider value ={[language, setLanguage]}>
            <DarkModeContext.Provider value ={{darkMode, setDarkMode}} >
            <Seo title ='Stéphanie Bertaudeau, développeur Web' description ='Portfolio de Stéphanie Bertaudeau, développeur web, qui vous propose la meilleure solution technique optimisée et sécurisée pour vos applications Web adaptée à vos besoins' image = 'http://assets/myWebsite_project.png' imageAlt ='website Home' name='' url='' />
            <BtnMenu />
            <Header />
            <main id="arrowTop" className={darkMode==='true'? 'dark-mode' : ''}>
                <div className={darkMode==='true' ? 'education dark-mode' :'education'}>
                <h1><Title content = {data[language]?.about_title} /></h1>
                <ArrowRight />
                <span>2022-2023</span>
                <Masonry breakpointCols={2} className='openC' columnClassName='openC_column'>
                    <img src ={openClassrooms} alt='' />
                    <p>{data[language]?.about_education1}</p>
                </Masonry><
                span> 07-08 2022</span>
                <Masonry breakpointCols={2} className='ecole42' columnClassName='ecole42_column'>
                    <img src ={ecole42} alt='' />
                    <p>Piscine Ecole 42 Angoulême</p>
                </Masonry >
                <ArrowLeft />
            </div>
            <div className={darkMode==='true' ? 'explain dark-mode' :'explain'}> 
                <p>{data[language]?.about_explain}</p> 
                <ArrowRight />  
            </div>
            <section className={darkMode==='true' ? 'softSkills dark-mode' :'softSkills'}>  
                <h2><Title content = 'Soft SKills' /></h2>
                {data[language]?.about_soft_skills && data[language]?.about_soft_skills.map((tag, index) => (
                            <Tag tag={tag} key={index} className ='softSkills__tags-tag'/>
                        ))}
                <ArrowLeft />   
            </section>
            <section className={darkMode==='true' ? 'hardSkills dark-mode' : 'hardSkills'}>
                <h2><Title content = 'Hard Skills' /></h2>
                <div className='hardSkills__icon'>
                    <Masonry breakpointCols={3} className='hardSkills__icon-column'>
                    <img className='html' src ={htmlIcon} alt ='' />
                    <img className='css' src ={cssIcon} alt ='' />
                    <img className='js' src ={jsIcon} alt ='' />
                    </Masonry>
                    <Masonry breakpointCols={4} className='hardSkills__icon-column'>
                    <img className='mongo' src ={mongoIcon} alt ='' />
                    <img className='express' src ={expressIcon} alt ='' />
                    <img className='react' src ={reactIcon} alt ='' />
                    <img className='node' src ={nodeIcon} alt ='' />
                    </Masonry>
                    <Masonry breakpointCols={1} className='hardSkills__icon-column'>
                    <img className='git' src ={gitIcon} alt ='' /></Masonry>
                    <Masonry breakpointCols={3} className='hardSkills__icon-column'>
                    <img className='slack' src ={slackIcon} alt ='' />
                    <img className='figma' src ={figmaIcon} alt ='' />
                    <img className='notion' src ={notionIcon} alt ='' /></Masonry>
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
export default About;