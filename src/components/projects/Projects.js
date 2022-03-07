import ProjectItem from '../../ProjectItem/ProjectItem';
import './Projects.css';
import { useEffect, useState } from 'react';
import Loader from '../../loaders/Loaders';

function Projects() {
    const [projects, setProjects] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

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
    }

    const oddClasses = ['project-keys', 'flex-end', 'image-grid'];

    const evenClasses = ['project-keys-reverse', '', 'image-grid-reverse'];

    if (isLoaded) {
        return (
            <div className="dkblue-background">
                <section className="projects">
                    <h2>Projects I'm proud of</h2>
                    {projects.map((project, index) => {
                        if (index % 2 === 0) {
                            return (
                                <ProjectItem
                                    classes={evenClasses}
                                    key={project.id}
                                    name={project.name}
                                    desc={project.desc}
                                    gitHubLink={project.gitHubLink}
                                    techStack={project.techStack}
                                    url={project.url}
                                ></ProjectItem>
                            );
                        } else {
                            return (
                                <ProjectItem
                                    classes={oddClasses}
                                    key={project.id}
                                    name={project.name}
                                    desc={project.desc}
                                    gitHubLink={project.gitHubLink}
                                    techStack={project.techStack}
                                    url={project.url}
                                ></ProjectItem>
                            );
                        }
                    })}
                </section>
            </div>
        );
    } else {
        return (
            <div className="dkblue-background">
                <section className="projects">
                    <h2>Projects I'm proud of</h2>
                    <Loader></Loader>
                </section>
            </div>
        );
    }
}

export default Projects;
