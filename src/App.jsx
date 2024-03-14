import "./App.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import ThemeState from "./context/ThemeState";

function App() {
  
  return (
    <>
      <ThemeState>
        <Navbar />
        <Home />
      </ThemeState>
    </>
  );
}

export default App;
