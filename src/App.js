import React from 'react';
import './App.css';
import Navbar from './containers/Navbar/Navbar.js';
import Main from './containers/Main/Main.js';
import Footer from './containers/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
