import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from "./Pages/About"
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Cart from './Pages/Cart';
import ProductDetails from "./Pages/ProductDetails"


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
