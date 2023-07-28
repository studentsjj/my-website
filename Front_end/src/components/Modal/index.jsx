import React from "react";
import './modal.scss'
import iconClose from'../../assets/🦆 icon _close_.png'

function Modal ({setIsOpen, data, language}) {


    return (
        <>
        <section className="modal__container">
            <div className="modal__container-text">
                < img src={iconClose} alt='' className="BtnModalClose" onClick={() => setIsOpen(!{setIsOpen})} />
                <p>{data[language]?.modal_p1}</p>
                <span>{data[language]?.modal_span1}</span>
                <p>{data[language]?.modal_p2}</p>
                <span>{data[language]?.modal_span2}</span>
                <p>{data[language]?.modal_p3}</p>
                <span>{data[language]?.modal_span3}</span>
                <p>{data[language]?.modal_p4}</p>
                <span>{data[language]?.modal_span4}</span>
                <p>{data[language]?.modal_p5}</p>
                <span>{data[language]?.modal_span5}</span>
                <p>{data[language]?.modal_p6}</p>
                <span>{data[language]?.modal_span6}</span>
            </div>
        </section>
    </>
    )
}
export default Modal;


