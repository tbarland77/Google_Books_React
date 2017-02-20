import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import SearchBooks from './SearchBooks';

class App extends Component {

  render() {
    return (
      <div className="App">
      <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Header />
      </div>
      <SearchBooks />
      </div>
    );
  }
}

export default App;
