import { useContext } from 'react';
import './title.scss'
import { DarkModeContext } from '../DarkModeContext';

function Title ({content}) {
   const {darkMode} = useContext(DarkModeContext)

    return (
        <>
            <span className={darkMode==='true' ? 'title dark-mode' : 'title'} >{content}</span>
        </>
    )
}
export default Title;