import React, { useState } from 'react';
import Nav from './components/Nav';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import ContactForm from './components/Contact';

function App() {
  return (
    <main>
    <div className="App">
      <About></About>
    </div>
    <footer>
      <Footer></Footer>
    </footer>
    </main>
  );
}

export default App;
