import './ProjectItem.css';

function ProjectItem() {
    return (
        <article>
            <div className="project-keys">
                <h3>Medium Clone</h3>
                <p className="blackbox">
                    As the name says, we tried to built a clone of Medium
                    website, where one can publish articles, can access
                    customized feed as per the topic selected by the user. The
                    user can follow/unfollow other users a get access to the
                    articles published by the user the the personalized feed. I
                    worked as a backend developer developing REST API's to be
                    consumed by the web app. The code repo can be found{' '}
                    <a href="#">here</a>.
                </p>
                <h4>Tools & Technologies used include:</h4>
                <ul>
                    <li>NodeJS</li>
                    <li>MongoDB</li>
                    <li>Swagger</li>
                </ul>
            </div>
            <img
                className="image-grid"
                src="https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-1.png"
                alt="ss"
            />
        </article>
    );
}

export default ProjectItem;
