import { useContext } from 'react';
import ThemeContext from '../../store/themeContext';
import TechStack from '../TechStack/TechStack';
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
    const themeCtx = useContext(ThemeContext);
    return (
        <article>
            <div className={classes[0]}>
                <h3
                    className={
                        themeCtx.themeMode === 'Light' ? 'aqua-invert' : ''
                    }
                >
                    {name}
                </h3>
                <main
                    className={
                        themeCtx.themeMode === 'Light'
                            ? 'blackbox blackbox-light'
                            : 'blackbox'
                    }
                >
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
                            <a target="_blank" href={apiDocs} rel="noreferrer">
                                here
                            </a>
                            .
                        </div>
                    )}
                </main>
                <TechStack classes={classes[1]} techStack={techStack} />
            </div>
            <img
                className={
                    themeCtx.themeMode === 'Light'
                        ? `${classes[2]} aqua-invert-border`
                        : `${classes[2]}`
                }
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
