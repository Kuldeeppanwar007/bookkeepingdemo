// import logo from './logo.svg';
// import './App.css';
import About from './components/About';
import AboutNext from './components/AboutNext';
import Navbar from './components/Navbar';
import Form from './components/Form'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
       <Navbar />
       <About/>
       <AboutNext/>
       <Form/>
       <Footer/>
    </div>
  );
}

export default App;
