import { useContext } from 'react';
import ThemeContext from '../../store/themeContext';

function TechStack({ classes, techStack }) {
    const themeCtx = useContext(ThemeContext);
    return (
        <>
            <h4 className={themeCtx.themeMode === 'Light' ? 'light' : ''}>
                Tools & Technologies used include:
            </h4>
            <ul
                className={
                    themeCtx.themeMode === 'Light'
                        ? `${classes} light`
                        : `${classes}`
                }
            >
                {techStack.map((tech) => {
                    return <li key={tech}>{tech}</li>;
                })}
            </ul>
        </>
    );
}

export default TechStack;
