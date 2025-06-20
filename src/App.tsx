import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-batman-black text-batman-grey dark:text-batman-taupe relative overflow-x-hidden transition-colors duration-500">
        <ParticlesBackground />
        <div className="relative z-10">
          <Header />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;