import React, { useState, useContext } from "react";
import './btnModalLegal.scss'
import Modal from '../Modal'
import { LanguageContext } from "../LanguageContext";
import useFetch from "../../utils";

function BtnModalLegal(){
    const { data, isLoading, error } = useFetch(`/my-website/data.json`);
    const [isOpen, setIsOpen] = useState(false);
    const [language] = useContext(LanguageContext)
    
    return (
        <>
            <div className="btn__modalLegal">
                <button
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                >{data[language]?.footer_mentions}</button>
                {isOpen && <Modal setIsOpen={setIsOpen} />}
            </div>
        </>
    )
}
export default BtnModalLegal;