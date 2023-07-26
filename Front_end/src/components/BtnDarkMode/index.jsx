
import React, { useContext} from "react";
import './btnDarkMode.scss'
import iconMoon from '../../assets/🦆 icon _moon bold_.png'
import iconSun from '../../assets/sun.png'
import {DarkModeContext} from "../DarkModeContext"

function BtnDarkMode (){
    const {darkMode, setDarkMode} = useContext(DarkModeContext)

    return(
        <>
        <div className='btnDarkMode'>
            <img  alt='choose your mode color' id ='btnDarkMode' onClick={() => {
                    (darkMode==='true'? localStorage.setItem("darkMode", 'false') : localStorage.setItem("darkMode", 'true'));
                    (darkMode==='true'? setDarkMode('false') : setDarkMode('true'));
                }} src ={(darkMode==='true' ? iconSun : iconMoon)} 
                        className='iconNavbar'
                />
        </div>
        </>
    )
}
export default BtnDarkMode;