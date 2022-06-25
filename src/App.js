import './App.css';
import Index from './pages/Index';
// import FloatingText from './Components/FloatingText/FloatingText';
import TawkTo from 'tawkto-react'
import { useEffect } from 'react';

const propertyId = '62b6a537b0d10b6f3e793d74';
const tawkId = '1g6cnap99'

function App() {
  useEffect(() => {
    new TawkTo(propertyId,tawkId)
  }, [])
  return (
    <Index />
  );
}

export default App;
