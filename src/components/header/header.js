import { Link } from 'react-router-dom';
import './header.css';
const Header = () => {
    return (
        <nav>
            <ul>
                <li>
                    <h1>
                        <Link to="/portfolio">
                            <span
                                className="fas fa-code main-logo"
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
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to={{ hash: '#contact-me' }}>Contact</Link>
                </li>
                <li>
                    <Link to={{ pathname: '/about' }}>About</Link>
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
                        href="https://drive.google.com/file/d/1sSgZSEgQQmZ5baSkZQ-Y2gzLVm2CjZtR/view?usp=sharing"
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
