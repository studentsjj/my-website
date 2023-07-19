import React, { useState } from "react";
import "./btnmenu.scss";
import iconMenu from "../../assets/🦆 icon _menu_.png";
import iconClose from'../../assets/🦆 icon _close_.png'
import Header from'../../layouts/Header'

function BtnMenu() {
    const [isOpen, setIsOpen] = useState(false);
return (
        <>
        <div className="btnMenu">
            <img
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
                className={isOpen ? "icon__close" : "icon__menu"}
                src={isOpen ?  iconClose : iconMenu}
                alt=""
            />
            {isOpen ?(
                <Header />
            ): null}
        </div>
        </>
    );
}
export default BtnMenu;
