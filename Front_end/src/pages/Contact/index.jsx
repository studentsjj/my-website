import React from "react";
import './contact.scss';
import BtnMenu from "../../components/BtnMenu";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useEffect, useState } from 'react';
import Translation from '../Home/data.json'
import ArrowTop from "../../components/ArrowTop";
import ContactForm from "../../components/ContactForm";


function Contact () {
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
        <div className="form"> 
            <ContactForm />
        </div>
        <Footer />
        </>
    )
}
export default Contact;