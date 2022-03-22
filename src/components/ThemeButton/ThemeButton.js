import { useContext, useState } from 'react';
import ThemeContext from '../../store/themeContext';

function ThemeButton() {
    const [themeButtonText, setThemeButtonText] = useState('Dark');
    const themCtx = useContext(ThemeContext);

    function handleButtonText() {
        setThemeButtonText((prevState) =>
            prevState === 'Dark' ? 'Light' : 'Dark'
        );
        themCtx.toggleThemeMode();
    }

    return <button onClick={handleButtonText}>{themeButtonText}</button>;
}

export default ThemeButton;
