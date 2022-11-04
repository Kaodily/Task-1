import { useEffect, useState } from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import "./App.css";
import ContactForm from "./components/Contact/ContactForm";
import Footer from "./components/Footer";
import Home from "./Homepage/Home";


const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
  isChecked: false,
}
function App() {
  const [width, setWidth] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState(initialState)
  const [firstNameValid, setFirstNameValid] = useState(false)
  const [lastNameValid, setLastNameValid] = useState(false)
  const [emailValid, setEmailValid] = useState(false)
  const [messageValid, setMessageValid] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    console.log(value)
    setFormData(prev => {
      return {
        ...prev,
        [name]: type=== 'checkbox' ? checked : value 
      }
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.firstName === '' ) {
      setFirstNameValid(true)
    } else {
      setFirstNameValid(false)
      
    }
    if (formData.email === '') {
      setEmailValid(true)
    } else {
      setEmailValid(false)
      
    }
    if (formData.lastName === '') {
      setLastNameValid(true)
    } else {
      setLastNameValid(false)
    }
    if (formData.message === '') {
      setMessageValid(true)
    }
    else {
      setMessageValid(false)
      
  }
  }
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
          <Route path="/contact" element={<ContactForm handleChange={handleChange}
            data={formData}
            firstName={firstNameValid}
            lastName={lastNameValid}
            email={emailValid}
            message={messageValid}
            handleSubmit={handleSubmit}
          />} />
        </Routes>
        <Footer />
    </div>
      </Router>
  );
}

export default App;
