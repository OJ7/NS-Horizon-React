import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Home from './home/Home';

function App() {
  return (
    <div>
      <div className="Ns-container dark">
        <Home></Home>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;