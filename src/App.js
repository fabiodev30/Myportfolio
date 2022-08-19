import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const listProjects = [
  { hrefimage:"https://cdn.scontispaziali.it/images/logos/sconti-spaziali.png",linksite:"https://scontispaziali.it" },
  { hrefimage:"https://www.windowsblogitalia.com/wp-content/uploads/2020/04/github-1.jpg",linksite:"https://scontispaziali.it" },

];

function App() {
  return (
    <main>
      <Header />
      <section className="bg-dark pb-4">
        <About />
      </section>
      <section className="pb-4" style={{backgroundColor:"#343a40"}}>
        <Projects progetti={listProjects}/>
      </section>
      <section className="bg-dark pb-4">
        <Skills />
      </section>
        <Contact />
      
    </main>
  );
}

export default App;
