import React, { useState, useEffect, useContext } from "react";
import "./contactForm.scss";
import useFetch from "../../utils";
import { LanguageContext } from "../LanguageContext";

const ContactForm = () => {
const { data, isLoading, error } = useFetch(`data.json`); 
const [language]=useContext(LanguageContext)
const [status, setStatus] = useState(false);
const [statusSend, setStatusSend] = useState(0);
const [double, setDouble] = useState(false);   

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus(true);
  
  const { name, firstname, email, message } = e.target.elements;
  let details = {
      name: name.value,
      firstname : firstname.value,
      email: email.value,
      message: message.value,
  };
  let response = await fetch("https://studentsjj.github.io/my-website/Contact", {
      method: "POST",
      mode :'no-cors',
      headers: {
          "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
  });
  setStatus(data[language]?.form_btn);
  setDouble(true);
  let result = await response.json();
  if (result.status) {
      setStatusSend(1);
  } else {
      setStatusSend(2);
  }
};

return (
  <form onSubmit={handleSubmit}>
      <div>
          <legend>{data[language]?.form_title}</legend>
      </div>
      <label htmlFor= "email">email</label>
      <div>
          <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
          ></input>
      </div>
      <label htmlFor= "name">name</label>
      <div>
          <input
              id="name"
              name="name"
              type="text"
              placeholder={data[language]?.form_name}
              required
          ></input>
      </div>
      <label htmlFor= "firstname">firstname</label>
      <div>
          <input
              id="firstname"
              name="firstname"
              type="text"
              placeholder={data[language]?.form_firstname}
              required
          ></input>
      </div>
      <label htmlFor= "message">message</label>
      <div>
          <textarea
              id="message"
              name="message"
              type="message"
              placeholder={data[language]?.form_message}
              required
              maxLength={500}
          ></textarea>
      </div>
      <div>
          <button disabled={double} id="form_btn" type="submit">
              {status ? data[language]?.form_btn_status : data[language]?.form_btn}
          </button>
      </div>
      {statusSend > 0 ? (
          <div>
              <p>
                  {statusSend !== 1
                      ? data[language]?.form_statusSend_error
                      : data[language]?.form_statusSend_ok}{" "}
              </p>
          </div>
      ) : null}
  </form>
);
};
export default ContactForm;
