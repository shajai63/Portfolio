import './App.css';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Footer from './Components/Footer';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
import Project from './Components/Project';
import Skill from './Components/Skill';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Intro/>
        <Education/>
        <Skill/>
        <Project/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
