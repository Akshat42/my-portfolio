import ContactUs from '../components/contactUs/ContactUs';
import LinearGradient from '../UI/LinearGradient';

function About() {
    return (
        <div className="dkblue-background">
            <LinearGradient></LinearGradient>
            <section className="projects">
                <h2>About Akshat</h2>
                <article>
                    <div className="project-keys">
                        <h3>Just the highlights</h3>
                        <p className="blackbox">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ipsa deleniti natus vero necessitatibus
                            provident dicta repellat sapiente? Voluptatem amet
                            quo alias non itaque. Minus est dolores fugiat,
                            assumenda laborum quaerat?
                        </p>
                        <h4>My favourite technologies:</h4>
                        <ul className="flex-end">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Angular</li>
                        </ul>
                    </div>
                    <img
                        className="image-grid"
                        src="https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-1.png"
                        alt="ss"
                    />
                </article>
            </section>
            <LinearGradient></LinearGradient>
            <ContactUs></ContactUs>
        </div>
    );
}

export default About;
