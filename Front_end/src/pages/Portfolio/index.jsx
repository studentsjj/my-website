import React from 'react';
import './portfolio.scss';
import BtnMenu from '../../components/BtnMenu';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import BtnContact from '../../components/BtnContact';
import { useEffect, useState } from 'react';
import Translation from '../Home/data.json'
import Title from '../../components/Title';

import GalleryCard from '../../components/GalleryCard';
import ArrowRight from '../../components/ArrowRight';
import ArrowLeft from '../../components/ArrowLeft';
import useFetch from "../../utils";
import { Link } from "react-router-dom";

function Portfolio() {
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

   
    return (
        <>
        <BtnMenu />
        <Header />
        <main id="arrowTop">
            <section className='portfolio_done'>
                <Title content = {content.portfolio_done_title} />
            <div className="portfolio_done__gallery">
                    {isLoading ? (
                        <div>Chargement...</div>
                    ) : (
                        data &&
                        data.map((project) => (
                            
                            <div className='portfolio_done__gallery-card'  key={project.id}>
                                <Link to={`/Project/${project.id}`}>
                                    <GalleryCard  key={project.id} contentTitle ={project.title} picture_src={project.picture_src}/>
                                 </Link>
                            </div>
                            
                    )))}
                </div>
                
                
            </section>
            < section className='portfolio_todo'>
                <Title content = {content.portfolio_todo_title} />
                <div className='portfolio_todo__gallery' >
                   
                    <GalleryCard   contentTitle ={content.portfolio_todo_card_one} picture_src={'/assets/nina.webp'} />
                    <GalleryCard  contentTitle ={content.portfolio_todo_card_two} picture_src={'/assets/nina.webp'}/> 
                    <GalleryCard  className='portfolio_todo__gallery_card' contentTitle ={content.portfolio_todo_card_three} picture_src={'/assets/nina.webp'}/>
                </div>
            </section>
        </main>
        <BtnContact />
        <Footer />
        </>
    )
}
export default Portfolio;