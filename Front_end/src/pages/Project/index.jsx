import React, { useState, useEffect }from 'react';
import { useParams, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Seo from '../../components/Seo';
import './project.scss';
import BtnMenu from '../../components/BtnMenu';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import BtnContact from '../../components/BtnContact';
import Tag from '../../components/Tag'
import Title from '../../components/Title';
import Collapse from '../../components/Collapse';
import gitIcon from '../../assets/🦆 icon _github_blue.png'
import BtnModalLegal from '../../components/BtnModalLegal';
import { LanguageContext } from '../../components/LanguageContext';

function Project() {
    
    // Choose language
    const [language, setLanguage] = useState(() => {
    const langLocalStorage = localStorage.getItem("language");
        return langLocalStorage ? langLocalStorage : "fr";
    });
    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);
    const [data, setData] = useState([]);
    const projectUrl = useParams();
    const [project, setProject] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);
   
   useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`/data.json`);
                const data = await response.json();
                setData(data)
                const project = data[language]?.project.find(
                    (project) => project.id === projectUrl.id
                );
                if (!projectUrl.id) {
                    <Navigate to="/Error" />;
                } else {
                    setProject(project);
                }
            } catch (err) {
                console.log(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [projectUrl.id, language]);


return (project && data ?
        (<>
            <HelmetProvider >
            <LanguageContext.Provider value ={[language, setLanguage]}>
            <Seo title ='Stéphanie Bertaudeau, développeur Web' description ='Portfolio de Stéphanie Bertaudeau, développeur web, qui vous propose la meilleure solution technique optimisée et sécurisée pour vos applications Web adaptée à vos besoins' image = 'http://assets/myWebsite_project.png' imageAlt ='website Home' name='' url='' />
            <BtnMenu />
            <Header />
            <section className='project' id="arrowTop">
                <div className='project__banner'>
                    <img  src ={project.picture_src} alt='' />
                </div>
                <div className='project__title'>
                <Title content={project.title} />
                <a href={project.linkGit} target="_blank" rel="noreferrer"><img className='git' src ={gitIcon} alt ='Link code GitHub' /></a>
                </div>
                <div className='project__tags'>
                {project.tags && project.tags.map((tag, index) => (
                            <Tag tag={tag} key={index} className ='project__tags-tag'/>
                        ))}
                </div>
                <div className='collapse'>
                    <Collapse  title ={data[language]?.col_project} content ={project.col_project} />
                    <Collapse  title ={data[language]?.col_problem} content ={project.col_problem} />
                    <Collapse  title ={data[language]?.col_skill} content ={project.col_skill} /> 
                </div>
            </section>
            <BtnContact />
            <Footer />
            <BtnModalLegal />
            </LanguageContext.Provider>
            </ HelmetProvider >
        </>) : <Navigate to="/Error" />
            ) 
}
export default Project;