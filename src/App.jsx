import Hero from "./components/sections/Hero.jsx";
import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About.jsx";
import Skills from "./components/sections/Skills.jsx";
import Projects from "./components/sections/Projects.jsx";
import Contact from "./components/sections/Contact";
function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
