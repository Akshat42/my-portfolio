import './footer.css';
const Footer = () => {
    return (
        <footer>
            <h2>
                <span>Akshat Divya</span>
                <span> &middot; </span>
                <span>Software Engineer</span>
            </h2>
            <ul>
                <li>
                    <a href="#github">
                        <span
                            className="fab fa-linkedin"
                            aria-hidden="true"
                        ></span>
                        <span className="sr-only">LinkedIn</span>
                    </a>
                </li>
                <li>
                    <a href="#github">
                        <span
                            className="fab fa-github"
                            aria-hidden="true"
                        ></span>
                        <span className="sr-only">Github</span>
                    </a>
                </li>
                <li>
                    <a href="mail">
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
