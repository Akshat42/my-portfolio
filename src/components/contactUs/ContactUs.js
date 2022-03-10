import { useEffect, useRef } from 'react';
import './ContactUs.css';
import { scroll } from '../../utility';
import { useLocation } from 'react-router-dom';
const ContactUs = ({ isLoaded, shouldScroll }) => {
    const contactRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/about') {
            scroll(location, '#contact-me', true, contactRef);
        } else {
            scroll(location, '#contact-me', isLoaded, contactRef);
        }
    }, [shouldScroll, isLoaded, location]);

    return (
        <div className="plum-background">
            <section ref={contactRef} id="contact-me">
                <h2>Contact Me</h2>
                <p>
                    I am always interested in hearing about new oppurtunities.
                    Feel free to reach me out!
                </p>
                <a
                    href="mailto:akshatdivya03@gmail.com"
                    className="highlight-button"
                >
                    Email me
                </a>
            </section>
        </div>
    );
};

export default ContactUs;
