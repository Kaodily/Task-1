import { useEffect, useState } from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import "./App.css";
import ContactForm from "./components/Contact/ContactForm";
import Footer from "./components/Footer";
import Home from "./Homepage/Home";

function App() {
  const [width, setWidth] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", getWidth);
    return () => {
      window.removeEventListener("resize", getWidth);
    };
  }, [width]);

  function getWidth() {
    return setWidth(window.innerWidth);
  }

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <Router>
    <div className="App">
        <Routes>
          <Route path="/" element={<Home width={width} isOpen={isOpen} handleClick={handleClick} />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Footer />
    </div>
      </Router>
  );
}

export default App;
