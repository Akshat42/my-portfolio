import './Error.css';

function Error({ errorInfo }) {
    return (
        <article className="error-boundary">
            <h2>Somthing went wrong :(</h2>
            <details>{errorInfo.toString()}</details>
        </article>
    );
}
export default Error;
