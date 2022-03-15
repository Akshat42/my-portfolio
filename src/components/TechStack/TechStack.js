function TechStack({ classes, techStack }) {
    return (
        <>
            <h4>Tools & Technologies used include:</h4>
            <ul className={classes}>
                {techStack.map((tech) => {
                    return <li key={tech}>{tech}</li>;
                })}
            </ul>
        </>
    );
}

export default TechStack;
