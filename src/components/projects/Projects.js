import ProjectItem from '../../ProjectItem/ProjectItem';
import './Projects.css';
function Projects() {
    return (
        <div className="dkblue-background">
            <section className="projects">
                <h2>Projects I'm proud of</h2>
                <ProjectItem></ProjectItem>
                <ProjectItem></ProjectItem>
            </section>
        </div>
    );
}

export default Projects;
