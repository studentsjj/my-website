import React, {useState, useEffect, useContext} from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
import iconHome from '../../assets/🦆 icon _home.png'
import iconMoon from'../../assets/🦆 icon _moon bold_.png'
import BtnLanguage from "../../components/BtnLanguage";
import useFetch from "../../utils";
import { LanguageContext } from "../../components/LanguageContext";

function Header() {
    const { data, isLoading, error } = useFetch(`../data.json`);
    const [language] = useContext(LanguageContext)
    
    return (
        
        <header className="header">
            <ul className="header__navbar">
                <li id ='iconHome' className="header__navbar--li">
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    <img src ={iconHome} alt ='Home'/>
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
                    {data[language]?.navbar_about}
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
