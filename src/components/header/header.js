import { Link } from 'react-router-dom';
import './header.css';
const Header = () => {
    return (
        <nav>
            <ul>
                <li>
                    <h1>
                        <Link to="/home">
                            <span
                                className="fas fa-code main-logo"
                                aria-hidden="true"
                            ></span>
                            <span>Akshat Divya</span>
                        </Link>
                    </h1>
                </li>
                <li>
                    <a href="/home/#project">Projects</a>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <a href="#contact-me">Contact</a>
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
                        href="https://drive.google.com/file/d/18DRcaVAmAxkEpBYkweoTeFoC5C393mHl/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    );
};
export default Header;
