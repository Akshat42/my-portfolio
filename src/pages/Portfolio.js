import { useEffect, useState } from 'react';
import ContactUs from '../components/contactUs/ContactUs';
import Footer from '../components/footer/footer';
import Intro from '../components/intro/Inro';
import Projects from '../components/projects/Projects';
import LinearGradient from '../UI/LinearGradient';

function Portfolio() {
    //const projectsRef = useRef();
    const [projects, setProjects] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [shouldScroll, setShoudScroll] = useState(false);

    useEffect(() => {
        requestProjects();
    }, []);

    async function requestProjects() {
        let res = await fetch(
            'https://my-portfolio-0327-default-rtdb.firebaseio.com/projects.json'
        );
        let data = await res.json();
        setProjects(data);
        setIsLoaded(true);
        setShoudScroll(true);
    }

    return (
        <>
            <Intro />
            <LinearGradient />
            <Projects
                projects={projects}
                isLoaded={isLoaded}
                shouldScroll={shouldScroll}
            />
            <LinearGradient />
            <ContactUs isLoaded={isLoaded} shouldScroll={shouldScroll} />
            <LinearGradient />
            <Footer />
        </>
    );
}

export default Portfolio;
