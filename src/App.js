import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <main>
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
