import './tag.scss';
import { DarkModeContext } from '../DarkModeContext';
import { useContext } from 'react';

function Tag({ tag }) {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <span className={darkMode === 'true' ? 'tag dark-mode' : 'tag'}>
            {tag}
        </span>
    );
}
export default Tag;
