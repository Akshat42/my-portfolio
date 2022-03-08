import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import ContactUs from './components/contactUs/ContactUs';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Intro from './components/intro/Inro';
import Projects from './components/projects/Projects';
import About from './pages/About';
import LinearGradient from './UI/LinearGradient';
function App() {
    return (
        <>
            <Route path="/" exact>
                <Redirect to="/home"></Redirect>
            </Route>
            <Route path="/home">
                <Header></Header>
                <Intro></Intro>
                <LinearGradient></LinearGradient>
                <Projects></Projects>
                <ContactUs></ContactUs>
                <LinearGradient></LinearGradient>
                <Footer></Footer>
            </Route>
            <Route path="/about" exact>
                <About></About>
            </Route>
        </>
    );
}

export default App;
