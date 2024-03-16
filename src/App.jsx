import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ThemeState from "./context/ThemeState";
import Skills from "./pages/Skills";
import About from "./About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="mx-2 lg:mx-5">
      <ThemeState>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Contact />
      </ThemeState>
    </div>
  );
}

export default App;
