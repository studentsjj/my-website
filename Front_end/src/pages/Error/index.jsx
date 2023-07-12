import React, { createContext, useContext } from 'react';
import './error.scss';
import BtnMenu from '../../components/BtnMenu';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import ArrowAnimation from '../../components/ArrowAnimation';
import iconHome from '../../assets/🦆 icon _home.png'
import { NavLink } from 'react-router-dom';


function Error() {

    return (
        <>
        <span className='pageError'>
            <Header />
        </span>
        < section className='error'>
            <p>OUPS !!!</p>
            <p>ERROR 404 !</p>
            <p>La page que vous recherchez n'existe pas ...</p>
            <p>Pour revenir à la page d'accueil c'est par là</p>
            <ArrowAnimation />
            <NavLink to ='/'> <img src ={iconHome} alt =''/></NavLink>
        </section>

        <Footer />
        </>
    )
}
export default Error;