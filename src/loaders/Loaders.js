import loader from '../assets/RollingLoader.svg';
import './Loader.css';

function Loader() {
    return (
        <div className="loader">
            <img src={loader} alt="Loading Spinner" />
        </div>
    );
}

export default Loader;
