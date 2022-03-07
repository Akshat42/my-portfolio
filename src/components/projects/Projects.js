import ProjectItem from '../../ProjectItem/ProjectItem';
import './Projects.css';
import { useEffect, useState } from 'react';

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

    const loading = <p>Loading...</p>;

    const project = (
        <section className="projects">
            <h2>Projects I'm proud of</h2>
            {/* {console.log(projects[0].name)} */}
            {/* <ProjectItem
                name={projects[0].name}
                desc={projects[0].desc}  
                gitHubLink={projects[0].gitHubLink}
                techStack={projects[0].techStack}
                url={projects[0].url}
            ></ProjectItem> */}
        </section>
    );

    if (isLoaded) {
        return (
            <div className="dkblue-background">
                <section className="projects">
                    <h2>Projects I'm proud of</h2>
                    {projects.map((project) => {
                        return (
                            <ProjectItem
                                key={project.id}
                                name={project.name}
                                desc={project.desc}
                                gitHubLink={project.gitHubLink}
                                techStack={project.techStack}
                                url={project.url}
                            ></ProjectItem>
                        );
                    })}
                </section>
            </div>
        );
    } else {
        return <p>Loading...</p>;
    }
}

export default Projects;
