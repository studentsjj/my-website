import React, { useState, useContext } from 'react';
import './contactForm.scss';
import useFetch from '../../utils';
import { LanguageContext } from '../LanguageContext';
import { DarkModeContext } from '../DarkModeContext';

const ContactForm = () => {
    const { data, isLoading, error } = useFetch(`data.json`);
    const [language] = useContext(LanguageContext);
    const { darkMode } = useContext(DarkModeContext);

    const [statusSend, setStatusSend] = useState(false);
    const [double, setDouble] = useState(false);

    const handleSubmit = () => {
        setDouble(true);
        setStatusSend(true);
    };

    return (
        <form
            id='contactForm'
            className={darkMode === 'true' ? 'form_contact dark-mode' : ''}
            method='post'
            action='mailto:contactform.studentsjj@gmail.com?subject=Demande de contact'
            encType='text/plain'
            onSubmit={handleSubmit}
        >
            <div>
                <legend>{data[language]?.form_title}</legend>
            </div>
            <label htmlFor='email'>email</label>
            <div>
                <input
                    id='email'
                    name='email'
                    type='email'
                    placeholder='Email'
                    required
                ></input>
            </div>
            <label htmlFor='name'>name</label>
            <div>
                <input
                    id='name'
                    name='name'
                    type='text'
                    placeholder={data[language]?.form_name}
                    required
                ></input>
            </div>
            <label htmlFor='firstname'>firstname</label>
            <div>
                <input
                    id='firstname'
                    name='firstname'
                    type='text'
                    placeholder={data[language]?.form_firstname}
                    required
                ></input>
            </div>
            <label htmlFor='message'>message</label>
            <div>
                <textarea
                    id='message'
                    name='message'
                    type='message'
                    placeholder={data[language]?.form_message}
                    required
                    maxLength={500}
                ></textarea>
            </div>
            <div>
                <button id='form_btn' type='submit' disabled={double}>
                    {data[language]?.form_btn_mailto}
                </button>
            </div>
            {statusSend ? (
                <div>
                    <p>{data[language]?.form_statusSend_mailto}</p>
                </div>
            ) : null}
        </form>
    );
};
export default ContactForm;
