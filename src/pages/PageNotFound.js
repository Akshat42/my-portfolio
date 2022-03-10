import { Link, useLocation } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
    const location = useLocation();
    return (
        <div className="page-not-found">
            <h2>Page not found</h2>
            <p>
                Sorry, the page <code>{location.pathname}</code> could not be
                found.
            </p>
            <p>
                Click <Link to="/portfolio">here</Link> to go back to portfolio
            </p>
        </div>
    );
}

export default PageNotFound;
