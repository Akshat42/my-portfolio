import React, { Suspense } from 'react';
import { Navigate, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundaries/ErrorBoundary';
import Header from './components/header/header';
import Loader from './loaders/Loaders';
import Portfolio from './pages/Portfolio';
function App() {
    const About = React.lazy(() => import('./pages/About'));
    const PageNotFound = React.lazy(() => import('./pages/PageNotFound'));
    return (
        <ErrorBoundary>
            <ErrorBoundary>
                <Header />
            </ErrorBoundary>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<Navigate to="/portfolio" />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Suspense>
        </ErrorBoundary>
    );
}

export default App;
