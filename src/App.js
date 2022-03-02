import './App.css';
import ContactUs from './components/contactUs/ContactUs';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Intro from './components/intro/Inro';
import Projects from './components/projects/Projects';
import LinearGradient from './UI/LinearGradient';
//import firebase from 'firebase';

function App() {
    //console.log(firebase);
    return (
        <>
            <Header></Header>
            <Intro></Intro>
            <LinearGradient></LinearGradient>
            <Projects></Projects>
            <ContactUs></ContactUs>
            <LinearGradient></LinearGradient>
            <Footer></Footer>
        </>
    );
}

export default App;
