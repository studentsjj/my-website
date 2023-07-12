import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import iconHome from '../../assets/🦆 icon _home.png'

import iconMoon from'../../assets/🦆 icon _moon bold_.png'
import "./header.scss";
import BtnLanguage from "../../components/BtnLanguage";
import Translation from "../../pages/Home/data.json"
function Header() {
    const [content, setContent]= useState({})
    useEffect(() =>{
        let language = localStorage.getItem("language")
        if (!language) {localStorage.setItem("language","fr")}
        if (language==="fr") {setContent(Translation.fr)
        }else if(language==="en"){setContent(Translation.en)}
    }, [])
    return (
    
        <header className="header">
           
            <ul className="header__navbar">
             <li id ='iconHome' className="header__navbar--li">
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    <img src ={iconHome} alt =''/>
                </NavLink>
                <div className="iconNavbar">    
                    <BtnLanguage />               
                    <img id='iconMoon'src ={iconMoon} alt='' />                
                </div>
                    </li>
                    
                    <li className="header__navbar--li">
                        <NavLink
                            to="/About me"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            {content.navbar_about}
                        </NavLink>
                    </li>
                    <li className="header__navbar--li">
                        <NavLink
                            to="/Portfolio"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            Portfolio
                        </NavLink>
                    </li>
                    <li className="header__navbar--li">
                        <NavLink
                            to="/Contact"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            Contact
                        </NavLink>
                    </li>
                
                
            </ul>
        </header>
    );
}
export default Header;
