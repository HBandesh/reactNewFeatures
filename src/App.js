import React from 'react';
import { LifeCycleMethods } from "./components/lifeCycleMethodsComponent";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <LifeCycleMethods data="Harnoor"></LifeCycleMethods>
      </header>
    </div>
  );
}

export default App;
