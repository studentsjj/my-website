import React, { createContext, useContext } from 'react';
import './home.scss';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer'
import Tag from '../../components/Tag'
import Title from '../../components/Title'

import BtnMenu from '../../components/BtnMenu'
import FlipCard from '../../components/FlipCard';

import { useEffect, useState } from 'react';
import Translation from './data.json'



import GalleryCard from '../../components/GalleryCard'
import BtnContact from '../../components/BtnContact';

import ArrowAnimation from '../../components/ArrowAnimation';
import ArrowRight from '../../components/ArrowRight';
import ArrowLeft from '../../components/ArrowLeft';
import useFetch from "../../utils";
import { Link } from "react-router-dom";


function Home () {
    useEffect(() => {
        document.documentElement.lang = "fr";
    });
    const { data, isLoading, error } = useFetch(`data.json`);
    
   

    const [content, setContent]= useState({})
    let language = localStorage.getItem("language")
    /*if (!language) {localStorage.setItem("language","en")}
    if (language==="fr") {setContent(Translation.fr)
    }else if(language==="en"){setContent(Translation.en)}*/

  
    useEffect(() =>{
        let language = localStorage.getItem("language")
        if (!language) {localStorage.setItem("language","fr")}
        if (language==="fr") {setContent(Translation.fr)
        }else if(language==="en"){setContent(Translation.en)}
    }, [language])
    const dataSort = data.sort((a, b) => b.id - a.id);
    
return (
    <>
    
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
            <h1>{content.title}</h1>
        </div>
        <h2>Stéphanie Bertaudeau</h2>
        <p>{content.presentation}</p>
        <section className='techstack'>
        <ArrowRight />
            <Title content ='Tech Stack' />
            <div className='techstack__tags'>
                        {content.tagTechStack && content.tagTechStack.map((tag, index) => (
                            <Tag tag={tag} key={index} className ='techstack__tags-tag'/>
                        ))}
                    </div>
        </section>
        <section className='skills'>
        <ArrowLeft />
            <Title content = 'Skills'/>
            <div className='skills__tags'>
                        {content.tagSkills && content.tagSkills.map((tag, index) => (
                            <Tag tag={tag} key={index} className ='techstack__tags-tag'/>
                        ))}
                    </div>
        <ArrowRight />
        </section>
        
    </main>
    <article className='gallery'>
        <Title content = {content.gallery_title} />
        <div className="portfolio_done__gallery">
                    {isLoading ? (
                        <div>Chargement...</div>
                    ) : (
                        dataSort &&
                        dataSort.map((project) => (
                            ((dataSort.length - project.id) < 3) ? (
                            <div className='portfolio_done__gallery-card'  key={project.id}>
                                <Link to={`/Project/${project.id}`}>
                                    <GalleryCard  key={project.id} number = {data.length + 1 - project.id} contentTitle ={project.title} picture_src={project.picture_src}/>
                                 </Link>
                            </div>) : null
                            
                    )))}
                </div>
       
    </article>
    <BtnContact />
    <Footer />
    </>
)
}

export default Home;