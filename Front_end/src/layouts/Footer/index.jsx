import React, { useContext } from 'react';
import './footer.scss';
import iconGit from '../../assets/🦆 icon _github_.png';
import iconLink from '../../assets/🦆 icon _linkedin_.png';
import useFetch from '../../utils';
import { LanguageContext } from '../../components/LanguageContext';

function Footer() {
    const { data, isLoading, error } = useFetch(`/my-website/data.json`);
    const [language] = useContext(LanguageContext);
    return (
        <footer>
            <div className='footer__icon'>
                <a
                    href='https://github.com/studentsjj?tab=repositories'
                    target='_blank'
                    rel='noreferrer'
                >
                    <img src={iconGit} alt='Link GitHub' />
                </a>
                <a
                    href='https://www.linkedin.com/learning/search?trk=content-hub-home-page_guest_nav_menu_learning'
                    target='_blank'
                    rel='noreferrer'
                >
                    <img src={iconLink} alt='Link Linkedin' />
                </a>
            </div>
            <p>{data[language]?.footer_realise}</p>
        </footer>
    );
}
export default Footer;
