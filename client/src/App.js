import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeContainer from './components/HomeContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Campaign Collect</h1>
        </header> */}
        <p className="App-intro">
          Printing Disbursements in Hawaii
        </p>
        <HomeContainer />
      </div>
    );
  }
}

export default App;
