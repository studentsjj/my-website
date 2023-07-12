import React, {useState, useEffect} from "react";
import Translation from "../../pages/Home/data.json"
import './footer.scss'
import iconGit from '../../assets/🦆 icon _github_.png'
import iconLink from '../../assets/🦆 icon _linkedin_.png'

function Footer() {
    const [content, setContent]= useState({})
    useEffect(() =>{
        let language = localStorage.getItem("language")
        if (!language) {localStorage.setItem("language","fr")}
        if (language==="fr") {setContent(Translation.fr)
        }else if(language==="en"){setContent(Translation.en)}
    }, [])
    return (
        <footer>
            <div className='footer__icon'>
                <img src = {iconGit} alt ='' />
                <img src = {iconLink} alt ='' />
            </div>
            <span>{content.footer_mentions}</span>
            <p>{content.footer_realise}</p>
        </footer>

    );
}

export default Footer;