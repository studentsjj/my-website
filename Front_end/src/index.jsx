import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
//import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/my-website">
            <Routes>
                <Route exact path="/my-website" element={<Home />} />
                <Route path="/About me" element={<About />} />
                <Route path="/Portfolio" element={<Portfolio />} />
                <Route path="/Project/:id" element={<Project />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
