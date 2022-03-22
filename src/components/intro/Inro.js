import { useContext } from 'react';
import ThemeContext from '../../store/themeContext';
import './Intro.css';

function Intro() {
    var companyName = 'Infrrd';
    const themeCtx = useContext(ThemeContext);

    return (
        <section
            id="intro"
            className={themeCtx.themeMode === 'Light' ? 'light-para' : ''}
        >
            <p className="name">
                Hi, my name is{' '}
                <span
                    className={
                        themeCtx.themeMode === 'Light'
                            ? 'light-color'
                            : 'default-color'
                    }
                >
                    Akshat Divya.
                </span>
            </p>

            <h2>I build Web Apps.</h2>

            <p>
                I'm a front-end developer specializing in HTML, CSS, Angular and
                React.
            </p>

            <p>
                {`Currently, I'm working at `}
                <a
                    rel="noreferrer"
                    href="https://www.infrrd.ai"
                    target="_blank"
                >
                    {companyName}
                </a>
                , developing web application for a real estate client.
            </p>
        </section>
    );
}

export default Intro;
