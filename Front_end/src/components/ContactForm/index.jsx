import React, { useState, useEffect } from "react";
import Translation from '../../pages/Home/data.json'
import './contactForm.scss'


const ContactForm = () => {
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
    
  const [status, setStatus] = useState("Envoyer");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Envoyer");
    let result = await response.json();
    if (result.status) {
      setStatus("Votre message a bien été envoyé")
    } else {
      setStatus("Une erreur s'est produite lors de l'envoi de votre message")
    };
  };
 

  return (
  <form onSubmit={handleSubmit}>
    <div>
      <label>{content.form_title}</label>
    </div>
      <div>
        <input id="email" name="email" type="email" placeholder="Email" required></input>
      </div>
      <div>
          <input id="name" name="name" type="text" placeholder={content.form_name} required></input>
      </div>
      <div>
      <input id="firstname" name="firstname" type="text" placeholder={content.form_firstname} required></input> 
      </div>
      <div>
        <textarea id="message" name="message" type="message" placeholder={content.form_message} required maxLength={500}></textarea>
      </div>
      <div>
        <button id="form_btn" type="submit">{status}</button>
      </div>
    </form>
  );
};

export default ContactForm;