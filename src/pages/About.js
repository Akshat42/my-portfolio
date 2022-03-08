import ContactUs from '../components/contactUs/ContactUs';
import Header from '../components/header/header';
import LinearGradient from '../UI/LinearGradient';

function About() {
    return (
        <>
            <Header></Header>
            <LinearGradient></LinearGradient>
            <section class="projects">
                <h2>About Akshat Divya</h2>
                <article>
                    <div class="project-keys">
                        <h3>Just the highlights</h3>
                        <p class="blackbox">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ipsa deleniti natus vero necessitatibus
                            provident dicta repellat sapiente? Voluptatem amet
                            quo alias non itaque. Minus est dolores fugiat,
                            assumenda laborum quaerat?
                        </p>
                        <h4>My favourite technologies:</h4>
                        <ul class="flex-end">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Angular</li>
                        </ul>
                    </div>
                    <img
                        class="image-grid"
                        src="https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-1.png"
                        alt="ss"
                    />
                </article>
            </section>
            <LinearGradient></LinearGradient>
            <ContactUs></ContactUs>
        </>
    );
}

export default About;
