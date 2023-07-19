import React, { useEffect, useState }from 'react';
import { Link, NavLink } from "react-router-dom";
import {HelmetProvider} from 'react-helmet-async'
import './home.scss';
import Seo from '../../components/Seo';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer'
import Tag from '../../components/Tag'
import Title from '../../components/Title'
import BtnMenu from '../../components/BtnMenu'
import FlipCard from '../../components/FlipCard';
import GalleryCard from '../../components/GalleryCard'
import BtnContact from '../../components/BtnContact';
import ArrowAnimation from '../../components/ArrowAnimation';
import ArrowRight from '../../components/ArrowRight';
import ArrowLeft from '../../components/ArrowLeft';
import BtnModalLegal from '../../components/BtnModalLegal';
import useFetch from "../../utils";
import { LanguageContext } from '../../components/LanguageContext';

function Home () {
    useEffect(() => {
        document.documentElement.lang = "fr";
    });
    document.querySelector('meta[name=description]')?.setAttribute('content','Portfolio de Stéphanie Bertaudeau, développeur web, qui vous propose la meilleure solution technique optimisée et sécurisée pour vos applications Web adaptée à vos besoins')
    const { data, isLoading, error } = useFetch(`data.json`);
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

    if (data[language]?.project) { 
        var dataSort = data[language]?.project.sort((a, b) => b.id - a.id);
    }
 
return (
<>
    <HelmetProvider>
    <LanguageContext.Provider value ={[language, setLanguage]}>
    <Seo title ='Stéphanie Bertaudeau, développeur Web' description ='Portfolio de Stéphanie Bertaudeau, développeur web, qui vous propose la meilleure solution technique optimisée et sécurisée pour vos applications Web adaptée à vos besoins' image = 'http://assets/myWebsite_project.png' imageAlt ='website Home' name='' url='' />
    <BtnMenu />
    <Header />
    <main id="arrowTop">
        <div className='banner'>
            <div className='bubble__one'></div>
            <div className='bubble__two'></div>
            <div className='bubble__three'></div>
            <div className='bubble__four'></div>
            <div className='bubble__five'></div>
            < FlipCard />
            < ArrowAnimation />
            <h1>{data[language]?.title}</h1>
        </div>
        <h2>Stéphanie Bertaudeau</h2>
        <p>{data[language]?.presentation}</p>
        <section className='techstack'>
        <ArrowRight />
            <h2><Title content ='Tech Stack' /></h2>
            <div className='techstack__tags'>
                        {data[language]?.tagTechStack && data[language]?.tagTechStack.map((tag, index) => (
                            <Tag tag={tag} key={index} className ='techstack__tags-tag'/>
                        ))}
                    </div>
        </section>
        <section className='skills'>
        <ArrowLeft />
            <h2><Title content = 'Skills'/></h2>
            <div className='skills__tags'>
                        {data[language]?.tagSkills && data[language]?.tagSkills.map((tag, index) => (
                            <Tag tag={tag} key={index} className ='techstack__tags-tag'/>
                        ))}
                    </div>
        <ArrowRight />
        </section>
    </main>
    <article className='gallery'>
        <h2><Title content = {data[language]?.gallery_title} /></h2>
        <div className="portfolio_done__gallery">
                    {isLoading ? (
                        <div>Chargement...</div>
                    ) : (
                        dataSort &&
                        dataSort.map((project) => (
                            ((dataSort.length - project.id) < 3) ? (
                            <div className='portfolio_done__gallery-card'  key={project.id}>
                                <Link to={`/Project/${project.id}`}>
                                    <GalleryCard  key={project.id} number = {dataSort.length + 1 - project.id} contentTitle ={project.title} picture_src={project.picture_src} /> 
                                        <div className='gallerycard__number'>
                                            <span>{dataSort.length + 1 - project.id}</span>
                                        </div>
                                </Link>
                            </div>) : null
                    )))}
        </div>
    </article>
    <BtnContact />
    <Footer />
    <BtnModalLegal />
    </LanguageContext.Provider>
    </HelmetProvider>
</>
)
}
export default Home;