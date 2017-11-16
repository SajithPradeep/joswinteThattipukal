import React, { Component } from 'react';
import logo from './logo.svg';
import './Styles/App.css';
import Accordion from './Components/Accordion/accordion.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Accordion />
      </div>
    );
  }
}

export default App;
