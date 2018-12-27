import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Router } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Router path='/' component={Home}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
