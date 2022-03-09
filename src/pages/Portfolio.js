import ContactUs from '../components/contactUs/ContactUs';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Intro from '../components/intro/Inro';
import Projects from '../components/projects/Projects';
import LinearGradient from '../UI/LinearGradient';

function Portfolio() {
    return (
        <>
            <Header />
            <Intro />
            <LinearGradient />
            <Projects />
            <ContactUs />
            <LinearGradient />
            <Footer />
        </>
    );
}

export default Portfolio;
