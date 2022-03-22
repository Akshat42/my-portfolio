import React, { Suspense, useState } from 'react';
import { Navigate, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Header from './components/header/header';
import Loader from './loaders/Loaders';
import Portfolio from './pages/Portfolio';
import './App.css';
import ThemeContext from './store/themeContext';
function App() {
    const About = React.lazy(() => import('./pages/About'));
    const PageNotFound = React.lazy(() => import('./pages/PageNotFound'));

    const toggleThemeMode = () => {
        setThemeState((state) => {
            return {
                themeMode: state.themeMode === 'Dark' ? 'Light' : 'Dark',
                toggleThemeMode: state.toggleThemeMode,
            };
        });
    };

    const [themeState, setThemeState] = useState({
        themeMode: 'Dark',
        toggleThemeMode: toggleThemeMode,
    });

    return (
        <ThemeContext.Provider
            value={{
                themeMode: themeState.themeMode,
                toggleThemeMode: themeState.toggleThemeMode,
            }}
        >
            <div
                className={
                    themeState.themeMode === 'Dark' ? 'App-dark' : 'App-light'
                }
            >
                <Header />
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route
                            path="/"
                            element={<Navigate to="/portfolio" />}
                        />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/about" element={<About />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </Suspense>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
