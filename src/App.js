import { Navigate, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';
import Portfolio from './pages/Portfolio';
function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to="/portfolio" />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
}

export default App;
