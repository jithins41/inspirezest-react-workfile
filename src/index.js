import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ApplyOnline from './pages/ApplyOnline';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route exact path='/' element={<App />} />
        <Route exact path='about' element={<About />} />
        <Route exact path='services' element={<Services />} />
        <Route exact path='contact' element={<Contact />} />
        <Route exact path='career' element={<ApplyOnline />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

