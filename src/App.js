import './App.css';
import ContactUs from './components/contactUs/ContactUs';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Intro from './components/intro/Inro';
import LinearGradient from './UI/LinearGradient';

function App() {
    return (
        <>
            <Header></Header>
            <Intro></Intro>
            <LinearGradient></LinearGradient>
            <ContactUs></ContactUs>
            <LinearGradient></LinearGradient>
            <Footer></Footer>
        </>
    );
}

export default App;
