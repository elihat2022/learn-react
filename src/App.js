
import './App.css';
import Nav from './components/Nav'
import Header from './components/Header'
import Promo from './components/Promo'
import Intro1 from './components/Intro1.js';
import Intro2 from './components/Intro2.js';
import Intro3 from './components/Intro3.js';
import Footer from './components/Footer.js';

function App() {
  return (
  
  <div className='App'>
    <Nav/>
    
    <Header name = "Elihat"/>
    This is my first component
    <Promo/>
    <Intro1/>
    <Intro2/>
    <Intro3/>
    <Footer/>

  </div>)
}

export default App;
