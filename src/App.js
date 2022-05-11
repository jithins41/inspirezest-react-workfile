import './App.css';
import Index from './pages/Index';
// import FloatingText from './Components/FloatingText/FloatingText';
import TawkTo from 'tawkto-react'
import { useEffect } from 'react';

const propertyId = '627b53bfb0d10b6f3e719c25';
const tawkId = '1g2oru9p5'

function App() {
  useEffect(() => {
    let tawkto = new TawkTo(propertyId,tawkId)
  }, [])
  return (
    <Index />
  );
}

export default App;
