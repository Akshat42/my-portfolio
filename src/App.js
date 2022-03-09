import { Navigate, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
function App() {
    // TODO - add and configure page not found component
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/portfolio" />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
}

export default App;
