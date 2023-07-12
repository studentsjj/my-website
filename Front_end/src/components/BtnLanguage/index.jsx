import './btnLanguage.scss'
import React, { useState,} from "react";
import iconUK from '../../assets/🦆 icon _United Kingdom_.png'
import iconFrance from '../../assets/icon_france.png'
function BtnLanguage (){

    const [isActive, setIsActive] = useState(false);

    return(
        <>
        <div className='btnLanguage'>
            <img   id ='btnLanguage' onClick={() => {
                    setIsActive(!isActive);
                    (isActive? localStorage.setItem("language","fr"): localStorage.setItem("language","en"));
                    
                }}src ={isActive ? iconFrance : iconUK } alt=''
                        className='iconNavbar'
                    />
        </div>
        </>
    )
}

export default BtnLanguage;