import { useContext } from 'react';
import ThemeContext from '../../store/themeContext';
import './footer.css';
const Footer = () => {
    const themeCtx = useContext(ThemeContext);
    return (
        <footer className={themeCtx.themeMode === 'Light' ? 'light-font' : ''}>
            <h2>
                <span>Akshat Divya</span>
                <span> &middot; </span>
                <span>Software Engineer</span>
            </h2>
            <ul>
                <li>
                    <a
                        href="https://www.linkedin.com/in/akshat-divya/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span
                            className="fab fa-linkedin"
                            aria-hidden="true"
                        ></span>
                        <span className="sr-only">LinkedIn</span>
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        href="https://github.com/Akshat42"
                        rel="noreferrer"
                    >
                        <span
                            className="fab fa-github"
                            aria-hidden="true"
                        ></span>
                        <span className="sr-only">Github</span>
                    </a>
                </li>
                <li>
                    <a
                        href="mailto:akshatdivya03@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span
                            className="fas fa-envelope"
                            aria-hidden="true"
                        ></span>
                        <span className="sr-only">E-mail</span>
                    </a>
                </li>
            </ul>
            <p>
                <small>&copy; 2022 Akshat Divya. All rights reserved.</small>
            </p>
        </footer>
    );
};

export default Footer;
