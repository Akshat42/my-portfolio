import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../../store/themeContext';
import ThemeButton from '../ThemeButton/ThemeButton';
import './header.css';
const Header = () => {
    const themeContext = useContext(ThemeContext);
    return (
        <nav className={themeContext.themeMode === 'Light' ? 'logo-light' : ''}>
            <ul>
                <li>
                    <h1>
                        <Link
                            to="/portfolio"
                            className={
                                themeContext.themeMode === 'Light'
                                    ? 'light'
                                    : null
                            }
                        >
                            <span
                                className="fas fa-code"
                                aria-hidden="true"
                            ></span>
                            <span>Akshat Divya</span>
                        </Link>
                    </h1>
                </li>
                <li>
                    <Link
                        to={{
                            pathname: '/portfolio',
                            hash: '#project',
                        }}
                        className={
                            themeContext.themeMode === 'Light' ? 'light' : ''
                        }
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        to={{ hash: '#contact-me' }}
                        className={
                            themeContext.themeMode === 'Light' ? 'light' : ''
                        }
                    >
                        Contact
                    </Link>
                </li>
                <li>
                    <Link
                        to={{ pathname: '/about' }}
                        className={
                            themeContext.themeMode === 'Light' ? 'light' : ''
                        }
                    >
                        About
                    </Link>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/akshat-divya"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span
                            className="fab fa-linkedin"
                            aria-hidden="true"
                        ></span>
                        <span className="sr-only">Linkedin</span>
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/Akshat42"
                        target="_blank"
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
                        className="highlight-button"
                        href="https://drive.google.com/file/d/1sCJzyA7KtCB50GgQAkbXqxJm37tU4ZLn/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Resume
                    </a>
                </li>
                <li>
                    <ThemeButton />
                </li>
            </ul>
        </nav>
    );
};

export default Header;
