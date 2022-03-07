import loader from '../assets/RollingLoader.svg';
import './Loader.css';

function Loader() {
    return (
        <div className="loader">
            <img src={loader} alt="loading spinner" />
        </div>
    );
}

export default Loader;
