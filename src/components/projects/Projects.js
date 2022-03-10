import ProjectItem from '../ProjectItem/ProjectItem';
import './Projects.css';
import Loader from '../../loaders/Loaders';
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { scroll } from '../../utility';

function Projects({ isLoaded, projects, shouldScroll }) {
    const projectsRef = useRef(null);
    const oddClasses = ['project-keys', 'flex-end', 'image-grid'];
    const evenClasses = ['project-keys-reverse', '', 'image-grid-reverse'];
    const location = useLocation();

    useEffect(() => {
        scroll(location, '#project', isLoaded, projectsRef, '/portfolio');
    }, [shouldScroll, isLoaded, projectsRef, location]);

    if (isLoaded) {
        return (
            <div className="dkblue-background">
                <section ref={projectsRef} id="project" className="projects">
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
                <section ref={projectsRef} className="projects">
                    <h2>Projects I'm proud of</h2>
                    <Loader></Loader>
                </section>
            </div>
        );
    }
}

export default Projects;
