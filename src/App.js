import './App.css';
import ContactUs from './components/contactUs/ContactUs';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import LinearGradient from './UI/LinearGradient';

function App() {
    return (
        <>
            <Header></Header>
            <LinearGradient></LinearGradient>
            <ContactUs></ContactUs>
            <LinearGradient></LinearGradient>
            <Footer></Footer>
        </>
    );
}

export default App;
