import './App.css';
import React from 'react';
import { NavBar } from './components/nav';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import Register from './components/register';
import { Footer } from './components/footer';

function App() {
  return (
    <div>
      <NavBar/> 
      <Home/>
      <About/>
      <Services/>
      <Register/>
      <Footer/>
      </div>
  );
}

export default App;
