import './ProjectItem.css';

function ProjectItem({
    name,
    desc,
    gitHubLink,
    techStack,
    url,
    imageUrl,
    classes,
    apiDocs,
}) {
    return (
        <article>
            <div className={classes[0]}>
                <h3>{name}</h3>
                <main className="blackbox">
                    {desc}
                    <p className="m-0 p-0">
                        The code repo can be found{' '}
                        <a target="_blank" href={gitHubLink} rel="noreferrer">
                            here
                        </a>
                        ,{' '}
                        {url && (
                            <span>
                                and the project is hosted{' '}
                                <a target="_blank" href={url} rel="noreferrer">
                                    here
                                </a>
                                .
                            </span>
                        )}
                    </p>
                    {apiDocs && (
                        <div>
                            The API documentation can be found:{' '}
                            <a target="_blank" href={url} rel="noreferrer">
                                here
                            </a>
                            .
                        </div>
                    )}
                </main>
                <h4>Tools & Technologies used include:</h4>
                <ul className={classes[1]}>
                    {techStack.map((tech) => {
                        return <li key={tech}>{tech}</li>;
                    })}
                </ul>
            </div>
            <img
                className={classes[2]}
                src={
                    imageUrl ||
                    'https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-1.png'
                }
                alt="ss"
            />
        </article>
    );
}

export default ProjectItem;
