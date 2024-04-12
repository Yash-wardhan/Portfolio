import Header from '../src/components/Header/Header'
import Home from './components/Header/Home';
import About from "./components/About/About";
import Skills from './components/Skill/Skills';
import Portfilo from './components/Portfilo/Portfilo';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="max-w-7xl mx-auto mt-4 ">
        <Home />
        <About />
        <Skills />
        <Portfilo />
        <Contact />
      </main>
    </div>
  );
}

export default App;
