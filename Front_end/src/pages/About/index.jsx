import React, { createContext, useContext } from 'react';
import './about.scss';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer'
import BtnContact from '../../components/BtnContact';
import Title from '../../components/Title'
import { useEffect, useState } from 'react';
import Translation from '../Home/data.json'
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
function About() {
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

    return(
        <> 
            <BtnMenu />
            <Header />
            <main id="arrowTop">
                <div className='education'>
                    
                <Title content = {content.about_title} />
                <ArrowRight />
                <span>2022-2023</span>
                <Masonry breakpointCols={2} className='openC' columnClassName='openC_column'>
                    <img src ={openClassrooms} alt='' />
                    <p>{content.about_education1}</p>
                </Masonry><
                span> 07-08 2022</span>
                <Masonry breakpointCols={2} className='ecole42' columnClassName='ecole42_column'>
                    <img src ={ecole42} alt='' />
                    <p>Piscine Ecole 42 Angoulême</p>
                </Masonry >
                <ArrowLeft />
            </div>
            <div className='explain'> 
                <p>{content.about_explain}</p> 
                <ArrowRight />  
            </div>
            <section className='softSkills'>  
                <Title content = 'Soft SKills' />
                {content.about_soft_skills && content.about_soft_skills.map((tag, index) => (
                            <Tag tag={tag} key={index} className ='softSkills__tags-tag'/>
                        ))}
                <ArrowLeft />   
            </section>
            <section className='hardSkills'>
                <Title content = 'Hard Skills' />
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
        </>
    )
}
export default About;