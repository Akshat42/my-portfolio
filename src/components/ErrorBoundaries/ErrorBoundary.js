import { Component } from 'react';
import Error from '../Error/Error';
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            errorInfo: null,
        };
    }

    componentDidCatch(error, errorInfo) {
        console.error(errorInfo);
        this.setState({
            hasError: true,
            errorInfo: error,
        });
    }

    render() {
        if (this.state.hasError) {
            return <Error errorInfo={this.state.errorInfo} />;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
