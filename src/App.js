import React from 'react';
import logo from './logo.svg';
import './App.css';
import {requestPermission} from "./firebaseConfig";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={requestPermission}>
          Click here
        </button>
      </header>
    </div>
  );
}

export default App;
