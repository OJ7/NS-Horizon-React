import './App.scss';

import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import AllSoftwarePage from './all-software/AllSoftwarePage';
import HomePage from './home/HomePage';

function App() {
  return (
    <div className="App">
      <div className="Ns-container dark">
        <HashRouter>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/all-software">
              <AllSoftwarePage />
            </Route>
          </Switch>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
