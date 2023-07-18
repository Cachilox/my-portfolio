import "./App.css";
import { useEffect } from "react";
import Aos from "aos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Componentes
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/UI/Hero";
import Education from "./components/UI/Education";
import Portfolio from "./components/UI/Portfolio";
import Contact from "./components/UI/Contact";
import Skills from "./components/UI/skills/Skills";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Education />
        <Skills />
        <Portfolio />
        <Contact />
        <ToastContainer />
      </main>
      <Footer />
    </>
  );
}

export default App;
