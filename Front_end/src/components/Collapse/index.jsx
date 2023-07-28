import React, { useState, useContext } from 'react';
import icon_collapse from '../../assets/icon_collapse.png';
import './collapse.scss';
import { DarkModeContext } from '../DarkModeContext';

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
    const { darkMode } = useContext(DarkModeContext);

    return (
        <div className='collapse'>
            <span className='collapse__label'>
                {title}
                <img
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                    src={icon_collapse}
                    alt='flèche accès contenu'
                    className={!isOpen ? 'icon-rotate' : ''}
                />
            </span>
            {isOpen ? (
                <span
                    className={
                        darkMode === 'true'
                            ? 'collapse__content dark-mode'
                            : 'collapse__content'
                    }
                >
                    {Array.isArray(content) ? (
                        content.map((content, index) => {
                            return (
                                <li
                                    key={index}
                                    className={
                                        darkMode === 'true'
                                            ? 'collapse__content--list dark-mode'
                                            : 'collapse__content--list'
                                    }
                                >
                                    {content}
                                </li>
                            );
                        })
                    ) : (
                        <span>{content}</span>
                    )}
                </span>
            ) : null}
        </div>
    );
}
export default Collapse;
