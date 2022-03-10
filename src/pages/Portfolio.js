import { useEffect, useState } from 'react';
import ContactUs from '../components/contactUs/ContactUs';
import Footer from '../components/footer/footer';
import Intro from '../components/intro/Inro';
import Projects from '../components/projects/Projects';
import LinearGradient from '../UI/LinearGradient';
import { getData } from '../service/http.service';

function Portfolio() {
    const [projects, setProjects] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [shouldScroll, setShoudScroll] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProjects();
    }, []);

    async function fetchProjects() {
        let res = await getData(
            'https://my-portfolio-0327-default-rtdb.firebaseio.com/projects.json',
            'GET'
        );
        if (res && res.ok) {
            let data = await res.json();
            setProjects(data);
            setIsLoaded(true);
            setShoudScroll(true);
        } else {
            setError('Unable to fetch Projects:(');
        }
    }

    return (
        <>
            <Intro />
            <LinearGradient />
            <Projects
                projects={projects}
                isLoaded={isLoaded}
                shouldScroll={shouldScroll}
                error={error}
            />
            <LinearGradient />
            <ContactUs isLoaded={isLoaded} shouldScroll={shouldScroll} />
            <LinearGradient />
            <Footer />
        </>
    );
}

export default Portfolio;
