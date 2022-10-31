import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Links from './components/Links';

function App() {
  const [width, setWidth] = useState('')
  useEffect(() => {
    window.addEventListener('resize', getWidth)
    return (() => {
      window.removeEventListener('resize', getWidth)
    })
  }, [width])
  function getWidth() {
    return  setWidth(window.innerWidth)
  }
  return (
    <div className="App">
      <Header width={width} />
      <Links />
      <Footer />
    </div>
  );
}

export default App;
