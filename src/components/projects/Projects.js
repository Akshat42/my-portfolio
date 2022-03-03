import ProjectItem from '../../ProjectItem/ProjectItem';
import './Projects.css';
import { useEffect, useState } from 'react';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        requestProjects();
    }, []);

    console.log(projects);

    return (
        <div className="dkblue-background">
            <section className="projects">
                <h2>Projects I'm proud of</h2>
                <ProjectItem></ProjectItem>
                <ProjectItem></ProjectItem>
            </section>
        </div>
    );

    async function requestProjects() {
        let res = await fetch(
            'https://my-portfolio-0327-default-rtdb.firebaseio.com/projects.json'
        );
        let data = await res.json();
        setProjects(data);
    }
}

export default Projects;
