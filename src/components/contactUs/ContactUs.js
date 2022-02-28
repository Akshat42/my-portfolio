import './ContactUs.css';
const ContactUs = () => {
    return (
        <div className="plum-background">
            <section id="contact-me">
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
