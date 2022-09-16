import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Nav />
      <section id='home'>
        <Home />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='skills'>
        <Skills />
      </section>
      <section id='contact'>
        <Contact />
      </section>
    </div>
  );
}

export default App;
