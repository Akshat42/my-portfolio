import './ProjectItem.css';

function ProjectItem({
    name,
    desc,
    gitHubLink,
    techStack,
    url,
    imageUrl,
    classes,
}) {
    console.log(name, desc, gitHubLink, techStack, url);
    return (
        <article>
            <div className={classes[0]}>
                <h3>{name}</h3>
                <p className="blackbox">
                    {desc}
                    The code repo can be found
                    <a href={gitHubLink}>here</a>.
                </p>
                <h4>Tools & Technologies used include:</h4>
                <ul className={classes[1]}>
                    {techStack.map((tech) => {
                        return <li key={tech}>{tech}</li>;
                    })}
                </ul>
            </div>
            <img
                className={classes[2]}
                src="https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-1.png"
                alt="ss"
            />
        </article>
    );
}

export default ProjectItem;
