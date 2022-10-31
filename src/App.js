import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Links from './components/Links';

function App() {
  const [width, setWidth] = useState('')
  const [isOpen,setIsOpen] = useState(false)
  useEffect(() => {
    window.addEventListener('resize', getWidth)
    return (() => {
      window.removeEventListener('resize', getWidth)
    })
  }, [width])
  function getWidth() {
    return  setWidth(window.innerWidth)
  }
  const handleClick = () => {
    setIsOpen(prev => !prev)
  }
  return (
    <div className="App">
      <Header width={width} isOpen={isOpen} handleClick={handleClick} />
      <Links />
      <Footer />
    </div>
  );
}

export default App;
