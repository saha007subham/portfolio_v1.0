import "./App.css";
import { ThemeProvider } from "./Context/themeContext";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";

function App() {
  return (
    <div className="custom-scrollbar-container">
      <ThemeProvider>
        <Header />
        <Home />
        <About />
        <Work />
        <Skills />
        <Contact />
      </ThemeProvider>
    </div>
  );
}

export default App;
