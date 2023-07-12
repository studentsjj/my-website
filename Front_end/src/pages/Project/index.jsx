import React from 'react';
import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";

import './project.scss';
import BtnMenu from '../../components/BtnMenu';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import BtnContact from '../../components/BtnContact';
import Tag from '../../components/Tag'

import Translation from '../Home/data.json'
import Title from '../../components/Title';
import Collapse from '../../components/Collapse';
import gitIcon from '../../assets/🦆 icon _github_blue.png'
//import useFetchId from "../../utilsId";

function Project() {
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


    //const { project, isLoading, error } = useFetchId(`data.json`);
    const projectUrl = useParams();
    const [project, setProject] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`../data.json`);
                const projectsData = await response.json();
                const project = projectsData.find(
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
    }, [projectUrl.id]);

return (project?
        (<>
            <BtnMenu />
            <Header />
            <section className='project'>
                <div className='project__banner'>
                    <img  src ={project.picture_src} alt='' />
                </div>
                <div className='project__title'>
                <Title content={project.title} />
                <img className='git' src ={gitIcon} alt ='' />
                </div>
                <div className='project__tags'>
                {project.tags && project.tags.map((tag, index) => (
                            <Tag tag={tag} key={index} className ='project__tags-tag'/>
                        ))}
                </div>
                <div className='collapse'>
                    <Collapse title ={content.col_project} content ={project.col_project} />
                    <Collapse title ={content.col_problem} content ={project.col_problem} />
                    <Collapse title ={content.col_skill} content ={project.col_skill} /> 
                </div>
            </section>
            <BtnContact />
            <Footer />
        </>) : (<Navigate to="/Error" />)
) 
}
    
export default Project;