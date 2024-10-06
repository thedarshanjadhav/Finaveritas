import "./App.css";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import Services from "./components/Services";

function App() {
  return (
    <>
      <div className="scroll-smooth">
        <Navbar />
        <Hero />
        <AboutUs />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
